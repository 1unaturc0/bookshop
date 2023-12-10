"use strict"

const cartBtnValue = document.querySelector(".cart-btn span");
const partners = document.querySelector(".partners");
const partnersBtn = document.querySelector(".partners-btn");
const articlesList = document.querySelectorAll(".article");
const itemsBlocks = document.querySelectorAll(".items-block");
const buyBtns = document.querySelectorAll(".buy-btn");
const reviewsList = document.querySelector(".reviews-list");

function BookData() {
    this.image = "http://place-hold.it/189x250";
    this.author = "Автор";
    this.price = Math.floor(Math.random() * 2000 + 500);
}

function ReviewData() {
    this.rating = Math.floor(Math.random() * 11) / 2;
    this.description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id similique, quo exercitationem omnis ex sed commodi tenetur non possimus quod illum beatae ipsa culpa perferendis dolore minus molestias esse dolorem.";
    this.sender = "Иван Иванов";
}

const getBooksData = qty => {
    const booksData = [];
    for (let i = 0; i < qty; i++)
        booksData.push(new BookData());
    return booksData;
};

const createBookElement = bookData => {
    const item = document.createElement("div");
    const img = document.createElement("img");
    const header = document.createElement("h4");
    const author = document.createElement("p");
    const price = document.createElement("p");
    const span = document.createElement("span");
    const abbr = document.createElement("abbr");
    const moreBtn = document.createElement("button");
    const questionCircle = document.createElement("i");
    const buyBtn = document.createElement("button");

    item.classList.add("item");
    img.setAttribute("src", bookData.image);
    img.setAttribute("alt", "");
    img.setAttribute("width", "189px");
    img.setAttribute("height", "250px");
    author.classList.add("author");
    author.innerHTML = bookData.author;
    price.classList.add("price");
    price.innerHTML = `<b>${bookData.price}</b>`;
    abbr.setAttribute("title", "Подробнее");
    moreBtn.classList.add("more-btn");
    questionCircle.classList.add("fa-solid");
    questionCircle.classList.add("fa-question-circle");
    buyBtn.classList.add("buy-btn");
    buyBtn.innerHTML = "Купить";
    buyBtn.addEventListener("click", () => {
        cartBtnValue.style.display = "flex";
        cartBtnValue.innerHTML = parseInt(cartBtnValue.innerHTML) + 1;
    });
    
    item.append(img, header, author, price, span);
    span.append(abbr, buyBtn);
    abbr.append(moreBtn);
    moreBtn.append(questionCircle);

    return item;
};

const getReviewsData = qty => {
    const reviewsData = [];
    for (let i = 0; i < qty; i++)
        reviewsData.push(new ReviewData());
    return reviewsData;
};

const createReviewElement = reviewData => {
    const review = document.createElement("div");
    const rating = document.createElement("div");
    const description = document.createElement("p");
    const sender = document.createElement("p");

    review.classList.add("review");
    rating.classList.add("rating");
    description.classList.add("description");
    sender.classList.add("sender");

    review.append(rating, description, sender);
    for (let i = 0; i < reviewData.rating - 0.5; i++) {
        const star = document.createElement("i");
        star.classList.add("fa-solid");
        star.classList.add("fa-star");
        rating.append(star);
    }
    if ((reviewData.rating * 10) % 10 != 0) {
        const halfStar = document.createElement("i");
        halfStar.classList.add("fa-solid");
        halfStar.classList.add("fa-star-half");
        rating.append(halfStar);
    }
    description.innerHTML = reviewData.description;
    sender.innerHTML = `От: ${reviewData.sender}`;
    return review;
};

partnersBtn.addEventListener("click", () =>
    partners.classList.toggle("toggled")
);

[...buyBtns].forEach(btn => 
    btn.addEventListener("click", () => {
        cartBtnValue.innerHTML = parseInt(cartBtnValue.innerHTML) + 1;
        cartBtnValue.style.display = "flex";
    })    
);

document.addEventListener("DOMContentLoaded", () => {
    [...articlesList].forEach(article => {
        const p = article.querySelector("p");
        p.innerHTML = truncate(p.innerHTML, 70);
    });
    [...itemsBlocks].forEach(itemsBlock => {
        const booksData = getBooksData(10);
        booksData.forEach(bookData => 
            itemsBlock.querySelector(".items").append(createBookElement(bookData))
        );
    });
    const reviewsData = getReviewsData(10);
    reviewsData.forEach(reviewData => 
        reviewsList.append(createReviewElement(reviewData))
    );
});
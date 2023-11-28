"use strict"

const catalogContent = document.querySelector(".catalog-content");
const cartBtnValue = document.querySelector(".cart-btn span");
const classicalProseBtn = document.querySelector(".classical-prose-btn");
const fantasyBtn = document.querySelector(".fantasy-btn");
const detectiveBtn = document.querySelector(".detective-btn");
const publicismBtn = document.querySelector(".publicism-btn");
const lyricBtn = document.querySelector(".lyric-btn");
const catalogList = document.querySelector(".catalog-list");
const sortSelect = document.querySelector(".sort-select");
const classicalProse = document.querySelector(".classical-prose");
const fantasy = document.querySelector(".fantasy");
const detective = document.querySelector(".detective");
const publicism = document.querySelector(".publicism");
const lyric = document.querySelector(".lyric");
const switchCategory = document.querySelector(".switch-category");

const booksData = [];
const categoriesTitles = [
    "Classical prose", 
    "Fantasy", 
    "Detective", 
    "Publicism", 
    "Lyric"
];

function BookData(popularity) {
    this.image = "http://placehold.it/189x250";
    this.title = "Название";
    this.author = "Автор";
    this.price = Math.floor(Math.random() * 2000 + 500);
    this.category = categoriesTitles[Math.floor(Math.random() * categoriesTitles.length)];
    this.popularity = popularity;
}

const generateBooksData = qty => {
    for (let i = 0; i < qty; i++)
        booksData.push(new BookData(i + 1));
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

    switch(bookData.category) {
        case "Classical prose":
            return [item, classicalProse.querySelector(".items")];
        case "Fantasy":
            return [item, fantasy.querySelector(".items")];
        case "Detective":
            return [item, detective.querySelector(".items")];
        case "Publicism":
            return [item, publicism.querySelector(".items")];
        case "Lyric":
           return [item, lyric.querySelector(".items")];
    };
};

const insertBooks = () => 
    booksData.forEach(bookData => {
        const [book, parent] = createBookElement(bookData);
        parent.append(book);
    });

const sortBooksData = prop =>
    booksData.sort((a, b) => {
        if (a[prop] > b[prop])
            return 1;
        if (a[prop] < b[prop])
            return -1;
        return 0;
    });

classicalProseBtn.addEventListener("click", () => {
    catalogList.classList.remove(...[...catalogList.classList].filter(className =>
        className != "catalog-list"
    ));
    catalogList.classList.add("toggled-classical-prose");
    catalogContent.classList.remove("toggled-category-switcher");
});

fantasyBtn.addEventListener("click", () => {
    catalogList.classList.remove(...[...catalogList.classList].filter(className =>
        className != "catalog-list"
    ));
    catalogList.classList.add("toggled-fantasy");
    catalogContent.classList.remove("toggled-category-switcher");
});

detectiveBtn.addEventListener("click", () => {
    catalogList.classList.remove(...[...catalogList.classList].filter(className =>
        className != "catalog-list"
    ));
    catalogList.classList.add("toggled-detective");
    catalogContent.classList.remove("toggled-category-switcher");
});

publicismBtn.addEventListener("click", () => {
    catalogList.classList.remove(...[...catalogList.classList].filter(className =>
        className != "catalog-list"
    ));
    catalogList.classList.add("toggled-publicism");
    catalogContent.classList.remove("toggled-category-switcher");
});

lyricBtn.addEventListener("click", () => {
    catalogList.classList.remove(...[...catalogList.classList].filter(className =>
        className != "catalog-list"
    ));
    catalogList.classList.add("toggled-lyric");
    catalogContent.classList.remove("toggled-category-switcher");
});

sortSelect.addEventListener("change", e => {
    document.querySelectorAll(".item").forEach(item =>
        item.remove()
    );
    sortBooksData(e.target.value);
    insertBooks();
});

switchCategory.addEventListener("click", () => {
    catalogContent.classList.add("toggled-category-switcher")
    catalogList.classList.remove(...[...catalogList.classList].filter(className =>
        className != "catalog-list"
    ));
});

document.addEventListener("DOMContentLoaded", () => {
    generateBooksData(40);
    insertBooks();
});
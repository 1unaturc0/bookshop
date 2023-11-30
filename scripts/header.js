"use strict"

const header = document.querySelector("header");
const toggleSearchBarBtn = document.querySelector("#toggle-search-bar-btn");
const nav = document.querySelector("header nav");
const burgerBtn = document.querySelector(".burger-btn");
const indexBtn = document.querySelector(".index-btn");
const profileBtn = document.querySelector(".profile-btn");
const catalogBtn = document.querySelector(".catalog-btn");
const articlesBtn = document.querySelector(".articles-btn");
const cartBtn = document.querySelector(".cart-btn");

burgerBtn?.addEventListener("click", () =>
    nav.classList.toggle("opened")
);

indexBtn?.addEventListener("click", () =>
    window.location.href = "/"
);

profileBtn?.addEventListener("click", () =>
    window.location.href = "/profile.html"
);

catalogBtn?.addEventListener("click", () =>
    window.location.href = "/catalog.html"
);

articlesBtn?.addEventListener("click", () =>
    window.location.href = "/articles.html"
);

cartBtn?.addEventListener("click", () =>
    window.location.href = "/cart.html"
);

toggleSearchBarBtn.addEventListener("click", () => {
    header.classList.toggle("search-bar-toggled");
    if (!header.classList.contains("search-bar-toggled"))
        searchBar.value = "";
});
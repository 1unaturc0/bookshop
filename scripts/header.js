"use strict"

const header = document.querySelector("header");
const toggleSearchBarBtn = document.querySelector("#toggle-search-bar-btn");
const nav = document.querySelector("header nav");
const burgerBtn = document.querySelector(".burger-btn");

burgerBtn.addEventListener("click", () =>
    nav.classList.toggle("opened")
);

toggleSearchBarBtn.addEventListener("click", () => {
    header.classList.toggle("search-bar-toggled");
    if (!header.classList.contains("search-bar-toggled"))
        searchBar.value = "";
});
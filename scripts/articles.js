"use strict"

const scrollUpBtn = document.querySelector(".scroll-up-btn");
const descriptionsList = document.querySelectorAll(".article span p");

window.addEventListener("scroll", () => {
    console.log(document.querySelector("html").scrollTop);
    document.querySelector("html").scrollTop > 400 ? 
        scrollUpBtn.style.display = "block" : 
        scrollUpBtn.style.display = "none"
});

document.addEventListener("DOMContentLoaded", () =>
    [...descriptionsList].forEach(desc =>
        desc.innerHTML = truncate(desc.innerHTML, 100)
    )
);
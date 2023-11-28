"use strict"

const clearBtn = document.querySelector(".clear-btn");
const items = document.querySelector(".items");
const itemsList = document.querySelectorAll(".items .item");
const noItems = document.querySelector(".no-items");
const totalPrice = document.querySelector(".total-price b");
const totalDiscount = document.querySelector(".total-discount b");
const finalPrice = document.querySelector(".final-price b");

const removeItem = item => {
    item.remove();
    if (!items.querySelector(".item"))
        noItems.style.display = "block";
}

clearBtn.addEventListener("click", () => 
    itemsList.forEach(item =>
        removeItem(item)
    )
);

itemsList.forEach(item => {
    const minusBtn = item.querySelector(".minus-btn");
    const plusBtn = item.querySelector(".plus-btn");
    const qty = item.querySelector(".qty-btn span");
    const unitPriceValue = item.querySelector(".item-price span").innerHTML;
    const totalItemPrice = item.querySelector(".item-price b");

    const updateItemPrice = () =>
        totalItemPrice.innerHTML = parseFloat(unitPriceValue.slice(0, unitPriceValue.indexOf('/'))) * parseInt(qty.innerHTML);

    minusBtn.addEventListener("click", () => {
        qty.innerHTML = parseInt(qty.innerHTML) - 1;
        if (!parseInt(qty.innerHTML))
            removeItem(item);
        updateItemPrice();
        totalPrice.innerHTML = parseFloat(totalPrice.innerHTML) - parseFloat(unitPriceValue.slice(0, unitPriceValue.indexOf('/')));
        finalPrice.innerHTML = parseFloat(totalPrice.innerHTML) - parseFloat(totalDiscount.innerHTML);
    });

    plusBtn.addEventListener("click", () => {
        qty.innerHTML = parseInt(qty.innerHTML) + 1;
        updateItemPrice();
        totalPrice.innerHTML = parseFloat(totalPrice.innerHTML) + parseFloat(unitPriceValue.slice(0, unitPriceValue.indexOf('/')));
        finalPrice.innerHTML = parseFloat(totalPrice.innerHTML) - parseFloat(totalDiscount.innerHTML);
    });

    updateItemPrice();
    totalPrice.innerHTML = parseFloat(totalPrice.innerHTML) + parseFloat(totalItemPrice.innerHTML);
});

document.addEventListener("DOMContentLoaded", () => {
    if (!items.querySelector(".item"))
        noItems.style.display = "block";
    finalPrice.innerHTML = parseFloat(totalPrice.innerHTML) - parseFloat(totalDiscount.innerHTML);
});
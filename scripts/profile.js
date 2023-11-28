"use strict"

const profileManagement = document.querySelector(".profile-management");
const personalBtn = document.querySelector(".personal-btn");
const ordersBtn = document.querySelector(".orders-btn");
const logOutBtn = document.querySelector(".log-out-btn");
const tabs = document.querySelector(".tabs");
const switchTab = document.querySelector(".switch-tab");
const orders = document.querySelector(".orders");
const activeOrdersBtn = document.querySelector(".active-orders-btn");
const completeOrdersBtn = document.querySelector(".complete-orders-btn");
const cancelledOrdersBtn = document.querySelector(".cancelled-orders-btn");
const activeOrders = document.querySelector(".active-orders");
const completeOrders = document.querySelector(".complete-orders");
const cancelledOrders = document.querySelector(".cancelled-orders");
const ordersHeaders = [...document.querySelectorAll(".order h3")];

personalBtn.addEventListener("click", () => {
    profileManagement.classList.remove("toggled-tab-switcher");
    tabs.classList.remove(...[...tabs.classList].filter(className => 
        className != "tabs"
    ));
    tabs.classList.add("toggled-personal");
});

ordersBtn.addEventListener("click", () => {
    profileManagement.classList.remove("toggled-tab-switcher");
    tabs.classList.remove(...[...tabs.classList].filter(className => 
        className != "tabs"
    ));
    tabs.classList.add("toggled-orders");
});

logOutBtn.addEventListener("click", () =>
    guestForms.style.display = "flex"
);

switchTab.addEventListener("click", () => {
    profileManagement.classList.toggle("toggled-tab-switcher");
    tabs.classList.remove(...[...tabs.classList].filter(className =>
        className != "tabs"
    ));
});

activeOrdersBtn.addEventListener("click", () => {
    orders.classList.remove(...[...orders.classList].filter(className => 
        className != "orders" && className != "tab"
    ));
    orders.classList.add("toggled-active-orders");
});

completeOrdersBtn.addEventListener("click", () => {
    orders.classList.remove(...[...orders.classList].filter(className => 
        className != "orders" && className != "tab"
    ));
    orders.classList.add("toggled-complete-orders");
});

cancelledOrdersBtn.addEventListener("click", () => {
    orders.classList.remove(...[...orders.classList].filter(className => 
        className != "orders" && className != "tab"
    ));
    orders.classList.add("toggled-cancelled-orders");
});

document.addEventListener("DOMContentLoaded", () => {
    ordersHeaders.forEach(h =>
        h.innerHTML = truncate(h.innerHTML, 16)
    );
    [activeOrders, completeOrders, cancelledOrders].forEach(el => {
        if (!el.querySelector(".order"))
            el.querySelector(".no-orders").style.display = "block";
    });
});
"use strict"

const guestForms = document.querySelector(".guest-forms");
const login = document.querySelector(".authorize-form .login");
const authorizeEmailInput = document.querySelector(".authorize-form .email input");
const authorizeTelInput = document.querySelector(".authorize-form .tel input");
const authorizeSwitchLoginBtn = document.querySelector(".authorize-form .login button");
const authorizeSwitchLoginIcon = document.querySelector(".authorize-form .login button i");
const registrate = document.querySelector(".authorize-form .registrate");
const authorize = document.querySelector(".registrate-form .authorize");

authorizeTelInput.addEventListener("focus", () => {
    if (!authorizeTelInput.value)
        authorizeTelInput.value += '+';
});

authorizeTelInput.addEventListener("blur", () => {
    if(authorizeTelInput.value == "+")
        authorizeTelInput.value = "";
});

authorizeSwitchLoginBtn.addEventListener("click", () => {
    login.classList.toggle("toggled-email");
    login.classList.toggle("toggled-tel");
    authorizeSwitchLoginIcon.classList.toggle("fa-phone");
    authorizeSwitchLoginIcon.classList.toggle("fa-envelope");
});

registrate.addEventListener("click", () => {
    [...document.querySelectorAll(".authorize-form input")].forEach(input =>
        input.value = ""
    );
    guestForms.classList.toggle("authorization");
    guestForms.classList.toggle("registration");
});

authorize.addEventListener("click", () => {
    [...document.querySelectorAll(".registrate-form input")].forEach(input =>
        input.value = ""
    );
    guestForms.classList.toggle("authorization");
    guestForms.classList.toggle("registration");
});

document.addEventListener("DOMContentLoaded", () =>
    [...document.querySelectorAll(".guest-forms input")].forEach(input =>
        input.value = ""
    )
);

[...document.querySelectorAll('.guest-forms form button[type="submit"]')].forEach(btn => 
    btn.addEventListener("click", () => 
        guestForms.style.display = "none"
    )
);
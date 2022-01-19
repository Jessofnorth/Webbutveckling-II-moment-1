"use strict"

const boom = document.querySelector(".boom");
const mode = document.querySelector(".mode");
boom.addEventListener("click", function() {
    mode.classList.toggle("is-active");
    console.log("knappen blir klickad")

});
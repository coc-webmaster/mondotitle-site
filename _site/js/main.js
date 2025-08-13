// src/js/main.js
const hamburgerMenu = document.querySelector('.hamburger-menu');
const mainNav = document.querySelector('.main-nav');

if (hamburgerMenu && mainNav) {
    hamburgerMenu.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });
}

document.getElementById("year").textContent = new Date().getFullYear();
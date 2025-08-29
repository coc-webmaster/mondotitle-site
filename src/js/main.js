// src/js/main.js
const hamburgerMenu = document.querySelector('.hamburger-menu');
const mainNav = document.querySelector('.main-nav');

if (hamburgerMenu && mainNav) {
    hamburgerMenu.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });
}

document.getElementById("year").textContent = new Date().getFullYear();

// --- Clear form fields every time a page with a form loads ---
window.addEventListener('load', function() {
  // Find all forms with the class 'contact-form'
  const forms = document.querySelectorAll('.contact-form');
  // Loop through them and reset each one.
  forms.forEach(form => {
    form.reset();
  });
});
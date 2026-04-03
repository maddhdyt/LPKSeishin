const hamburger = document.querySelector('#hamburger');
const mobileLinks = document.querySelector('.mobile-links');

hamburger.addEventListener('click', function () {
    mobileLinks.classList.toggle("active");
});

const dropdown = document.querySelector('.dropdown');
const dropdownMenu = document.querySelector('.dropdown-menu-mobile');

dropdown.addEventListener('click', function () {
    dropdownMenu.classList.toggle('active');
});
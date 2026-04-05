document.addEventListener("DOMContentLoaded", function () {
   const hamburgerBtn = document.getElementById("hamburger-btn");
   const navMenu = document.getElementById("nav-menu");
   const navbarContainer = document.querySelector(".navbar-container");

   window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
         navbarContainer.classList.add("scrolled");
      } else {
         navbarContainer.classList.remove("scrolled");
      }
   });

   hamburgerBtn.addEventListener("click", function () {
      hamburgerBtn.classList.toggle("active");
      navMenu.classList.toggle("active");
   });

   const navLinks = document.querySelectorAll("a.nav-item, .dropdown-link");
   navLinks.forEach(link => {
      link.addEventListener("click", () => {
         hamburgerBtn.classList.remove("active");
         navMenu.classList.remove("active");
      });
   });

   // --- FUNGSI KLIK DROPDOWN DI MOBILE ---
   const dropdownToggle = document.querySelector('.dropdown-toggle');
   if (dropdownToggle) {
      dropdownToggle.addEventListener('click', function (e) {
         if (window.innerWidth <= 991) {
            e.preventDefault();
            e.stopPropagation();


            this.parentElement.classList.toggle('active');
         }
      });
   }
});
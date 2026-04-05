const video = document.getElementById('myVideo');
const playBtn = document.getElementById('playBtn');
const videoWrapper = document.getElementById('videoWrapper');

// --- FUNGSI VIDEO PLAY ---
if (playBtn) {
playBtn.addEventListener('click', function () {
    if (video.paused) {
        video.play();
        video.setAttribute('controls', 'true');
        videoWrapper.classList.add('is-playing');
    }
});}

// --- FUNGSI FAQ ACCORDION ---
document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});

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
        dropdownToggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 991) {
                e.preventDefault(); 
                e.stopPropagation(); 
                
                this.parentElement.classList.toggle('active');
            }
        });
    }
});
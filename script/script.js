const video = document.getElementById('myVideo');
const playBtn = document.getElementById('playBtn');
const videoWrapper = document.getElementById('videoWrapper');

// --- FUNGSI VIDEO PLAY ---
playBtn.addEventListener('click', function () {
    if (video.paused) {
        video.play();
        video.setAttribute('controls', 'true');
        videoWrapper.classList.add('is-playing');
    }
});

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
const video = document.getElementById('myVideo');
const playBtn = document.getElementById('playBtn');
const videoWrapper = document.getElementById('videoWrapper');

playBtn.addEventListener('click', function () {
    if (video.paused) {
        video.play();
        video.setAttribute('controls', 'true');
        videoWrapper.classList.add('is-playing');
    }
});
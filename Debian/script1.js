document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.getElementById('playButton');
    const video = document.getElementById('video');
    const videoThumbnail = document.getElementById('videoThumbnail');

    playButton.addEventListener('click', function() {
        videoThumbnail.style.opacity = '0';
        playButton.style.display = 'none';

        video.style.display = 'block';
        video.play();
    });

    video.addEventListener('ended', function() {
        videoThumbnail.style.opacity = '1';
        playButton.style.display = 'block';
        video.style.display = 'none';
        video.currentTime = 0; // Riavvolgi il video
    });
});


const musicToggleButton = document.getElementById('musicToggle');
const audio = document.getElementById('audio');

let isPlaying = false;
audio.volume = 0.3;

const updateButtonText = () => {
    musicToggleButton.textContent = isPlaying ? 'Spegni Musica' : 'Accendi Musica';
};

const toggleMusic = () => {
    if (isPlaying) {
        audio.pause();
    } else {
        audio.play();
    }
    isPlaying = !isPlaying;
    updateButtonText();
};

musicToggleButton.addEventListener('click', toggleMusic);

window.addEventListener('load', () => {
    audio.play();
    isPlaying = true;
    updateButtonText();
});


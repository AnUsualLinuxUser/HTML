document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleMenu');
    const menu = document.getElementById('menu');

    toggleButton.addEventListener('click', function() {
        // Alterna la classe 'visible' per mostrare o nascondere il menu
        menu.classList.toggle('visible');
        
        // Cambia l'icona della freccia
        if (menu.classList.contains('visible')) {
            toggleButton.innerHTML = '&#9650;'; 
        } else {
            toggleButton.innerHTML = '&#9660;'; 
        }
    });
});

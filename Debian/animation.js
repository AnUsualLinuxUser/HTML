document.addEventListener('DOMContentLoaded', function() {
    const categories = document.querySelectorAll('.category');

    categories.forEach(category => {
        category.addEventListener('mouseover', function() {
            const animatedSrc = category.getAttribute('data-animated'); 
            category.style.backgroundImage = `url(${animatedSrc})`; 
        });

        // Quando il mouse esce dal riquadro
        category.addEventListener('mouseout', function() {
            const staticSrc = category.getAttribute('data-static');
            category.style.backgroundImage = `url(${staticSrc})`; 
        });
    });

    document.querySelectorAll('.category-link').forEach(link => {
        link.addEventListener('mouseenter', function() {
            const category = link.closest('.category'); 
            const gifPath = link.getAttribute('data-gif'); 

            category.style.backgroundImage = `url('${gifPath}')`; 
        });

        link.addEventListener('mouseleave', function() {
            const category = link.closest('.category'); 
            const staticImagePath = category.style.backgroundImage.match(/url\(['"]?([^'"]+)['"]?\)/)[1];  
            category.style.backgroundImage = `url('${staticImagePath}')`; 
        });
    });

    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', function() {
            const dropdownContent = this.querySelector('.dropdown-content');
            if (dropdownContent) {
                dropdownContent.style.display = 'block'; 
            }
        });

        dropdown.addEventListener('mouseleave', function() {
            const dropdownContent = this.querySelector('.dropdown-content');
            if (dropdownContent) {
                dropdownContent.style.display = 'none'; 
            }
        });
    });
});


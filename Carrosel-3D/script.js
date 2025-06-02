const carousel = document.querySelector('.carousel');

carousel.addEventListener('wheel', (event) => {
    event.preventDefault(); // Impede o scroll vertical padrão
    carousel.scrollLeft += event.deltaY; // Move horizontalmente com o scroll do mouse
});
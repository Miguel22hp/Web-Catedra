let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item-Rooted');
    const totalSlides = slides.length;

    // Asegurarse de que el índice esté dentro del rango
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    // Mover el carrusel
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner-Rooted').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    console.log('nextSlide');
    showSlide(currentIndex + 1);
}

function prevSlide() {
    console.log('prevSlide');
    showSlide(currentIndex - 1);
}

// Configurar el carrusel para avanzar automáticamente cada 5 segundos
setInterval(() => nextSlide(), 7000);
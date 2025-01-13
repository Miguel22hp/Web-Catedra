let currentIndexTeam = 0;
let carouselInterval;

function showSlideTeam(indexTeam) {
    const slidesTeam = document.querySelectorAll('.carouselTeamItem');
    const totalSlidesTeam = slidesTeam.length;

    // Asegurarse de que el índice esté dentro del rango
    if (indexTeam >= totalSlidesTeam) {
        currentIndexTeam = 0; // Volver al primer slide
    } else if (indexTeam < 0) {
        currentIndexTeam = totalSlidesTeam - 1; // Volver al último slide
    } else {
        currentIndexTeam = indexTeam;
    }

    slidesTeam.forEach(slide => {
        slide.classList.remove('active');
    });

    slidesTeam[currentIndexTeam].classList.add('active');

    // Mover el carrusel
    const offsetTeam = -currentIndexTeam * 100;
    document.querySelector('.carousel-inner-Team').style.transform = `translateX(${offsetTeam}%)`;
}

// Función para pasar al siguiente slide
function nextSlideTeam() {
    console.log("Next");
    showSlideTeam(currentIndexTeam + 1);
}

//Reiniciar el intervalo del carousel
function startCarouselInterval() {
    clearInterval(carouselInterval);
    carouselInterval = setInterval(() => nextSlideTeam(), 7000);
}

// Función para pasar al slide anterior
function prevSlideTeam() {
    console.log("Prev");
    showSlideTeam(currentIndexTeam - 1);
}

document.getElementById('PrevButtonTeam').addEventListener('click', () => {
    prevSlideTeam();
    startCarouselInterval();
});

document.getElementById('NextButtonTeam').addEventListener('click', () => {
    nextSlideTeam();
    startCarouselInterval(); 
});
// Iniciar el intervalo cuando la página se carga
startCarouselInterval();
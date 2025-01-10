let currentIndexTeam = 0;

function showSlideTeam(indexTeam) {
    const slidesTeam = document.querySelectorAll('.carouselTeamItem');
    const totalSlidesTeam = slidesTeam.length;
    console.log("Empieza");
    console.log(currentIndexTeam);

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

// Configurar el carrusel para avanzar automáticamente cada 7 segundos
setInterval(() => nextSlideTeam(), 7000);

// Función para pasar al siguiente slide
function nextSlideTeam() {
    showSlideTeam(currentIndexTeam + 1);
}
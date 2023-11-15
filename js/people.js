var teamData = [
    {
        image: "images/People/Javier_Sanchez.png",
        name: "Javier Sánchez Tirados",
        description: "Alumno de la Universidad Politécnica de Madrid y becario de la Cátedra INNOVA-tsn UPM."
    },
    {
        image: "images/People/Miguel_Hernando.png",
        name: "Miguel Hernando Padilla",
        description: "Alumno de la unIVersidad Politécnica de Madrid y becario de la Cátedra INNOVA-tsn UPM."
    },
    {
        image: "images/People/Ana_Maria_Niño.png",
        name: "Ana María Niño",
        description: "Coordinadora de la Cátedra INNOVA-tsn UPM por parte de Innova-tsn."
    },
    {
        image: "images/People/Begoña_Vega.png",
        name: "Begoña Vega",
        description: "Head of AI Models & Applications AI Solutions & Strategy en Innova-tsn."
    },
    {
        image: "images/People/Jose_Ignacio_Bernaldo.png",
        name: "Jose Ignacio Bernaldo",
        description: "Advance Analytics Manager en Innova-tsn."
    },
    {
        image: "images/People/Juan_Ignacio.png",
        name: "Juan Ignacio",
        description: "UK Country Manager & Global Head of AI en Innova-tsn."
    },
    {
        image: "images/People/Mencía_Vega.png",
        name: "Mencía Vega",
        description: "Talento y Cultura en Innova-tsn."
    },
    {
        image: "images/People/Rosario_Guerra.png",
        name: "Rosario Guerra",
        description: "Directora de la Cátedra INNOVA-tsn UPM por parte de Innova-tsn."
    },
    {
        image: "images/People/Nuria.png",
        name: "Nuria Estebas",
        description: "Marketing  & Communication Manager en Innova-tsn."
    },
    {
        image: "images/People/Jaime.png",
        name: "Jaime Ramírez",
        description: ""
    },
    {
        image: "images/People/Elena.png",
        name: "Elena Villalba",
        description: "Directora de la Cátedra INNOVA-tsn UPM por parte de la Universidad Politécnica de Madrid."
    },
    {
        image: "images/People/Cristian.png",
        name: "Cristian Moral",
        description: ""
    },
    {
        image: "images/People/Angelica.png",
        name: "Angelica",
        description: ""
    },
    {
        image: "images/People/Jose_Maria.png",
        name: "Jose_Maria",
        description: ""
    },
    {
        image: "images/People/Loic.png",
        name: "Loic",
        description: ""
    },
    {
        image: "images/People/Ricardo.png",
        name: "Ricardo",
        description: ""
    },

];

var currentIndex = 0;
var isTransitioning = false;

function updateContent() {
    isTransitioning = true;
    var photo = document.getElementById("TeamPhotosPerson");
    var title = document.querySelector("#TeamPhotosPersonFig h3");
    var description = document.querySelector("#TeamPhotosPersonFig p");

    photo.style.opacity = 0;
    title.style.opacity = 0;
    description.style.opacity = 0;  

    setTimeout(function () {
        photo.src = teamData[currentIndex].image;
        title.textContent = teamData[currentIndex].name;
        description.textContent = teamData[currentIndex].description;
        photo.style.opacity = 1;
        title.style.opacity = 1;
        description.style.opacity = 1;
        isTransitioning = false;
    }, 500);
}

document.getElementById("ButtonLeft").addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + teamData.length) % teamData.length;
    updateContent();
});

document.getElementById("ButtonRight").addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % teamData.length;
    updateContent();
});

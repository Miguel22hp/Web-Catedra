var teamData = [
    {
        image: "images/People/Javier_Sanchez.png",
        name: "Javier Sánchez Tirados",
        description: "Alumno de la Universidad Politécnica de Madrid y becario de la Cátedra INNOVA-tsn UPM."
    },
    {
        image: "images/People/Miguel_Hernando.jpeg",
        name: "Miguel Hernando Padilla",
        description: ""
    },
    {
        image: "images/People/Ana_Maria_Niño.jpg",
        name: "Ana María Niño",
        description: ""
    },
    {
        image: "images/People/Begoña_Vega.png",
        name: "Begoña Vega",
        description: ""
    },
    {
        image: "images/People/Jose_Ignacio_Bernaldo.png",
        name: "Jose Ignacio Bernaldo",
        description: ""
    },
    {
        image: "images/People/Juan_Ignacio_sinfondo.png",
        name: "Juan Ignacio",
        description: ""
    },
    {
        image: "images/People/Mencía_Vega.png",
        name: "Mencía Vega",
        description: ""
    },
    {
        image: "images/People/Rosario_Guerra.png",
        name: "Rosario Guerra",
        description: ""
    },
    {
        image: "images/People/Nuria_1.png",
        name: "Nuria",
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

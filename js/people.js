var teamData = [
    {
        image: "/images/people/ME.png",
        name: "Javier Sánchez Tirados",
        description: "Alumno de la Universidad Politécnica de Madrid y becario de la Cátedra INNOVA-tsn UPM."
    },
    {
        image: "/images/people/Ana María Niño.jpg",
        name: "Ana María Niño",
        description: ""
    },
    {
        image: "/images/people/Begoña Vega.png",
        name: "Begoña Vega",
        description: ""
    },
    {
        image: "/images/people/Jose Ignacio Bernaldo.png",
        name: "Jose Ignacio Bernaldo",
        description: ""
    },
    {
        image: "/images/people/Juan Ignacio_sinfondo.png",
        name: "Juan Ignacio",
        description: ""
    },
    {
        image: "/images/people/Mencía Vega.png",
        name: "Mencía Vega",
        description: ""
    },
    {
        image: "/images/people/Rosario Guerra.png",
        name: "Rosario Guerra",
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

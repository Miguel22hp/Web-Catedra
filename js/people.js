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
        image: "/images/people/Juan Ignacio_mapa.jpg",
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

function updateContent() {
    var photo = document.getElementById("TeamPhotosPerson");
    var title = document.querySelector("#TeamPhotosPersonFig h3");
    var description = document.querySelector("#TeamPhotosPersonFig p");

    photo.src = teamData[currentIndex].image;
    title.textContent = teamData[currentIndex].name;
    description.textContent = teamData[currentIndex].description;
}

document.getElementById("ButtonLeft").addEventListener("click", function () {
    console.log("Left button clicked");
    if (currentIndex > 0) {
        currentIndex--;
        updateContent();
    }
});

document.getElementById("ButtonRight").addEventListener("click", function () {
    if (currentIndex < teamData.length - 1) {
        currentIndex++;
        updateContent();
    }
});

updateContent();

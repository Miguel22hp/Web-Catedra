var teamData = []
var currentIndex = 0;
var isTransitioning = false;

function loadTeamData() {
    fetch('../json/team.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            teamData = data;
            updateContent();
        })
        .catch(error => console.error('Error al cargar el JSON:', error));
}

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

document.addEventListener('DOMContentLoaded', loadTeamData);
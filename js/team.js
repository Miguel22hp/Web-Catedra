const teamPhotos = document.getElementById("liTeamPhotosGroup");
const oldTeamPhotos = teamPhotos.style.display;

const verticalSeparator = document.getElementById("liVerticalSeparator");
const oldVerticalSeparator = verticalSeparator.style.display;

const photos = document.getElementById("liTeamPhotosPerson");
const oldPhotos = photos.style.display;

const buttonRight = document.getElementById("ButtonRight");
const oldButtonRight = buttonRight.style.display;

const buttonLeft = document.getElementById("ButtonLeft");
const oldButtonLeft = buttonLeft.style.display;

function teamWidth() {
    if (window.innerWidth < 1248) {

        photos.style.height="520px";
        photos.style.padding="8%"

        teamPhotos.style.display = "none"
        verticalSeparator.style.display = "none";

        buttonRight.style.height = "500px";
        buttonRight.style.fontSize = "150%";

        buttonLeft.style.height = "500px";
        buttonLeft.style.fontSize = "150%";
    }
    else
    {
        photos.style.height="640px";
        photos.style.padding="20px";

        teamPhotos.style.display = oldTeamPhotos || "";
        verticalSeparator.style.display = oldVerticalSeparator || "";

        buttonRight.style.height = "600px";
        buttonRight.style.fontSize = "300%";

        buttonLeft.style.height = "600px";
        buttonLeft.style.fontSize = "300%";
    }
}
 
window.addEventListener("resize", teamWidth);
document.addEventListener('DOMContentLoaded', teamWidth);

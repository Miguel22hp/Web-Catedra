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

        teamPhotos.style.display = "none"
        verticalSeparator.style.display = "none";

        buttonRight.style.height = "500px";
        buttonRight.style.fontSize = "150%";

        buttonLeft.style.height = "500px";
        buttonLeft.style.fontSize = "150%";
    }
    else
    {
        photos.style.height="620px";

        teamPhotos.style.display = oldTeamPhotos || "";
        verticalSeparator.style.display = oldVerticalSeparator || "";

        buttonRight.style.height = "100%";
        buttonRight.style.fontSize = "300%";

        buttonLeft.style.height = "100%";
        buttonLeft.style.fontSize = "300%";
    }
}
 
window.addEventListener("resize", teamWidth);
document.addEventListener('DOMContentLoaded', teamWidth);


/* 
@media screen and (max-width: 1080px) { cambiar tamaño botones
    height: 100%;
    font-size: 150%;
};

transition: opacity 0.5s; transicion entre fotos / tanto texto como fotos

    
@media screen and (max-width: 1080px) {
    .liTeamPhotosGroup {
        display: none;
    }

    .liVerticalSeparator {
        display: none;
    }

    .containerBodyTeam ul li:nth-child(3) {
        margin-left: 20px;
        margin-right: 20px;
        width: 100%;
    }
}
*/
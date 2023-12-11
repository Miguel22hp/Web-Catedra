const teamPhotos = document.getElementById("liTeamPhotosGroup"); TODO
const oldTeamPhotos = teamPhotos.style.display;

const verticalSeparator = document.getElementById("liVerticalSeparator");
const oldVerticalSeparator = verticalSeparator.style.display;

const photos = document.getElementById("liTeamPhotosPerson");
const oldPhotos = photos.style.display;

const adaptPadding = document.getElementById("liTeamPhotosPersonPaddingAdapt");
const oldAdapPadding = adaptPadding.style.display;

const buttonRight = document.getElementById("ButtonRight");
const oldButtonRight = buttonRight.style.display;

const buttonLeft = document.getElementById("ButtonLeft");
const oldButtonLeft = buttonLeft.style.display;

function teamWidth() {


    if (window.innerWidth < 600) {

        photos.style.height="520px";
        photos.style.maxWidth="80%";
        photos.style.width="80%";
        
        adaptPadding.style.padding= "10px"

        //teamPhotos.style.display = "none"
        verticalSeparator.style.display = "none";

        buttonRight.style.height = "500px";
        buttonRight.style.fontSize = "150%";

        buttonLeft.style.height = "500px";
        buttonLeft.style.fontSize = "150%";
    }
    else
    {
        photos.style.height="720px";
        photos.style.padding="20px";
        photos.style.maxWidth="30%";
        photos.style.width="30%";

        adaptPadding.style.padding= "0px"

        ///teamPhotos.style.display = oldTeamPhotos || "";
        verticalSeparator.style.display = oldVerticalSeparator || "";

        buttonRight.style.height = "600px";
        buttonRight.style.fontSize = "300%";

        buttonLeft.style.height = "600px";
        buttonLeft.style.fontSize = "300%";
    }
}
 
window.addEventListener("resize", teamWidth);
document.addEventListener('DOMContentLoaded', teamWidth);

const video = document.getElementById("Video");
const map = document.getElementById("Map");

function videoWidth() {
    if (window.innerWidth < 990) {
        video.style.display = "none";
        map.style.width = "100%";
        
    } else {
        video.style.display = "block";
        video.style.display = "width: 45%;";
        map.style.width = "45%";
        video.style.borderRadius = "15px";
        video.style.overflow = "hidden";
        video.style.margin = "0 auto";
        video.style.textAlign = "center";
        video.style.paddingBottom = "20px";
        video.style.height = "430px";
    }
}

addEventListener('DOMContentLoaded', videoWidth);
addEventListener('resize', videoWidth);
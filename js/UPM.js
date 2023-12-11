const iframe = document.getElementById("IframeUPM");
function UPMWidth() {
    if (window.innerWidth < 990) {
        iframe.style.display = "none";
        
    } else {
        iframe.style.display = "block";
    }
}

addEventListener('DOMContentLoaded', UPMWidth);
addEventListener('resize', UPMWidth);
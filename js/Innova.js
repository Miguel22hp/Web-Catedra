const iframe = document.getElementById("IframeInnova");
function InnovaWidth() {
    if (window.innerWidth < 990) {
        iframe.style.display = "none";
        
    } else {
        iframe.style.display = "block";
    }
}

addEventListener('DOMContentLoaded', InnovaWidth);
addEventListener('resize', InnovaWidth);
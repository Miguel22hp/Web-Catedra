function clickInnova(){
    var PopUp = document.getElementById("InnovaKnowMoreText");
    PopUp.style.zIndex = "1";

    PopUp.style.opacity = "1";
    PopUp.style.animation = "opacity 2s";
}

function hoverOutInnova(){
    var PopUp = document.getElementById("InnovaKnowMoreText");

    PopUp.addEventListener("mouseleave", function(){
        PopUp.style.opacity = 0;
        PopUp.style.zIndex = "-1";
    });
}
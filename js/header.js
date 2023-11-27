const headerContainer = document.getElementById("ContainerHeader");
const navigationHeader = document.getElementById("NavigationHeader");
const hamburguerMenu = document.getElementById('HamburguerMenu');
const superiorLine = document.getElementById('SuperiorLine');
const middleLine = document.getElementById('MiddleLine');
const oldMiddleLine = middleLine.style.display;
const inferiorLine = document.getElementById('InferiorLine');

document.addEventListener('DOMContentLoaded', function() {
    hamburguerMenu.addEventListener('click', function() {
        if (navigationHeader.style.opacity === "0" || navigationHeader.style.opacity === "") {

          superiorLine.style.transform = "rotate(45deg)";
          middleLine.style.display = "none";
          inferiorLine.style.transform = "rotate(-45deg)";

          navigationHeader.style.opacity = "1";
          navigationHeader.style.maxHeight = "100%";
        } else {
          superiorLine.style.transform = "rotate(0deg)";
          middleLine.style.display = oldMiddleLine;
          inferiorLine.style.transform = "rotate(0deg)";

          navigationHeader.style.opacity = "0";
          navigationHeader.style.maxHeight = "0";
        }
    });
});

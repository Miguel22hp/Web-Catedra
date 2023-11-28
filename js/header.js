const headerContainer = document.getElementById("ContainerHeader");
var oldHeaderContainerHeigh = headerContainer.offsetHeight;

const navigationHeader = document.getElementById("NavigationHeader");

const hamburguerMenu = document.getElementById('HamburguerMenu');
const superiorLine = document.getElementById('SuperiorLine');
const middleLine = document.getElementById('MiddleLine');
const oldMiddleLine = middleLine.style.display;
const inferiorLine = document.getElementById('InferiorLine');

const navHeader = document.getElementById("NavigationHeaderUl");
const links = navigationHeader.querySelectorAll("li a");

const title = document.getElementById("MainTitle");
const logoVersionMovile = document.getElementById("LogoVersionMovile");

document.querySelectorAll('li').forEach(li => {
  li.addEventListener('click', function(e) {
    var anchor = this.querySelector('a[href^="#"]');
    if (anchor === null) {
      return;
    }
    e.preventDefault();
    const href = anchor.getAttribute('href');
    const targetElement = document.querySelector(href);
    const targetPosition = targetElement.offsetTop;

    superiorLine.style.transform = "rotate(0deg)";
    middleLine.style.transform = "translateX(0%)";
    inferiorLine.style.transform = "rotate(0deg)";
    navigationHeader.style.opacity = "0";
    headerContainer.style.height = oldHeaderContainerHeigh + "px";
    navigationHeader.style.maxHeight = "0";
    navigationHeader.style.opacity = "0";

    smoothScrollTo(targetPosition, 1000);
    });
});

function smoothScrollTo(endY, duration) {
  const startY = window.scrollY;
  const distanceY = endY - startY - 60;
  let startTime = null;

  function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const timeElapsed = timestamp - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      window.scrollTo(0, startY + distanceY * progress);

      if (timeElapsed < duration) {
          window.requestAnimationFrame(step);
      }
  }

  window.requestAnimationFrame(step);
}

function HamburguerMenu() {
    hamburguerMenu.addEventListener('click', function() {
        if (navigationHeader.style.opacity === "0" || navigationHeader.style.opacity === "") {

          hamburguerMenu.style.transform = "translateX(-5px)";
          superiorLine.style.transform = "rotate(45deg) translateX(14px) ";
          superiorLine.style.transition = "transform 0.5s";
          middleLine.style.transform = "translateX(200%)";
          middleLine.style.transition = "transform 0.5s";
          inferiorLine.style.transform = "rotate(-45deg) translateX(14px)";
          inferiorLine.style.transition = "transform 0.5s ";

          headerContainer.style.transition = "height 0.75s";
          headerContainer.style.height = "100vh";
          navigationHeader.style.opacity = "1";
          navigationHeader.style.maxHeight = "100%";

        } else {

          superiorLine.style.transform = "rotate(0deg)";
          middleLine.style.transform = "translateX(0%)";
          inferiorLine.style.transform = "rotate(0deg)";

          navigationHeader.style.opacity = "0";
          headerContainer.style.height = oldHeaderContainerHeigh + "px";
          navigationHeader.style.maxHeight = "0";
        }
    });
}

function HeaderWidth() {
  if (window.innerWidth < 1248) {
    headerContainer.style.backgroundColor = "grey";
    title.style.display = "none";
    logoVersionMovile.style.display = "block";
  }
  else
  {
    headerContainer.style.backgroundColor = "#004379";
    title.style.display = "block";
    logoVersionMovile.style.display = "none";
  }
}

window.addEventListener("resize", HeaderWidth);
window.addEventListener("resize", function() { oldHeaderContainerHeigh = headerContainer.offsetHeight; });
document.addEventListener('DOMContentLoaded', HeaderWidth);
document.addEventListener('DOMContentLoaded', HamburguerMenu);
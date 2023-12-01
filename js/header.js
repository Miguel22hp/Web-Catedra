document.addEventListener('DOMContentLoaded', function() {
  loadHeaderAndInitialize();
});

function loadHeaderAndInitialize() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
          document.getElementById("ContainerHeader").innerHTML = this.responseText;
          initializeHeader();
      }
  };
  xhr.open("GET", "html/header.html", true);
  xhr.send();
}

function initializeHeader() {
  const variables = initializeVariables();

  setupEventListeners(variables);
  HamburguerMenu(variables);
  HeaderWidth(variables);

  window.addEventListener("resize", () => HeaderWidth(variables));
  window.addEventListener("resize", () => variables.oldHeaderContainerHeight = variables.headerContainer.offsetHeight);
}

function initializeVariables() {
  const headerContainer = document.getElementById("ContainerHeader");
  const oldHeaderContainerHeight = headerContainer.offsetHeight;
  const hamburguerMenu = document.getElementById('HamburguerMenu');
  const superiorLine = document.getElementById('SuperiorLine');
  const middleLine = document.getElementById('MiddleLine');
  const inferiorLine = document.getElementById('InferiorLine');
  const navigationHeader = document.getElementById("NavigationHeader");
  const links = navigationHeader.querySelectorAll("li a");
  const title = document.getElementById("MainTitle");
  console.log(oldHeaderContainerHeight);
  return { 
      headerContainer, hamburguerMenu, superiorLine, middleLine, 
      inferiorLine, navigationHeader, links, title, oldHeaderContainerHeight 
  };
}

function setupEventListeners(variables) {
  variables.links.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        const targetElement = document.querySelector(href);
        const targetPosition = targetElement.offsetTop;

        variables.superiorLine.style.transform = "rotate(0deg)";
        variables.middleLine.style.transform = "translateX(0%)";
        variables.inferiorLine.style.transform = "rotate(0deg)";
        variables.navigationHeader.style.opacity = "0";
        variables.navigationHeader.style.transition = "opacity 0.75s";

        setTimeout(() => {
          variables.navigationHeader.style.maxHeight = "0";
          variables.headerContainer.style.transition = "height 0.75s";
          variables.headerContainer.style.height = "1vh"; 
        }, 50); 

          smoothScrollTo(targetPosition, 1000);
      });
  });
}

function HamburguerMenu(variables) {
  variables.hamburguerMenu.addEventListener('click', function() {
      toggleHamburguerMenu(variables);
  });
}

function HeaderWidth(variables) {
  if (window.innerWidth < 1248) {
      variables.
      variables.title.style.display = "none";
  } else {
      variables.headerContainer.style.backgroundColor = "#004379";
      variables.title.style.display = "block";
  }
}

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

function toggleHamburguerMenu(variables) {
  if (variables.navigationHeader.style.opacity === "0" || variables.navigationHeader.style.opacity === "") {
    variables.hamburguerMenu.style.transform = "translateX(-5px)";
    variables.superiorLine.style.transform = "rotate(45deg) translateX(14px)";
    variables.superiorLine.style.transition = "transform 0.5s";
    variables.middleLine.style.transform = "translateX(200%)";
    variables.middleLine.style.transition = "transform 0.5s";
    variables.inferiorLine.style.transform = "rotate(-45deg) translateX(14px)";
    variables.inferiorLine.style.transition = "transform 0.5s";

    variables.headerContainer.style.transition = "height 0.75s";
    variables.headerContainer.style.height = "100vh";

    setTimeout(() => {
      variables.navigationHeader.style.opacity = "1";
      variables.navigationHeader.style.maxHeight = "100%";
    }, 200);
  } else {
      variables.superiorLine.style.transform = "rotate(0deg)";
      variables.middleLine.style.transform = "translateX(0%)";
      variables.inferiorLine.style.transform = "rotate(0deg)";
      variables.navigationHeader.style.opacity = "0";
      variables.navigationHeader.style.transition = "opacity 0.75s";

      setTimeout(() => {
          variables.navigationHeader.style.maxHeight = "0";
          variables.headerContainer.style.transition = "height 0.75s";
          variables.headerContainer.style.height = "1vh"; 
      }, 50); 
  }
}


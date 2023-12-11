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


  xhr.open("GET", "/html/header.html", true);
  xhr.send();
}

function initializeHeader() {
  const variables = initializeVariables();

  variables.headerContainer.style.transition = "height 0.75s";


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
  const oldNavigationHeader = navigationHeader.style.display;
  const navigationHeaderMovilerVersion = document.getElementById("NavigationHeaderMovileVersion");
  const oldNavigationHeaderMovilerVersion = navigationHeaderMovilerVersion.style.display;
  const links = navigationHeaderMovilerVersion.querySelectorAll("li");
  const title = document.getElementById("MainTitle");
  const movileVersion = document.getElementById("LogoVersionMovile");

  return { 
      headerContainer, hamburguerMenu, superiorLine, middleLine, 
      inferiorLine, navigationHeader, oldNavigationHeader, navigationHeaderMovilerVersion, oldNavigationHeaderMovilerVersion, links, title, oldHeaderContainerHeight, movileVersion
  };
}

function setupEventListeners(variables) {
  variables.links.forEach(link => {
      link.addEventListener('click', function(e) {
        variables.superiorLine.style.transform = "rotate(0deg)";
        variables.middleLine.style.transform = "translateX(0%)";
        variables.inferiorLine.style.transform = "rotate(0deg)";
        variables.navigationHeaderMovilerVersion.style.opacity = "0";
        variables.navigationHeaderMovilerVersion.style.transition = "opacity 0.75s";

        setTimeout(() => {
          variables.navigationHeaderMovilerVersion.style.maxHeight = "0";
          variables.headerContainer.style.transition = "height 0.75s";
          variables.headerContainer.style.height = "1vh"; 
        }, 750); 
      });
  });
}

function HamburguerMenu(variables) {
  variables.hamburguerMenu.addEventListener('click', function() {
      toggleHamburguerMenu(variables);
  });
}

function HeaderWidth(variables) {
  if (window.innerWidth < 990) {
    variables.hamburguerMenu.style.display = "block";
    variables.navigationHeader.style.display = "none";
      
  } else {
    variables.hamburguerMenu.style.display = "none";
    variables.navigationHeader.style.display = variables.oldNavigationHeader;
    variables.headerContainer.style.backgroundColor = "#004379";
    variables.title.style.display = "block";
  }
}

function toggleHamburguerMenu(variables) {
  if (variables.navigationHeaderMovilerVersion.style.opacity === "0" || variables.navigationHeaderMovilerVersion.style.opacity === "") {
    document.body.style.overflow = "hidden";
    variables.hamburguerMenu.style.transform = "translateX(-5px)";
    variables.superiorLine.style.transform = "rotate(45deg) translateX(14px)";
    variables.superiorLine.style.transition = "transform 0.5s";
    variables.middleLine.style.transform = "translateX(200%)";
    variables.middleLine.style.transition = "transform 0.5s";
    variables.inferiorLine.style.transform = "rotate(-45deg) translateX(14px)";
    variables.inferiorLine.style.transition = "transform 0.5s";

    
    setTimeout(() => {
    variables.headerContainer.style.transition = "height 0.75s";
    variables.headerContainer.style.height = "100vh";
    }, 50);

    setTimeout(() => {
      variables.navigationHeaderMovilerVersion.style.opacity = "1";
      variables.navigationHeaderMovilerVersion.style.maxHeight = "100%";
    }, 200);
  } else {
      document.body.style.overflow = "auto";
      variables.superiorLine.style.transform = "rotate(0deg)";
      variables.middleLine.style.transform = "translateX(0%)";
      variables.inferiorLine.style.transform = "rotate(0deg)";
      variables.navigationHeaderMovilerVersion.style.opacity = "0";
      variables.navigationHeaderMovilerVersion.style.transition = "opacity 0.75s";

      setTimeout(() => {
          variables.navigationHeaderMovilerVersion.style.maxHeight = "0";
          variables.headerContainer.style.transition = "height 0.75s";
          variables.headerContainer.style.height = "1vh"; 
      }, 50); 
  }
}



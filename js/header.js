let prevScrollPos = window.scrollY;
const navbar = document.getElementById("ContainerHeader");
const navigationHeader = document.getElementById("NavigationHeader");
const navHeader = document.getElementById("NavigationHeaderUl");
const links = navigationHeader.querySelectorAll("li a");
const oldNav = navigationHeader.style.display;

// When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar
window.onscroll = function() {
    const currentScrollPos = window.scrollY;
    if (prevScrollPos > currentScrollPos) {
        navbar.style.top = "0";
    } else {
        navbar.style.top = "-100px";
    }
    prevScrollPos = currentScrollPos;
};

// When the users screen width is less than 1248px, hide the navbar-menu
function HeaderWidth() {
    if (window.innerWidth < 1248) {
      navHeader.style.display = "none";
    }
    else
    {
        navHeader.style.padding = "0px";
        navHeader.style.left = "0px";
        navHeader.style.display = "flex"; 
        navHeader.style.justifyContent = "space-around";
    }
}

// When hover over the links, It changes the color
links.forEach(link => {
  link.addEventListener("mouseover", () => {
    link.style.transition = "opacity 0.5s ease-in-out";
    link.style.opacity = "0.8";
    link.style.color = "#F4B429";
  });
  
  link.addEventListener("mouseout", () => {
    link.style.transition = "opacity 0.5s ease-in-out";
    link.style.opacity = "1";
    link.style.color = "white"; 
  });
});

window.addEventListener("resize", HeaderWidth);


function HeaderWidth() {  
  if (window.innerWidth < 1248) {
    navigationHeader.style.display = "none";
  }
  else
  {
    navigationHeader.style.display = oldNav || "";
  }
}


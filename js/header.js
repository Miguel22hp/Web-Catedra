let prevScrollPos = window.scrollY;
const navbar = document.getElementById("ContainerHeader");
const oldNavbar = navbar.style.top;
const logoMovileVersion = document.getElementById("LogoVersionMovile");
const title = document.getElementById("MainTitle");
const oldTitle = title.style.display;
const navigationHeader = document.getElementById("NavigationHeader");
const links = navigationHeader.querySelectorAll("li a");
const oldNav = navigationHeader.style.display;

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetElement = document.querySelector(this.getAttribute('href'));
      const targetPosition = targetElement.offsetTop;
      const duration = 1000; 

      window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
      });
  });
});


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
      logoMovileVersion.style.display = "block";
      logoMovileVersion.style.width = "20%";
      logoMovileVersion.style.paddingLeft = "10px";
      logoMovileVersion.style.paddingTop = "10px";
      logoMovileVersion.style.paddingBottom = "0px";
      navbar.style.backgroundColor = "grey";
      title.style.display = "none";
      navigationHeader.style.display = "none";
    }
    else
    {
      navbar.style.backgroundColor = "#004379";
      logoMovileVersion.style.display = "none";
      title.style.display = oldTitle;
      navigationHeader.style.display = oldNav;
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
document.addEventListener('DOMContentLoaded', HeaderWidth);

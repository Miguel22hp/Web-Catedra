let prevScrollPos = window.scrollY;
const navbar = document.getElementById("containerHeader");

window.onscroll = function() {
    const currentScrollPos = window.scrollY;
    if (prevScrollPos > currentScrollPos) {
        navbar.style.top = "0";
    } else {
        navbar.style.top = "-100px";
    }
    prevScrollPos = currentScrollPos;
};

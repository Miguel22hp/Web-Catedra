var opacity = 0; 
var animationDuration = 1000;
var startTime=0;

const section = document.getElementById("WhoWeAre");

const text =  document.getElementById("InnovaKnowMore");
const oldText = text.style.display;

const LogoAdaptUPM = document.getElementById("LogoAdaptUPM");
const oldLogoUPM = LogoAdaptUPM.style.display;

const LogoAdaptInnova = document.getElementById("LogoAdaptInnova");
const oldLogoInnova = LogoAdaptInnova.style.display;

const Intro = document.getElementById("IntroductionContainer");

const slogan = document.getElementById("Slogan");
const oldSlogan = slogan.style.display;

const bckg = document.getElementById("VideoWhoWeAre");
const oldBckg = bckg.style.backgroundImage;

const bckgSlogan = document.getElementById("SloganBC");
const oldBckgSlogan = bckgSlogan.style.backgroundImage;

// When users click on the text "Know More", It shows the text.
function clickInnova() {
  var PopUp = document.getElementById("InnovaKnowMoreText");
  PopUp.style.zIndex = "1";

  function animate(currentTime) {
    if (!startTime) startTime = currentTime;
    var elapsedTime = currentTime - startTime;
    var progress = Math.min(elapsedTime / animationDuration, 1); 

    opacity = progress;

    PopUp.style.opacity = opacity;

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  }
  requestAnimationFrame(animate);
}
  
// When the user HoverOut the text, It hides.
function hoverOutInnova(){
  var PopUp = document.getElementById("InnovaKnowMoreText");

  PopUp.addEventListener("mouseleave", function(){
      PopUp.style.opacity = 0;
      PopUp.style.zIndex = "-1";
  });
}

// If the screen is bigger than 1248px text will not be shown.
function WhoWeAreWidth() {
  if (window.innerWidth < 1248) {
    text.style.display = "none";
    LogoAdaptInnova.style.display = "none";
    //LogoAdaptCatedra.style.width = "80%";
    LogoAdaptUPM.style.display = "none";

    section.style.paddingTop = "0px";

    Intro.style.position = "relative";

    bckg.style.display = "none";
    bckgSlogan.style.display = "none";

    slogan.style.paddingTop = "0px";
  }
  else
  {
    text.style.display = oldText || "";
    LogoAdaptInnova.style.display = oldLogoInnova || "";
    LogoAdaptUPM.style.display = oldLogoUPM || "";
    LogoAdaptCatedra.style.display = oldLogoCatedra || "";

    section.style.paddingTop = "100px";

    Intro.style.position = "absolute";

    bckg.style.display = oldBckg || "";
    bckgSlogan.style.display = oldBckgSlogan || "";

    slogan.style.paddingTop = "350px";
  }
}

window.addEventListener("resize", WhoWeAreWidth);
document.addEventListener('DOMContentLoaded', WhoWeAreWidth);
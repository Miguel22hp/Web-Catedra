var opacity = 0; 
var animationDuration = 1000;
var startTime=0;

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
  var text =  document.getElementById("InnovaKnowMore");
  var intro = document.getElementById("Introductionocntainer");
  var slogan = document.getElementById("Slogan");

  if (window.innerWidth < 1248) {
    text.style.display = "none";

    intro.style.marginTop = "-30px";

    slogan.style.fontSize = "40px";
    slogan.style.paddingTop = "400px";
    slogan.style.paddingBottom = "100px";

  }
  else
  {
      text.style.display = "flex"; 

      slogan.style.fontSize = "55px";
      slogan.style.paddingTop = "350px";
      slogan.style.paddingBottom = "100px";
  }
}

window.addEventListener("resize", WhoWeAreWidth);
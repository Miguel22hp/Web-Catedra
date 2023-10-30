var opacity = 0; 
var animationDuration = 1000;
var startTime=0;

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
  
function hoverOutInnova(){
    var PopUp = document.getElementById("InnovaKnowMoreText");

    PopUp.addEventListener("mouseleave", function(){
        PopUp.style.opacity = 0;
        PopUp.style.zIndex = "-1";
    });
}

var Tick = 0;

function updateVisuals() {

    Tick ++;
    document.getElementById("FunnyBG").style.backgroundPosition = String(Tick) + "px " + String(Tick) + "px"

}



document.addEventListener("DOMContentLoaded", function() {
  setInterval(updateVisuals, 16);
});
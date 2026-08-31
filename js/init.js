
var Tick = 0;

function updateVisuals() {

    Tick = Tick + 1;
    document.getElementById("ring1").style.backgroundPosition = String(Tick) + "px " + String(Tick) + "px"

}



document.addEventListener("DOMContentLoaded", function() {
  setInterval(updateVisuals, 16);
});
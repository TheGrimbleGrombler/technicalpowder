
var Tick = 0;

function updateVisuals() {

    Tick = Tick + 1;
    document.getElementById("ring1").style.transform = "rotate(" + String(Tick) + "deg)"

    if (Tick >= 100000) {

        Tick = 1;

    }
}


document.addEventListener("DOMContentLoaded", function() {
  setInterval(updateVisuals, 16);
});
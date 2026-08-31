
var Tick = 0;

function updateVisuals() {

    Tick = Tick + 0.25;
    document.getElementById("ring1").style.transform = "rotate(" + String(Tick) + "deg)"
    document.getElementById("ring2").style.transform = "rotate(" + String(Tick + 22.5) + "deg)"
    document.getElementById("ring3").style.transform = "rotate(" + String(Tick + 45) + "deg)"
    document.getElementById("ring4").style.transform = "rotate(" + String(Tick + 67.5) + "deg)"

    if (Tick >= 100000) {

        Tick = 1;

    }
}


document.addEventListener("DOMContentLoaded", function() {
  setInterval(updateVisuals, 16);
});
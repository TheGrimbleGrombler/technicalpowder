// The current logo is temporary, same with the name of this whole thing.

var Tick = 0;
var curTab = "Main";

function swapTab(name) {

    var a = document.getElementById("Page_" + curTab);
    var b = document.getElementById("Page_" + name);

    if (a != undefined && b != undefined) {

        a.style.display = "none";
        b.style.display = "block";

        curTab = name;

    } else {

        if (a == undefined) {
            console.log("Page " + curTab + " not defined");
        } else {
            console.log("Page " + name + " not defined");
        }

    }

}

function setupTabButtons() {

    var buttons = document.getElementsByClassName("pagebutton");
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].textContent.length >= 3) {
            buttons[i].addEventListener('click', () => {
                //console.log(buttons[i].textContent);
                //swapTab(buttons[i].textContent);
                if ((window.location.href).substring((window.location.href).length-5,(window.location.href).length) == ".html") {
                    window.location.href = (location.href).substring(0,(location.href).length-10)+"Pages/"+buttons[i].textContent+".html";
                } else {
                    window.location.href = (location.href)+"Pages/"+buttons[i].textContent+".html";
                }
            });
        }

    }

}

function updateVisuals() {

    Tick = Tick + 0.25;
    document.getElementById("ring1").style.transform = "rotate(" + String(Tick) + "deg)";
    document.getElementById("ring2").style.transform = "rotate(" + String(Tick + 22.5) + "deg)";
    document.getElementById("ring3").style.transform = "rotate(" + String(Tick + 45) + "deg)";
    document.getElementById("ring4").style.transform = "rotate(" + String(Tick + 67.5) + "deg)";

    if (Tick >= 100000) {

        Tick = 1;

    }
}


document.addEventListener("DOMContentLoaded", function() {
  setInterval(updateVisuals, 16);
  setupTabButtons();
});
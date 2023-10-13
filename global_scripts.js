var bgColRed = document.getElementsByClassName("bgcol-red")
var bgColBlue = document.getElementsByClassName("bgcol-blue")
var fgColRed = document.getElementsByClassName("fgcol-red")

for (var i = 0; i < bgColRed.length; ++i) {
    bgColRed[i].style.backgroundColor = "#C92230";
}

for (var i = 0; i < bgColBlue.length; ++i) {
    bgColBlue[i].style.backgroundColor = "#032030";
}

for (var i = 0; i < fgColRed.length; ++i) {
    fgColRed[i].style.backgroundColor = "#D9A7AB";
}

//HAMBURGER MENU
const hamburgerMenuCheckbox = document.getElementById("menu-toggle-input");
const hamburgerMenuDiv = document.getElementById("menu-toggle");

hamburgerMenuDiv.addEventListener("click", () => {
    hamburgerMenuCheckbox.checked = !hamburgerMenuCheckbox.checked;
})

const arrowDown = "images/icon-arrow-down.svg";
const arrowUp = "images/icon-arrow-up.svg";
const hamburgerIcon = "images/icon-menu.svg"
const closeIcon = "images/icon-close-menu.svg"

const floatMenu = document.getElementsByClassName("mobile-float")[0];
const hamburger = document.getElementById("ham-menu").childNodes[0];
const overlay = document.getElementById("overlay");

function hamburgerFloat() {

    if (floatMenu.style.display === "flex") {
        floatMenu.style.display = "none";
        hamburger.src = hamburgerIcon;
        overlay.style.display = "none";

    } else {
        overlay.style.display = "block";
        floatMenu.style.display = "flex";
        hamburger.src = closeIcon;
    }
    
}

function dropdown(element) {
    let arrow = element.childNodes[1];
    let display = element.nextElementSibling.style.display;
    let dropdown = element.nextElementSibling;
    if(display === "none"){
        dropdown.style.display = "block";
        arrow.src = arrowUp
    }
    else {
        dropdown.style.display = "none";
        arrow.src = arrowDown
    }
}
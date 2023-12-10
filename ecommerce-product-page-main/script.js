const cartDisplayValue = document.getElementById("cart-value")
document.getElementById("increase").addEventListener("click", ()=>{cartValue(true)});
document.getElementById("decrease").addEventListener("click", ()=>{cartValue(false)});
let cartDisplay = 0;

const mobileImage = document.getElementById("mobile-image")
document.getElementById("next").addEventListener("click", ()=>{nextImage()})
document.getElementById("previous").addEventListener("click", ()=>{previousImage()})
const images = 4;
let imgIndex = 1;

const overlay = document.getElementById("overlay");
const floatMenu = document.getElementById("mobile-float-menu")
document.getElementById("float-button").addEventListener("click", ()=>{toggleFloat()});
document.getElementById("float-close").addEventListener("click", ()=>{toggleFloat()});

const desktopMenu = document.getElementById("menu-desktop-image-container");
document.getElementsByClassName("main-image")[0].addEventListener("click", ()=>{toggleMenu()});
document.getElementById("menu-exit").addEventListener("click", ()=>{toggleMenu()});

let isMobile = true;

window.addEventListener('resize', ()=>{resizeCheck()}, true);

function nextImage() {
    let url = mobileImage.src;
    ++imgIndex;
    if (imgIndex > images)
        imgIndex = 1;
    mobileImage.src = url.slice(0,-5) + imgIndex + url.slice(-4);
}

function previousImage() {
    let url = mobileImage.src;
    --imgIndex;
    if (imgIndex < 1)
        imgIndex = images;
    mobileImage.src = url.slice(0,-5) + imgIndex + url.slice(-4);
}

function cartValue(increase) {
    if (increase) {
        if (cartDisplay < 100)
            cartDisplay++;
    }else {
        if (cartDisplay > 0)
            cartDisplay--;
    }
    cartDisplayValue.innerText = cartDisplay;
}

function toggleFloat() {
    if (overlay.style.display == "block") {
        floatMenu.style.display = "none";
        overlay.style.display = "none";
    }else {
        floatMenu.style.display = "block";
        overlay.style.display = "block";
    }
}

function resizeCheck() {
    if (overlay.style.display == "block") {
        if (window.screen.width > 1000) {
            floatMenu.style.display = "none";
            desktopMenu.style.display = "block";
        }else {
            floatMenu.style.display = "block";
            desktopMenu.style.display = "none";
        }
    }

}

function toggleMenu() {
    console.log("YO");
}
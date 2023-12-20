const cartDisplayValue = document.getElementById("cart-value")
document.getElementById("increase").addEventListener("click", ()=>{cartValue(true)});
document.getElementById("decrease").addEventListener("click", ()=>{cartValue(false)});
let cartDisplay = 0;

const mobileImage = document.getElementById("mobile-image");
const mainImages = document.getElementsByClassName("main-image");
const thumbnails = document.getElementsByClassName("thumbnail-container");
document.getElementById("next").addEventListener("click", ()=>{nextImage()});
document.getElementById("previous").addEventListener("click", ()=>{previousImage()});
document.getElementById("menu-next").addEventListener("click", ()=>{nextImage()});
document.getElementById("menu-previous").addEventListener("click", ()=>{previousImage()});
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

for(let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('click', ()=>{setActive((i%4)+1)});
}

window.addEventListener('resize', ()=>{resizeCheck()}, true);

function nextImage() {
    ++imgIndex;
    if (imgIndex > images)
        imgIndex = 1;
    changeImage(imgIndex);
}

function previousImage() {

    --imgIndex;
    if (imgIndex < 1)
        imgIndex = images;
    changeImage(imgIndex);
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
        if (window.screen.width > 1000 && floatMenu.style.display == "block") {
            floatMenu.style.display = "none";
            overlay.style.display = "none";
        }else if (window.screen.width < 1000 && desktopMenu.style.display == "flex") {
            desktopMenu.style.display = "none";
            overlay.style.display = "none";
        }
    }
}

function toggleMenu() {
    if (overlay.style.display == "block") {
        desktopMenu.style.display = "none";
        overlay.style.display = "none";
    }else {
        desktopMenu.style.display = "flex";
        overlay.style.display = "block";
    }
}

function setActive(index) {
    changeImage(index)
    for (let i = 0; i < thumbnails.length; i++) {
        thumbnails[i].classList.remove("active");
    }
    thumbnails[index-1].classList.add("active");
    thumbnails[index+3].classList.add("active");
}

function changeImage(index) {
    let url = mobileImage.src;
    mobileImage.src = url.slice(0,-5) + index + url.slice(-4);
    for(let i = 0; i < mainImages.length; i++)
        mainImages[i].src = url.slice(0,-5) + index + url.slice(-4);
}
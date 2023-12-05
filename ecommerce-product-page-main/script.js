const cartDisplayValue = document.getElementById("cart-value")
document.getElementById("increase").addEventListener("click", ()=>{cartValue(true)});
document.getElementById("decrease").addEventListener("click", ()=>{cartValue(false)});
let cartDisplay = 0;

const mobileImage = document.getElementById("mobile-image")
document.getElementById("next").addEventListener("click", ()=>{nextImage()})
document.getElementById("previous").addEventListener("click", ()=>{previousImage()})
const images = 4;
let imgIndex = 1;

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
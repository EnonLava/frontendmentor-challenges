const cartDisplayValue = document.getElementById("cart-value");
const price = 125.00;
document.getElementById("increase").addEventListener("click", ()=>{cartValue(true)});
document.getElementById("decrease").addEventListener("click", ()=>{cartValue(false)});
let cartDisplay = 0;
let cartItems = 0;

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

const cartMenu = document.getElementById("cart-window");
cartMenu.addEventListener("mouseleave", ()=>{toggleCartMenu()})
document.getElementById("desktop-cart-button").addEventListener("click", ()=>{toggleCartMenu()});
document.getElementById("mobile-cart-button").addEventListener("click", ()=>{toggleCartMenu()});
let emptyCart = document.getElementById("cart-empty");
let isMobile = true;

document.getElementById("overlay").addEventListener("click", ()=> {
    if (window.screen.width > 1000) {
        toggleMenu();
    }else {
        toggleFloat();
    }
})
document.getElementById("add-to-cart").addEventListener("click", ()=>{addToCart()});
document.getElementById("delete").addEventListener("click", ()=>{deleteItems()});

for(let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('click', ()=>{setActive((i%4)+1)});
}

window.addEventListener('resize', ()=>{resizeCheck()}, true);

setActive(1);

function nextImage() {
    ++imgIndex;
    if (imgIndex > images)
        imgIndex = 1;
    setActive(imgIndex);
}

function previousImage() {

    --imgIndex;
    if (imgIndex < 1)
        imgIndex = images;
    setActive(imgIndex);
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

function toggleCartMenu() {
    if( cartMenu.style.display == "block" ) {
        cartMenu.style.display = "none";
    } else {
        cartMenu.style.display = "block";
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
    if(cartItems <= 0) {

    }
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

function addToCart() {
    if( cartItems <= 0 && cartDisplay > 0 ) {
        document.getElementById("cart-empty").style.display = "none";
        document.getElementById("cart-full").style.visibility = "visible";
        for(let i = 0; i < document.getElementsByClassName("num").length; i++) {
            document.getElementsByClassName("num")[i].style.display = "inline"
        }
    }
    if ( cartDisplay > 0) {
        cartItems+=cartDisplay;
        cartDisplay = 0;
        cartValue(false);
        updateCart()
    }
}

function updateCart() {
    for(let i = 0; i < document.getElementsByClassName("num").length; i++) {
        document.getElementsByClassName("num")[i].innerText = cartItems;
    }
    document.getElementById("cart-product-quantity").innerText = cartItems;
    document.getElementById("cart-product-total").innerText = "$" + (cartItems * price) + (price % 1 == 0 ? ".00" : "");
}

function deleteItems() {
    cartItems = 0;
    document.getElementById("cart-empty").style.display = "block";
    document.getElementById("cart-full").style.visibility = "hidden";
    for(let i = 0; i < document.getElementsByClassName("num").length; i++) {
        document.getElementsByClassName("num")[i].style.display = "none"
    }
}
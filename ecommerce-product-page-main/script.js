const cartIncrease = document.getElementById("increase");
const cartDecrease = document.getElementById("decrease");
const cartDisplayValue = document.getElementById("cart-value")

let cartDisplay = 0;

cartIncrease.addEventListener("click", ()=>{cartValue(true)});
cartDecrease.addEventListener("click", ()=>{cartValue(false)});

function cartValue(increase) {
    cartDisplayValue.innerText = cartDisplay;
    if (increase) {
        if (cartDisplayValue.innerText < 100)
            cartDisplayValue.innerText++;
    }else {
        if (cartDisplayValue.innerText > 0)
            cartDisplayValue.innerText--;
    }
    cartDisplay = cartDisplayValue.innerText
}
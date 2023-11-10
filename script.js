const pages = [ "https://lava519.github.io/frontendmentor-challenges/3-column-preview-card-component-main/",
    "https://lava519.github.io/frontendmentor-challenges/advice-generator-app-main/",
    "https://lava519.github.io/frontendmentor-challenges/clipboard-landing-page-master/",
    "https://lava519.github.io/frontendmentor-challenges/faq-accordion-card-main/",
    "https://lava519.github.io/frontendmentor-challenges/intro-section-with-dropdown-navigation-main/",
    "https://lava519.github.io/frontendmentor-challenges/order-summary-component-main/",
    "https://lava519.github.io/frontendmentor-challenges/profile-card-component-main/",
    "https://lava519.github.io/frontendmentor-challenges/rock-paper-scissors-master/",
    "https://lava519.github.io/frontendmentor-challenges/single-price-grid-component-master",
    "https://lava519.github.io/frontendmentor-challenges/social-media-dashboard-with-theme-switcher-master",
    "https://lava519.github.io/frontendmentor-challenges/social-proof-section-master/",
    "https://lava519.github.io/frontendmentor-challenges/stats-preview-card-component-main/",
    "https://lava519.github.io/frontendmentor-challenges/testimonials-grid-section-main",
    "https://lava519.github.io/frontendmentor-challenges/time-tracking-dashboard-main"
] //temporary

document.getElementById("previous").addEventListener("click", ()=>{changePage("previous")})
document.getElementById("next").addEventListener("click", ()=>{changePage("next")})
let offScreen;
let onScreen;
let index = 0;

onStart();


function onStart() {
    offScreen = document.getElementsByClassName("frame-website")[0];
    offScreen.classList.toggle("offscreen");
    onScreen = document.getElementsByClassName("frame-website")[1];
    onScreen.src = pages[index];
    offScreen.src = pages[index+1];
    offScreen.style.display = "none";
    console.log(onScreen);
    console.log(pages.length)
}

function onNext() {
    incIndex(true);
    offScreen.src = pages[index];
    document.getElementById("next").style.pointerEvents = "none";
    offScreen.style.display = "block";
    onScreen.style.animationName = "next-on";
    offScreen.style.animationName = "next-off";

    setTimeout(() => {
        toggleFrame();
        document.getElementById("next").style.pointerEvents = "auto";
    }, 500);
}

function onPrevious() {
    incIndex(false);
    offScreen.src = pages[index];
    document.getElementById("previous").style.pointerEvents = "none";
    offScreen.style.display = "block";
    onScreen.style.animationName = "previous-on";
    offScreen.style.animationName = "previous-off";

    setTimeout(() => {
        toggleFrame();
        document.getElementById("previous").style.pointerEvents = "auto";
    }, 500);
}

function changePage(direction) {
    incIndex(direction);
    offScreen.src = pages[index];
    document.getElementById(direction).style.pointerEvents = "none";
    offScreen.style.display = "block";
    onScreen.style.animationName = direction+"-on";
    offScreen.style.animationName = direction+"-off";

    setTimeout(() => {
        toggleFrame();
        document.getElementById(direction).style.pointerEvents = "auto";
    }, 500);
}

function incIndex(value) {
    if(value == "next"){
        index++
        if(index >= pages.length)
            index = 0;
    }
    else
        if( 0 >= index )
            index = pages.length-1;
        else
            index--;
    console.log(index)
}       

function toggleFrame() {
    let frames = document.getElementsByClassName("frame-website");
    for(let i = 0; i < frames.length; i++) {
        frames[i].classList.toggle("offscreen")
        if ( frames[i].classList.contains("offscreen"))
            offScreen = frames[i]
        else
            onScreen = frames[i]
    }
}

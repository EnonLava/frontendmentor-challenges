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

let iframeEl = [];

document.getElementById("previous").addEventListener("click", ()=>{changePage("previous")})
document.getElementById("next").addEventListener("click", ()=>{changePage("next")})
let offScreen;
let onScreen;
let index = 0;

onStart();


function onStart() {
    for(i = 0; i < pages.length; i++){
        iframeEl.push(document.createElement("iframe"));
        iframeEl[i].width = "100%";
        iframeEl[i].height = "100%";
        iframeEl[i].src = pages[i];
        iframeEl[i].frameBorder = "0";
        iframeEl[i].style.display = "none";
        iframeEl[i].classList = "frame-website offscreen"; 
    }
    onScreen = document.getElementsByClassName("frame-website")[0];
    onScreen.src = pages[index];
    console.log(onScreen);
    console.log(pages.length)
}


function changePage(direction) {
    incIndex(direction);
    offScreen = document.body.appendChild(iframeEl[index]);
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
    document.querySelector(".offscreen").remove();
}

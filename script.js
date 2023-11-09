const pages = ["https://lava519.github.io/frontendmentor-challenges/faq-accordion-card-main/", "https://lava519.github.io/frontendmentor-challenges/3-column-preview-card-component-main/", "https://lava519.github.io/frontendmentor-challenges/clipboard-landing-page-master/"]

let offScreen;
let onScreen;

onStart();


function onStart() {
    offScreen = document.getElementsByClassName("frame-website")[0];
    offScreen.classList.toggle("offscreen");
    onScreen = document.getElementsByClassName("frame-website")[1];
    onScreen.src = pages[0];
    offScreen.src = pages[1];
    offScreen.style.display = "none";
    console.log(onScreen);
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

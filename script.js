const pages = []
let iframeEl = [];

document.getElementById("previous").addEventListener("click", ()=>{changePage("previous")})
document.getElementById("next").addEventListener("click", ()=>{changePage("next")})
let offScreen;
let onScreen;
let index = 0;

getPages();

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

async function getPages() {
    const git = "https://api.github.com/repos/Lava519/frontendmentor-challenges/git/trees/master"
    const base = "https://lava519.github.io/frontendmentor-challenges/";
    const dataJSON = await fetch(git);
    const data = await dataJSON.json();

    for(let i = 0; i < data.tree.length; i++) {
        if ( data.tree[i].path.includes("-main") || data.tree[i].path.includes("-master") )
            pages.push(base + data.tree[i].path)
    }
    onStart();
}
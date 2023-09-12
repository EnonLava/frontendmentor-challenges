let el = document.getElementsByClassName("number");
let pEl = document.getElementsByClassName("previous-number");
let buttons = document.getElementsByClassName("profile-button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(){setData(buttons[i].innerHTML.toLowerCase())})
}

async function setData(time) {
    for( let i = 0; i < buttons.length; i++) {
        buttons[i].style.color = "";
    }
    document.getElementById(time).style.color = "#FFF";
    const dataJSON = await fetch("data.json");
    const data = await dataJSON.json();
    let t = ""
    switch (time) {
        case "daily":
            t = "Day"
            break;
        case "weekly":
            t = "Week"
            break;
        case "monthly":
            t = "Month"
            break;            
        default:
            break;
    }
    console.log(t);
    for (let i = 0; i < el.length; i++) {
        el[i].innerHTML = data[i].timeframes[time].current + "hrs";
        pEl[i].innerHTML = "Last " + t + " - " + data[i].timeframes[time].previous + "hrs";
    }
}

setData("weekly");
async function getAdvice() {
    const dataJSON = await fetch("https://api.adviceslip.com/advice",  { cache: "no-cache" });
    const data = await dataJSON.json();
    document.getElementById("advice-number").innerHTML = data.slip.id;
    document.getElementById("advice").innerHTML = data.slip.advice;
}
let button = document.getElementById("advice-button");
button.addEventListener("click", function(){getAdvice()});
getAdvice();

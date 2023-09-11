function accordionEvent(n) {
    let accButtons = document.getElementsByClassName("accordion-box-button");
    let accArrows = document.getElementsByClassName("accordion-arrow");
    let accText = accButtons[n].nextElementSibling;
    if (accText.style.maxHeight)
    {
        accButtons[n].classList.toggle("active");
        accText.style.maxHeight = null;
        accArrows[n].style.transform = null;
        
    } 
    else {
        accButtons[n].classList.toggle("active");
        accText.style.maxHeight = accText.scrollHeight + "px";
        accArrows[n].style.transform = "rotate("+180+"deg)";
    }
}
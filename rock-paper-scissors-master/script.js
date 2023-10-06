


function toggleRules(shown) {
    let rules = document.getElementsByClassName("rules-overlay")[0];
    if(shown)
        rules.style.display = "flex";
    else
        rules.style.display = "none";
}
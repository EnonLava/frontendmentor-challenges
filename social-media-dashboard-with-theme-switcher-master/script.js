let theme = document.getElementById("light");
function changeTheme(el) {
    if (!el.checked) {
        theme.setAttribute("rel", "");
    }
    else {
        theme.setAttribute("rel", "stylesheet");
    }
}

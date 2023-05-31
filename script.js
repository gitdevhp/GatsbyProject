document.addEventListener("DOMContentLoaded", function() {
    typeText('["Hello, James."]', "subtitle");
});

function startGame() {
    document.getElementById("start").style.display='none';
    document.getElementById('')
    var currentOpacity = window.getComputedStyle(document.getElementById("lamp")).getPropertyValue("opacity");
    document.getElementById("lamp").style.animation = "disappear 2s linear forwards";
}
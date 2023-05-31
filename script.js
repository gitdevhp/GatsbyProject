document.addEventListener("DOMContentLoaded", function() {
    setTimeout(typeText('["Hello, James."]', "subtitle"), 500);
});

function startGame() {
    hideAll()
    var currentOpacity = window.getComputedStyle(document.getElementById("lamp")).getPropertyValue("opacity");
    document.documentElement.style.setProperty("--current-opacity", currentOpacity);
    document.getElementById("lamp").style.animation = "disappear 2s linear forwards";
    scene1();
}

function hideAll() {
    document.getElementById("start").style.display='none';
}
//HELP ME FIX THIS IDK HOW TO USE
function scene1() {
    //subject to change
    document.getElementById("game").style.display="block";
    //add printed text here for intro
    typeText('["i hope wilson doesnt pull up with a glockn his rari"]');
    document.getElementById("nar").style.display="block"; 
}
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
function scene1() {
    //subject to change
    //add printed text here for intro
    typeText('["i hope wilson doesnt pull up with a glockn his rari"]',"para");
    document.getElementById("nar").style.display="block"; 
}
document.addEventListener("DOMContentLoaded", function() {
    typeText('["Hello, James."]', "subtitle");
});

function startGame() {
    document.getElementById("start").style.display='none';
    var currentOpacity = window.getComputedStyle(document.getElementById("lamp")).getPropertyValue("opacity");
    document.getElementById("lamp").style.animation = "disappear 2s linear forwards";
    scene1();
}

//HELP ME FIX THIS IDK HOW TO USE
function scene1() {
    //subject to change
    document.getElementById("game").style.display="block";
    //add printed text here for intro
    typeText('["i hope wilson doesnt pull up with a glockn his rari"]',"para");
    document.getElementById("nar").style.display="block"; 
}
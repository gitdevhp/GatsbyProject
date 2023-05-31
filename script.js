document.addEventListener("DOMContentLoaded", function() {
    setTimeout(typeText('["Hello, James."]', "subtitle"), 500);
});

var sceneNumber;

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
    document.getElementById("optios").style.display=='none';
    //subject to change
    document.getElementById("game").style.display="block";
    //add printed text here for intro
    switchNarToOp();
    typeText('["i hope wilson doesnt pull up with a glockn his rari"]');
    sceneNumber=2;
}

function scene2() {
    //add scenes and if statements when option button is pressed
}

function goNext() {
    if(sceneNumber==2) {
        scene2();
    }
}

function switchNarToOp() {
    if(document.getElementById("optios").style.display=='none') {
        document.getElementById("optios").style.display='block';
        document.getElementById('nar').style.display='none';
    }
    else {
        document.getElementById("optios").style.display='none';
        document.getElementById('nar').style.displat='block';
    }
}

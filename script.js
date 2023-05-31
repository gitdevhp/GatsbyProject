document.addEventListener("DOMContentLoaded", function() {
    setTimeout(typeText('["Hello, James."]', "subtitle"), 500);
});

var sceneNumber=0;

function slugify(slug) {
    var rootURL = window.location.protocol + '//' + window.location.hostname;
    window.history.pushState(null, null, `${rootURL}?${slug}`);
    return `Address Bar Contents set to ${window.location.href}`
}

function startGame() {
    hideAll()
    slugify("game=gaming")
    var currentOpacity = window.getComputedStyle(document.getElementById("lamp")).getPropertyValue("opacity");
    document.documentElement.style.setProperty("--current-opacity", currentOpacity);
    document.getElementById("lamp").style.animation = "disappear 2s linear forwards";
}

function hideAll() {
    document.getElementById("start").style.display='none';
}

// Generalized Scene function that can be set with parameters to do any scene.
//num sets
//char1 char2 sets the character img
function scene(num, char1, char2, background, text) {
    // Set Image for Left Character
    document.getElementById("char1").src=char1;
    // If a second character is provided, set that. Else, hide it.
    if (char2 == null || char2 == "null") {
        document.getElementById("char2").style.display="none";
    } else {
        document.getElementById("char2").src=char2;
        document.getElementById("char2").style.display="block";
    }
    // Set background
    if (background == null || background == "null") {
        document.getElementById("background").src="image/background/default.png";
    } else {
        document.getElementById("background").src=background;
    }
    // Display elements
    document.getElementById("char1").style.display="block";
    document.getElementById("background").style.display="block";
    typeText(text);
    sceneNumber=num;
    slugify(`game=gaming&step=${num}`);
    console.log(`Scene ${num} loaded.`)
    return num
}

//scene setter
function setScene(scene) {
    if (scene == 1) {
        scene(num, char1, char2, background, text);
    } else if (scene == 2) {
        scene(num, char1, char2, background, text);
    } else if (scene == 3) {
        scene(num, char1, char2, background, text);
    } else if (scene == 4) {
        scene(num, char1, char2, background, text);
    } else if (scene == 5) {
        scene(num, char1, char2, background, text);
    } else if (scene == 6) {
        scene(num, char1, char2, background, text);
    } else if (scene == 7) {
    } else if (scene == 8) {
    } else if (scene == 9) {
    } else if (scene == 10) {
    } else if (scene == 11) {
    }
}

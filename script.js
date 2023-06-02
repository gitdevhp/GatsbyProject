document.addEventListener("DOMContentLoaded", function() {
    setTimeout(typeText('["Hello, James."]', "subtitle"), 500);
});

var sceneNumber=0;
var proceed = true;
//att is mood for green light opactity
var att=1;
//to change light opacticy
function attChange(aCh) {
    att+=aCh;
    if (att==0) {
        document.getElementById('lamp').style.opacity='.4';
    }
    if (att==1) {
        document.getElementById('lamp').style.opacity='.6';
    }
    if (att==2) {
        document.getElementById('lamp').style.opacity='.8';
    }
}

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
    document.getElementById("lamp").style.opacity = "0";
    document.getElementById('game').style.display = 'block';
    setScene(1);
}

function hideAll() {
    document.getElementById("start").style.display='none';
}

// Generalized Scene function that can be set with parameters to do any scene.
//num sets
//char1 char2 sets the character img
function scene(num, char1, char2, background, text, speaker, option1, option2, option3) {
    proceed=false;
    // Set Image for Left Character
    document.getElementById("char1").src=char1;
    // If a second character is provided, set that. Else, hide it.
    if (char2 == null || char2 == "null") {
        document.getElementById("option2").style.top="105vh"
        setTimeout(function() {document.getElementById("char2").style.display="none"}, 350);
    } else {
        document.getElementById("char2").src=char2;
        document.getElementById("char2").style.display="block";
        document.getElementById("option2").style.top="15vh"
    }
    // Set background
    if (background == null || background == "null") {
        document.body.style.backgroundImage = 'none';
        document.body.style.backgroundColor = "black";    
    } else {
        document.body.style.backgroundImage = `url('image/background/${background}')`;
    }
    document.getElementById("option1").innerHTML = option1;

    console.log('Option 1 set to ' + option1)
    if (option2 == null || option2 == "null") {
        document.getElementById("option2").style.display="none";
    } else {
        document.getElementById("option2").innerHTML=option2;
        document.getElementById("option2").style.display="block";
        console.log("Option 2 enabled, set to " + option2);
    }
    if (option3 == null || option3 == "null") {
        document.getElementById("option3").style.display="none";
    } else {
        document.getElementById("option3").innerHTML=option3;
        document.getElementById("option3").style.display="block";
        console.log("Option 3 enabled, set to " + option3);
    }
    console.log('Speaker set to ' + speaker)
    if (speaker == null) {
        document.getElementById("speaker").style.display="none";
    } else {
        document.getElementById("speaker").innerHTML = speaker;
        document.getElementById("speaker").style.display="block";
    }
    proceed = typeText(text, "para");
    sceneNumber=num;
    slugify(`game=gaming&step=${num}`);
    console.log(`Scene ${num} loaded.`)
    console.log(proceed);
}

var placeholder = 'image/character/placeholder.jpeg'
var g_hap = 'image/character/gatsby_happy.png'
var g_neu = 'image/character/gatsby_neutral.png'
var g_sad = 'image/character/gatsby_sad.png'


//scene setter
function setScene(sceneNum) {
    if (sceneNum == 1) {
        scene(sceneNum, g_hap, g_neu, 'hall.png', 
        '["You catch your breath, having hastened yourself to the door to greet two freshly-arrived guests, Tom and Daisy Buchanan."]', null, 'next', null, null,);
    if (sceneNum == 2) {
        console.log('Got to if scene num = 2 statement in setSceneFunction')
        scene(sceneNum, g_hap, g_neu, 'hall.png', 
        '["THING!!"]', 'Daisy', 'next', null, null);
    }
}}

//for temp solution to transition scenes
function option1() {
    console.log('Option 1 button code executing yum yum yum')
    if (proceed==true){
    if (sceneNumber==1) {
        console.log('Setting scene to 2')
        setScene(2);
    }
    if (sceneNumber==2) {
        setScene(3);
    }
}
}

function option2(){
    console.log('Option 2 button code executing')
    if(proceed==true){
    if(sceneNumber==2) {
        setScene(4);
    }
}
}

function option3() {
    console.log('Option 3 button code executing')
    if(proceed==true){
    if(sceneNumber==2){
        setScene(5);
    }
}
}
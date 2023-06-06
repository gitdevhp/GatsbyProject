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
    document.getElementById("lamp").style.top = "-10vh";
    document.getElementById('game').style.display = 'block';
    setScene(1);
}

function hideAll() {
    document.getElementById("start").style.display='none';
}
function disableButtons(state) {
    let colorStyle = 'lightgray'
    let options = document.querySelectorAll('.option');

    if (state == true) {
        colorStyle = 'gray'
    } else {
        colorStyle = 'seashell'
    }
    for (let i = 0; i < options.length; i++) {
        console.log('Coloring Buttons ' + colorStyle)
        options[i].style.color = colorStyle;
        options[i].style.borderColor = colorStyle;
    }
}

// Generalized Scene function that can be set with parameters to do any scene.
//num sets
//char1 char2 sets the character img
function scene(num, char1, char2, background, text, speaker, option1, option2, option3, indicatorValue) {
    proceed = false;
    disableButtons(true);
    console.log('Proceed variable set to false.')
    // Set Image for Left Character
    if (char1 == null || char1 == "null") {
        document.getElementById("char1").style.left="-50vw"
        setTimeout(function() {document.getElementById("char1").style.display="none"}, 350);
    } else {
        if ( document.getElementById("char1").src != (window.location.protocol + '//' + window.location.hostname + '/' + char2)) {
            document.getElementById("char1").style.left="-50vw"
            setTimeout(function() {
                document.getElementById("char1").style.display="block"
                document.getElementById("char1").src=char1;
                document.getElementById("char1").style.left="10vw"
            }, 305);
        } else {
            document.getElementById("char1").style.display="block"
            document.getElementById("char1").src=char1;
        }
    }
    // If a second character is provided, set that. Else, hide it.
    if (char2 == null || char2 == "null") {
        document.getElementById("char2").style.right="-50vw"
        setTimeout(function() {document.getElementById("char2").style.display="none"}, 350);
    } else {
        if ( document.getElementById("char2").src != (window.location.protocol + '//' + window.location.hostname + '/' + char2)) {
            document.getElementById("char2").style.right="-50vw"
            setTimeout(function() {
                document.getElementById("char2").style.display="block"
                document.getElementById("char2").src=char2;
                document.getElementById("char2").style.right="11vw"
            }, 405);
        } else {
            document.getElementById("char2").style.display="block"
            document.getElementById("char2").src=char2;
        }
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
        document.getElementById("option2").style.display="inline-block";
        console.log("Option 2 enabled, set to " + option2);
    }
    if (option3 == null || option3 == "null") {
        document.getElementById("option3").style.display="none";
    } else {
        document.getElementById("option3").innerHTML=option3;
        document.getElementById("option3").style.display="inline-block";
        console.log("Option 3 enabled, set to " + option3);
    }
    console.log('Speaker set to ' + speaker)
    if (speaker == null) {
        document.getElementById("speaker").style.display="none";
    } else {
        document.getElementById("speaker").innerHTML = ('<b>' + speaker.toUpperCase() + '</b>');
        document.getElementById("speaker").style.display="block";
    }
    typeText(text, "para");
    sceneNumber=num;
    slugify(`game=gaming&step=${num}`);
    console.log(`Scene ${num} loaded.`)
    if (indicatorValue) {
        updateIndicator(indicatorValue)
    } else {
        console.log('Indicator not updated, since no value provided.')
    }
}

//for temp solution to transition scenes
function option1() {
    console.log('Proceed Value: ' + proceed);
    if (proceed == true) {
        if (sceneNumber==1) { setScene(2); } 
        else if (sceneNumber==2) { setScene(3); } 
        else if (sceneNumber==3) { setScene(4); } 
        else if (sceneNumber==4) { setScene(5); } 
        else if (sceneNumber==5) { setScene(12); } 
        else if (sceneNumber==6) { setScene(7); } 
        else if (sceneNumber==7) { setScene(8); } 
        else if (sceneNumber==8) { setScene(10); } 
        else if (sceneNumber==9) { setScene(10); } 
        else if (sceneNumber==10) { setScene(5); } 
        else if (sceneNumber==11) { setScene(8); } 
        else if (sceneNumber==12) { setScene(13); } 
        else if (sceneNumber==13) { setScene(15); } 
        else if (sceneNumber==14) { setScene(16); } 
        else if (sceneNumber==15) { setScene(14); } 
        else if (sceneNumber==16) { setScene(17); } 
        else if (sceneNumber==781) { setScene(782)}
        else if (sceneNumber==782) { setScene(19)}
        else if (sceneNumber==17) { setScene(18); } 
        else if (sceneNumber==18) { setScene(19); }
        else if (sceneNumber==18) { setScene(19); }
        else if (sceneNumber==19) { setScene(20); }
        else if (sceneNumber==20) { setScene(21); }
        else if (sceneNumber==21) { setScene(23); }
        else if (sceneNumber==22) { setScene(23); }
        else if (sceneNumber==23) { setScene(24); }
        else if (sceneNumber==24) { setScene(25); }
        else if (sceneNumber==25) { setScene(26); }
        else if (sceneNumber==26) { setScene(27); }
        else if (sceneNumber==27) { setScene(28); }
        else if (sceneNumber==28) { setScene(33); }
        else if (sceneNumber==29) { setScene(30); }
        else if (sceneNumber==30) { setScene(31); }
        else if (sceneNumber==31) { setScene(32); }
        else if (sceneNumber==32) { setScene(34); }
        else if (sceneNumber==33) { setScene(29); }
        else if (sceneNumber==34) { setScene(36); }
        else if (sceneNumber==35) { setScene(34); }
        else if (sceneNumber==36) { setScene(38); }
        else if (sceneNumber==37) { setScene(38); }
        else if (sceneNumber==38) { setScene(39); }
        else if (sceneNumber==39) { setScene(40); }
        else if (sceneNumber==40) { setScene(41); }
        else if (sceneNumber==41) { setScene(42); }
        else if (sceneNumber==42) { setScene(43); }
        else if (sceneNumber==43) { setScene(45); }
        else if (sceneNumber==44) { setScene(43); }
        else if (sceneNumber==45) { setScene(46); }
        else if (sceneNumber==46) { setScene(48); }
        else if (sceneNumber==47) { setScene(46); }
        

    } else { console.error('Option 1 button pressed when proceed == false') }
}

function option2(){
    console.log('Option 2 button code executing')
    if (proceed==true) {
    if (sceneNumber==2) { setScene(6); }
    else if (sceneNumber==6) { setScene(11); }
    else if (sceneNumber==8) { setScene(9); } 
    else if (sceneNumber==12) { setScene(14); } 
    else if (sceneNumber==13) { setScene(14); }
    else if (sceneNumber==16) { setScene(781)}
    else if (sceneNumber==782) { setScene(18)}
    else if (sceneNumber==20) { setScene(22); }
    else if (sceneNumber==28) { setScene(29); }
    else if (sceneNumber==30) { setScene(31); }
    else if (sceneNumber==32) { setScene(35); }
    else if (sceneNumber==36) { setScene(37); }
    else if (sceneNumber==42) { setScene(44); }
    else if (sceneNumber==45) { setScene(47); }

} else { console.error('Option 2 button pressed when proceed == false') }
}

function option3() {
    console.log('Option 3 button code executing')
    if (proceed==true) {
    if (sceneNumber==8) { setScene(9); }
    
} else { console.error('Option 3 button pressed when proceed == false') }

}
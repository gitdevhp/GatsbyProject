var placeholder = 'image/character/placeholder.jpeg'
var gat_h = 'image/character/gatsby_happy.png'
var gat_n = 'image/character/gatsby_neutral.png'
var gat_s = 'image/character/gatsby_sad.png'
var tom_n = 'image/character/tom_neutral.png'

var hall = 'hall.png'


//scene setter
function setScene(sceneNum) {
    console.log('At Setscene; sceneNum = ' + sceneNum)
    if (sceneNum == 1) {
        scene(sceneNum, gat_h, tom_n, hall, 
        '["You catch your breath, having hastened yourself to the door to greet two freshly-arrived guests, Tom and Daisy Buchanan."]', null, 'next', null, null,);
    } else if (sceneNum == 2) {
        console.log('Got to if scene num = 2 statement in setSceneFunction')
        scene(sceneNum, gat_n, placeholder, hall, 
        '["Nervously, you greet the Buchanan\'s"]', null, 'Talk More with Daisy', 'Look at Daisy but do not talk with her', null);
    }
    else if (sceneNum==3) {
        scene(sceneNum, placeholder, gat_h, hall, '["What a wonderful party you have!"]', 'Daisy', 'Agree and Ask her to dance with you.', null, null);
    }
    else if (sceneNum==4) {
        scene(sceneNum, placeholder, gat_h, hall, '["Yes, I would love to, if you\'ll have me."]', 'Daisy', 'Next', null, null);
    }
    else if (sceneNum==5) {
        scene(sceneNum, placeholder, gat_h, hall, '["As you Dance, you notice a pair of suspicious eyes staring at you and Daisy. It\'s Tom..."]', null, 'next', null, null);
    }
    //Path 2 Part 1
    else if (sceneNum==6) {
        scene(sceneNum, placeholder, gat_n, hall, 
            '["You stare at Daisy in awe of her beautiful dress. Tom notices you staring at his wife."]', null, 'Confront Tom', 'Ignore Tom and Lead the Buchanan\'s into the Party', null);
    }
    else if (sceneNum==7) {
        scene(sceneNum, tom_n, gat_n, hall, 
            '["I would never have the likes of you, a bootlegger, be better than me"]', 'Tom', 'Introduce Tom to the groups of people as a Polo Player', null, null);
    }
    else if (sceneNum==8) {
        scene(sceneNum, gat_h, placeholder, hall, 
            '["As Tom \"The Polo Player\" awkwardly mingles with party-goers, Daisy starts talking with you."]', null, 'Ask Daisy to dance with you.', 'Wait for Daisy to get comfortable before inviting her to dance', 'Continue to chat with Daisy');
    }
    else if (sceneNum==9) {
        scene(sceneNum, gat_h, null, hall, '["You Continue to keep Daisy company, but you notice that Daisy is getting Bored and Uncomfertable at the Party"]', null, 'Ask Daisy to dance with you.', null, null);
    }
    else if (sceneNum==10) {
        scene(sceneNum, gat_h, placeholder, hall, 
            '["Let us Dance! Shall we?"]', 'Daisy', 'Dance Gracefully with Daisy', null, null);
    }
    else if (sceneNum==11) {
        scene(sceneNum, tom_n, null, hall, 
            '["Tom, suspicous of your relationship with Daisy, follows you in."]', null, 'Introduce Tom as a Polo Player', null, null);
    }
    // Part 1 conclusion
    else if (sceneNum==12) {
        scene(sceneNum, placeholder, gat_h, hall, 
            '["At the end of the Party, Tom is visibly Angry at you as Nick escorts the Buchanan\'s to their departing limo"]', null, 'Approach Nick when he is alone', 'Continue to wave goodbye to leaving Party-Goers', null);
    }
}

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
}

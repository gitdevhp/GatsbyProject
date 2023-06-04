let kb0 = new Audio('sound/fx/kb_0.mp3');
let kb1 = new Audio('sound/fx/kb_1.mp3');
let kb2 = new Audio('sound/fx/kb_2.mp3');
let kb3 = new Audio('sound/fx/kb_3.mp3');
let kb4 = new Audio('sound/fx/kb_4.mp3');

kb0.volume = 0.3
kb1.volume = 0.3
kb2.volume = 0.3
kb3.volume = 0.3
kb4.volume = 0.3


function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function click() {
    let num = randomInteger(0, 4);
    eval('kb' + num).play();
  }
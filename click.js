let kb0 = new Audio('sound/fx/kb_0.mp3');
let kb1 = new Audio('sound/fx/kb_1.mp3');
let kb2 = new Audio('sound/fx/kb_2.mp3');
let kb3 = new Audio('sound/fx/kb_3.mp3');
let kb4 = new Audio('sound/fx/kb_4.mp3');
let kb5 = new Audio('sound/fx/kb_5.mp3');
let kb6 = new Audio('sound/fx/kb_6.mp3');
let kb7 = new Audio('sound/fx/kb_7.mp3');

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function click() {
    let num = randomInteger(0, 7);
    eval('kb' + num).play();
    console.log('Trying to play kb' + num + 'sound effect.');
  }
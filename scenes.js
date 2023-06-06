var placeholder = 'image/character/placeholder.jpeg'
var gat_h = 'image/character/gatsby_happy.png'
var gat_n = 'image/character/gatsby_neutral.png'
var gat_s = 'image/character/gatsby_sad.png'
var tom_n = 'image/character/tom_neutral.png'
var wolf = 'image/character/wolf_temp.png'
var daisy = 'image/character/daisy_temp.png'
var nick = 'image/character/nick_temp.png'


var hall_old = 'hall.png'
var hall = 'hall_new.png'
var path = 'path.png'
var party= 'party.png'


//scene setter
function setScene(sceneNum) {
    console.log('At Setscene; sceneNum = ' + sceneNum)
    if (sceneNum == 1) {
        scene(sceneNum, gat_h, null, hall, '["You catch your breath, having hastened yourself to the door to greet two freshly-arrived guests, Tom and Daisy Buchanan."]', null, 'next', null, null, 80);
    } else if (sceneNum == 2) {
        console.log('Got to if scene num = 2 statement in setSceneFunction')
        scene(sceneNum, gat_n, daisy, hall, 
        '["Nervously, you greet the Buchanans, welcoming them to the party. Your long wait for your love, Daisy Buchanan, to show up to one of your parties has finally ended."]', null, 'Continue talking with Daisy', 'Look at Daisy, but contain your urge to talk with her', null);
    } else if (sceneNum==3) {
        scene(sceneNum, gat_h, daisy, party, 
            '["What a lively party you have!"]', 'Daisy', 'Agree apathetically and ask her to dance', null, null);
    } else if (sceneNum==4) {
        scene(sceneNum, gat_h, daisy, party, 
            '["I would love to, as long as you\'ll have me."]', 'Daisy', 'Next', null, null, 85);
    } else if (sceneNum==5) {
        scene(sceneNum, gat_h, daisy, party, 
            '["As you Dance, you notice a pair of eyes glaring suspiciously at you and Daisy."]', null, 'next', null, null);
    } else if (sceneNum==6) { //Path 2 Part 1
        scene(sceneNum, gat_h, daisy, party, 
            '["You stare at Daisy, in awe of her beautiful dress. Tom notices you staring at his wife."]', null, 'Confront Tom, asking him to express his thoughts', 'Ignore Tom, leading Daisy into the Party', null, 85);
    } else if (sceneNum==7) {
        scene(sceneNum, gat_n, tom_n, party, 
            '["Mind your own business, bootlegger. I don\'t want some lawbreaker messing around in my personal life, and neither does Daisy!"]', 'Tom', 'Introduce Tom to the partygoers as a Polo Player', null, null, 75);
    } else if (sceneNum==8) {
        scene(sceneNum, gat_h, daisy, party, 
            '["As Tom “The Polo Player” awkwardly mingles with party-goers, Daisy starts conversing with you."]', null, 'Ask Daisy to dance with you.', 'Wait for Daisy to get comfortable before inviting her to dance', 'Continue to chat with Daisy');
    } else if (sceneNum==9) {
        scene(sceneNum, gat_h, daisy, party, 
            '["You Continue to keep Daisy company, but you notice that Daisy is growing disinterested and wearisome of the party."]', null, 'Ask Daisy to dance with you.', null, null, 70);
    } else if (sceneNum==10) {
        scene(sceneNum, gat_h, daisy, party, 
            '["Well...alright then Jay. It has been awhile, but I\'d love a spin around the dance floor."]', 'Daisy', 'Dance Gracefully with Daisy', null, null, 85);
    } else if (sceneNum==11) {
        scene(sceneNum, gat_h, tom_n, party, 
            '["Tom, suspicous of your relationship with Daisy, follows you in."]', null, 'Introduce Tom to the partygoers as a Polo Player', null, null);
    } else if (sceneNum==12) { // Part 1 conclusion
        scene(sceneNum, gat_h, tom_n, path, 
            '["By the end of the Party, Tom is visibly flustered. The Buchanans are escorted by your neighbor and friend Nick to their waiting limousine."]', null, 'Go to your room and approach Nick when he is alone', 'Stay where you are, waving goodbye to departing partygoers.', null, 80);
    } else if (sceneNum==13) {
        scene(sceneNum, gat_n, null, hall, 
            '["Chicago is on the line..."]', 'Servant', 'Pick up the phone', 'Tell the servant to explain that you are busy', null);
    } else if (sceneNum==14) {
        scene(sceneNum, gat_s, null, path,
            '["A feeling of sadness sets in as you consider your thoughts that Daisy did not truly enjoy the party"]', null, 'next', null, null, 50);
    } else if (sceneNum==15) {
        scene(sceneNum, gat_n, null, path, 
            '["Strolling outside, the phone call reminds you of the unrighteous origins of your fortune. You hope Daisy never finds out..."]', null, 'next', null, null, 70);
    } else if (sceneNum==16) {
        scene(sceneNum, gat_s, nick, path, 
            '["You notice Nick approaching you"]', null, 'Explain to Nick that you don\'t think Daisy enjoyed the party', 'Ignore Nick', null, 55);
    } else if (sceneNum==17) {
        scene(sceneNum, gat_s, nick, path, 
            '["I\'m sure she enojoyed it! How could she not!"]', 'Nick', 'Comment that you feel that your relationship with Daisy is distant', null, null, 49);
    } else if (sceneNum==781) {
        scene(sceneNum, gat_s, nick, path, 
            '["Nick leans against a wall near you, and asks you how you\'re feeling"]', null, 'Comment that you feel that your relationship with Daisy is far too distant', null, null, 49);
    } else if (sceneNum==782) {
        scene(sceneNum, gat_s, nick, path, 
            '["Don\'t worry about it. When it comes to Daisy, you\'re making progress. Just keep doing what you are doing and I\'m sure it will work out exactly as you want it to."]', null, 'Agree, and thank Nick for his consoling words.', 'Mumble some vague critique of Nick\'s analysis, leaving as soon as you get the chance.', null, 60);
    } else if (sceneNum==18) {
        scene(sceneNum, gat_s, null, hall, 
            '["Sadness envelops you as you remember the Daisy of your memories: the kind and understanding Daisy."]', null, 'Consider how you might restore the dynamic you had in years past', null, null, 45);
    } else if (sceneNum==19) {
        scene(sceneNum, null, null, null, 
            '["𝘕𝘦𝘹𝘵 𝘋𝘢𝘺"]', null, 'Next', null, null,);
    } else if (sceneNum==20) {
        scene(sceneNum, gat_n, null, hall, 
            '["Considering Tom\'s behavior yesterday, you begin to grow increasingly worried of being found out. In particular, you worry that your servants will spread word to the press."]', null, 'Relieve your servants of their responsibilities', 'Ignore the issue and do nothing', null,);
    } else if (sceneNum==21) {
        scene(sceneNum, gat_n, wolf, hall, 
            '["You ask your business partner and good friend Meyer Wolfsheim if he knows anyone for your to hire. He suggests a family of young workers, ready to work immediately."]', null, 'Hire them for twice the previous servants\' pay rate', null, null,);
    } else if (sceneNum==22) {
        scene(sceneNum, gat_n, wolf, hall, 
            '["Speaking with Meyer Wolfsheim for unrelated business purposes later that day, he convinces you to hire a group of shady associates that Wolfsheim suggests know how to keep their mouths shut."]', null, 'Hire them for twice the cost of your previous servants', null, null,);
    } else if (sceneNum==23) {
        scene(sceneNum, gat_h, null, hall, 
            '["The next morning, you decide to call your friend Nick to see if he has any advice to offer you when it comes to Daisy."]', null, 'Next', null, null,);
    } else if (sceneNum==24) {
        scene(sceneNum, gat_h, nick, hall, 
            '["Going away? I hear you fired all of your servants."]', 'Nick', 'Reply that you wanted someone who wouldn\'t gossip.', null, null,);
    } else if (sceneNum==25) {
        scene(sceneNum, gat_n, nick, hall, 
            '["I see."]', 'Nick', 'Invite Nick to have lunch with you and Daisy tomorrow afternoon', null, null, 65);
    } else if (sceneNum==26) {
        scene(sceneNum, null, null, null, 
            '["𝘕𝘦𝘹𝘵 𝘋𝘢𝘺"]', null, 'Next', null, null,);
    } else if(sceneNum==27) {
        scene(sceneNum, gat_n, null, path, 
            '["You arrive at the front step of the Buchanan Estate, the sweltering heat making you noticably light headed..."]', null, 'Knock on the door, and enter the mansion', null, null, 70);
    } else if(sceneNum==28) {
        scene(sceneNum, gat_h, daisy, hall, 
            '["Welcome, Jay!"]', 'Daisy', 'Ask Daisy for a tour of the mansion', 'Greet her, before searching around the house for Tom', null, 75);
    } else if(sceneNum==29){
        scene(sceneNum, gat_h, null, hall, '["Tom seems to be busy discussing important matters over the phone..."]', null, 'next', null, null, 75);
    } else if(sceneNum==30) {
        scene(sceneNum, gat_n, nick, path, 
            '["Soon, the final guest, Nick, arrives at the house. Soon after, Tom enters the lively room after he finishes his call"]', null, 'Signal Daisy to get Tom out of the room', 'Be uncomfortable from the sweltering heat', null, 75);
    } else if(sceneNum==31) {
        scene(sceneNum, daisy, tom_n, hall, 
            '["Make us a cold drink!!"]', 'Daisy', 'next', null, null,85);
    } else if(sceneNum==32) {
        scene(sceneNum, gat_h, tom_n, hall, 
            '["Tom pauses for a second as he leaves the room, suspicious of Daisy\'s intentions. But does leave."]', null, 'Kiss Daisy on the Mouth', 'Make sure Tom is\'nt Watching', null, 90);
    } else if(sceneNum==33) {
        scene(sceneNum, gat_h, daisy, hall, 
            '["You are in awe as you tour the house! This isn\'t just some normal house, this is Daisy\'s home and you can\'t beleive you\'re standing in it!"]', null, 'next', null, null, 80);
    } else if (sceneNum==34) {
        scene(sceneNum, gat_h, daisy, hall, 
            '["As you and Daisy Kiss, the world seems to swirl as Happiness Encircles you"]', null, 'You hear a voice of a Small Child', null, null, 100);
    } else if (sceneNum==35) {
        scene(sceneNum, gat_n, null, hall, 
            '["As you go check to see if Tom really left, out of nowhere, Daisy Grabs you and Kisses you on the mouth"]', null, 'Be Happy', null, null, 90);
    } else if (sceneNum==36) {
        scene(sceneNum, gat_s, placeholder, hall, 
            '["Reality suddenly hits you like a Brick, the child that appeared before you was Daisy\'s and Tom\'s child."]', null, 'Look at the Child in shock', 'Turn to Daisy', null, 65);
    } else if (sceneNum==37) {
        scene(sceneNum, gat_s, null, hall, 
            '["Daisy is too busy fawning over the child to notice you"]', null, 'Look at the Child', null, null, 50);
    } else if (sceneNum==38) {
        scene(sceneNum, gat_s, null, hall, 
            '["The Child looks back at you"]', null, 'next', null, null, 40);
    } else if (sceneNum==39) {
        scene(sceneNum, gat_s, null, hall, 
            '["Where\'s Daddy?"]', 'Child', 'Realize that Daisy and Tom could\'ve truly loved each other', null, null, 30);
    } else if (sceneNum==40) {
        scene(sceneNum, daisy, gat_s, hall, 
            '["She does\'nt look like her father..."]', 'Daisy', 'Space Out in Shock', null, null, 35);
    } else if (sceneNum==41) {
        scene(sceneNum, gat_s, null, hall, 
            '["While Tom re-enters the room, the child leaves with the nurse..."]', null, 'Turn toward Daisy', null, null, 35);
    } else if (sceneNum==42) {
        scene(sceneNum, gat_n, daisy, hall, 
            '["You always look so cool..."]', 'Daisy', 'Keep looking at Daisy as your love overcomes the shock', 'Attempt to avoid Daisy and Look for Nick', null, 45);
    } else if (sceneNum==43) {
        scene(sceneNum, tom_n, null, path, '["Come on--we\'re all going to town!"]', 'Tom', 'Notice Tom\'s anger', null, null, 50);
    } else if (sceneNum==44) {
        scene(sceneNum, gat_h, tom_n, hall, 
            '["As you take a glance to find Nick, you realize that Tom is angry because of Daisy\'s hints of love toward you"]', null, 'Be normal', null, null, 60);
    } else if (sceneNum==45) {
        scene(sceneNum, gat_h, daisy, path, 
            '["You take Nick and Jordan. We\'ll follow you in the coupé."]', 'Tom', 'Get Close to Daisy to Ride with her', 'Start Walking toward Nick', null,);
    } else if (sceneNum==46) {
        scene(sceneNum, tom, nick, hall, 
            '["Tom, with visible anger on his face, storms away with Nick and Jordan"]', null, 'Drive to the City with Daisy', null, null,60);
    } else if (sceneNum==47) {
        scene(sceneNum, gat_h, daisy, hall, 
            '["Daisy Walks next to you, touching your coat signalling that she wants to ride with you"]', null, 'next', null, null,55);
    } else if (sceneNum==48) {
        scene(sceneNum, placeholder, null, null, 
            '["Driving to city..."]', null, 'next', null, null,);
    } else if (sceneNum==49) {
        scene(sceneNum, gat_h, null, hall, '["The sweltering City heat makes you uncomfertable as you enter the hotel room with Daisy to meet Tom, Nick, and Jordan."]', null, 'next', null, null, 70);
    }
}

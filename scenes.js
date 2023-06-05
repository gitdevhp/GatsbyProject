var placeholder = 'image/character/placeholder.jpeg'
var gat_h = 'image/character/gatsby_happy.png'
var gat_n = 'image/character/gatsby_neutral.png'
var gat_s = 'image/character/gatsby_sad.png'
var tom_n = 'image/character/tom_neutral.png'
var wolf = 'image/character/placeholder.jpeg'
var daisy = 'image/character/placeholder.jpeg'
var nick = 'image/character/placeholder.jpeg'


var hall_old = 'hall.png'
var hall = 'hall_new.png'
var path = 'path.png'
var party= 'party.png'


//scene setter
function setScene(sceneNum) {
    console.log('At Setscene; sceneNum = ' + sceneNum)
    if (sceneNum == 1) {
        scene(sceneNum, gat_h, tom_n, hall, '["You catch your breath, having hastened yourself to the door to greet two freshly-arrived guests, Tom and Daisy Buchanan."]', null, 'next', null, null,);
    } else if (sceneNum == 2) {
        console.log('Got to if scene num = 2 statement in setSceneFunction')
        scene(sceneNum, gat_n, placeholder, hall, 
        '["Nervously, you greet the Buchanans, welcoming them to the party. Your long wait for your love, Daisy Buchanan, to show up to one of your parties has finally ended."]', null, 'Continue talking with Daisy', 'Look at Daisy, but contain your urge to talk with her', null);
    } else if (sceneNum==3) {
        scene(sceneNum, placeholder, gat_h, party, 
            '["What a lively party you have!"]', 'Daisy', 'Agree apathetically and ask her to dance', null, null);
    } else if (sceneNum==4) {
        scene(sceneNum, placeholder, gat_h, party, 
            '["I would love to, as long as you\'ll have me."]', 'Daisy', 'Next', null, null);
    } else if (sceneNum==5) {
        scene(sceneNum, placeholder, gat_h, party, 
            '["As you Dance, you notice a pair of eyes glaring suspiciously at you and Daisy."]', null, 'next', null, null);
    } else if (sceneNum==6) { //Path 2 Part 1
        scene(sceneNum, placeholder, gat_n, party, 
            '["You stare at Daisy, in awe of her beautiful dress. Tom notices you staring at his wife."]', null, 'Confront Tom, asking him to express his thoughts', 'Ignore Tom, leading Daisy into the Party', null);
    } else if (sceneNum==7) {
        scene(sceneNum, tom_n, gat_n, party, 
            '["Mind your own business, bootlegger. I don\'t want some lawbreaker messing around in my personal life, and neither does Daisy!"]', 'Tom', 'Introduce Tom to the partygoers as a Polo Player', null, null);
    } else if (sceneNum==8) {
        scene(sceneNum, gat_h, placeholder, party, 
            '["As Tom “The Polo Player” awkwardly mingles with party-goers, Daisy starts talking you up."]', null, 'Ask Daisy to dance with you.', 'Wait for Daisy to get comfortable before inviting her to dance', 'Continue to chat with Daisy');
    } else if (sceneNum==9) {
        scene(sceneNum, gat_h, null, party, 
            '["You Continue to keep Daisy company, but you notice that Daisy is growing disinterested and wearisome of the party."]', null, 'Ask Daisy to dance with you.', null, null);
    } else if (sceneNum==10) {
        scene(sceneNum, gat_h, placeholder, party, 
            '["Well...alright then Jay. It has been awhile, but I\'d love a spin around the dance floor."]', 'Daisy', 'Dance Gracefully with Daisy', null, null);
    } else if (sceneNum==11) {
        scene(sceneNum, tom_n, null, party, 
            '["Tom, suspicous of your relationship with Daisy, follows you in."]', null, 'Introduce Tom as a Polo Player', null, null);
    } else if (sceneNum==12) { // Part 1 conclusion
        scene(sceneNum, placeholder, gat_h, path, 
            '["At the end of the Party, Tom is visibly flustered. \nThe Buchanans are escorted by your neighbor and friend Nick to their waiting limousine."]', null, 'Go to your room and approach Nick when he is alone', 'Stay where you are, waving goodbye to departing partygoers.', null);
    } else if (sceneNum==13) {
        scene(sceneNum, placeholder, gat_n, hall, 
            '["Chicago is on the line..."]', 'Servant', 'Pick up the phone', 'Tell the servant to explain that you are busy', null,);
    } else if (sceneNum==14) {
        scene(sceneNum, gat_s, null, path,
            '["You suddenly get sad as you realize that Daisy did not truly enjoy the party"]', null, 'next', null, null,);
    } else if (sceneNum==15) {
        scene(sceneNum, gat_n, null, path, 
            '["After the phone call, as you stroll outside, the phone call reminds you that the money you\'ve earned has not been earned through rightful means and you hope Daisy never finds out..."]', null, 'next', null, null,);
    } else if (sceneNum==16) {
        scene(sceneNum, placeholder, gat_s, path, 
            '["You notice Nick approaching you"]', null, 'Explain to Nick that Daisy did\'nt enojoy the party', null, null,);
    } else if (sceneNum==17) {
        scene(sceneNum, gat_s,placeholder, path, 
            '["I\'m sure she enojoyed it!"]', 'Nick', 'Comment that you feel that your relationship with Daisy is distant', null, null,);
    } else if (sceneNum==18) {
        scene(sceneNum, gat_s, null, hall, 
            '["Sadness envelops you as you remember the old Daisy, the kind and understanding Daisy during the War."]', null, 'Beleive that you can fix her...', null, null,);
    } else if (sceneNum==19) {
        scene(sceneNum, null, null, null, 
            '["𝘕𝘦𝘹𝘵 𝘋𝘢𝘺"]', null, 'Next', null, null,);
    } else if (sceneNum==20) {
        scene(sceneNum, gat_h, null, hall, 
            '["Considering Tom\'s behavior yesterday, you begin to grow increasingly worried of being found out.\nIn particular, you worry that your servants will spread word to the press."]', null, 'Relieve them of their responsibilities', 'Ignore the issue and do nothing', null,);
    } else if (sceneNum==21) {
        scene(sceneNum, gat_n, wolf, hall, 
            '["You ask your business partner and good friend Meyer Wolfsheim if he knows anyone for your to hire. He suggests a group of young and seemingly cartel-associated workers, ready to work within 48 hours."]', null, 'Hire them for twice the previous servants\' pay rate', null, null,);
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
            '["I see."]', 'Nick', 'Invite Nick to have lunch with you and Daisy tomorrow afternoon', null, null,);
    } else if (sceneNum==26) {
        scene(sceneNum, null, null, null, 
            '["𝘕𝘦𝘹𝘵 𝘋𝘢𝘺"]', null, 'Next', null, null,);
    } else if(sceneNum==27) {
        scene(sceneNum, gat_n, null, hall, 
            '["You arrive at the front step of the Buchanan Estate, the swealtering making you noticably light headed..."]', null, 'Knock on the door, and enter the mansion', null, null,);
    } else if(sceneNum==28) {
        scene(sceneNum, gat_h, daisy, hall, 
            '["Welcome, Jay!"]', 'Daisy', 'Ask her for a tour of the House', 'Greet her and Look around for Tom', null,);
    } else if(sceneNum==29){
        scene(sceneNum, gat_h, null, hall, '["Tom seems to be busy discussing important matters over the phone"]', null, 'next', null, null,);
    } else if(sceneNum==30) {
        scene(sceneNum, gat_n, nick, hall, 
            '["Soon, the final guest, Nick, arrives at the house"]', null, 'next', null, null,);
    } else if(sceneNum==31) {
        scene(sceneNum, gat_h, tom_n, hall, 
            '[""]', null, 'next', null, null,);
    }
}

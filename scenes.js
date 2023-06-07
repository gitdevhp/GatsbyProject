var placeholder = 'image/character/placeholder.jpeg'
var gat_h = 'image/character/gatsby_happy.png'
var gat_n = 'image/character/gatsby_neutral.png'
var gat_s = 'image/character/gatsby_sad.png'
var tom_n = 'image/character/tom_neutral.png'
var daisy = 'image/character/daisy_happy.png'
var dai_n = 'image/character/daisy_neutral.png'
var dai_s = 'image/character/daisy_sad.png'

var wolf = 'image/character/wolf_temp.png'
var nick = 'image/character/nick_or_wolf_neutral.png'


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
            '["Make us a cold drink Tom!!"]', 'Daisy', 'next', null, null,85);
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
    } else if (sceneNum==9123) {
        scene(sceneNum, gat_h, null, hall, 
            '["As you turn toward Daisy, Daisy\'s gaze meets yours..."]', null, 'next', null, null, 40);
    } else if (sceneNum==42) {
        scene(sceneNum, gat_n, daisy, hall, 
            '["You always look so cool..."]', 'Daisy', 'Keep looking at Daisy as your love overcomes the shock', 'Attempt to avoid Daisy and Look for Nick', null, 45);
    } else if (sceneNum==43) {
        scene(sceneNum, tom_n, null, path, 
            '["Come on--we\'re all going to town!"]', 'Tom', 'Notice Tom\'s anger', null, null, 50);
    } else if (sceneNum==44) {
        scene(sceneNum, gat_h, tom_n, hall, 
            '["As you take a glance to find Nick, you realize that Tom is angry because of Daisy\'s hints of love toward you"]', null, 'Be normal', null, null, 60);
    } else if (sceneNum==45) {
        scene(sceneNum, gat_h, daisy, path, 
            '["You take Nick and Jordan. We\'ll follow you in the coupé."]', 'Tom', 'Get Close to Daisy to Ride with her', 'Start Walking toward Nick', null,);
    } else if (sceneNum==46) {
        scene(sceneNum, tom_n, nick, hall, 
            '["Tom, with visible anger on his face, storms away with Nick and Jordan"]', null, 'Drive to the City with Daisy', null, null,60);
    } else if (sceneNum==47) {
        scene(sceneNum, gat_h, daisy, hall, 
            '["Daisy Walks next to you, touching your coat signalling that she wants to ride with you"]', null, 'next', null, null,55);
    } else if (sceneNum==48) {
        scene(sceneNum, placeholder, null, null, 
            '["Driving to city..."]', null, 'next', null, null,);
    } else if (sceneNum==49) {
        scene(sceneNum, gat_n, daisy, hall, '["The sweltering City heat makes you uncomfertable as you enter the hotel room with Daisy to meet Tom, Nick, and Jordan."]', null, 'Help open a Window in the hotel room', 'Just walk in', null, 65);
    } else if (sceneNum==50) {
        scene(sceneNum, gat_n, daisy, hall, 
            '["As you open the window, you hear Diasy complain about the heat"]', null, 'next', null, null,);
    } else if (sceneNum==51) {
        scene(sceneNum, tom_n, daisy, hall, 
            '["The thing to do is to forget about the heat. You make it ten times worse by crabbing about it!"]', 'Tom', 'Defend Daisy', 'Look at Daisy\'s reaction', 'Aggress Tom',);
    } else if (sceneNum==52) {
        scene(sceneNum, daisy, null, hall, 
            '["You notice Daisy unconfortably rush in front of the hotel mirror to fix her hair in the hot city heat. Tom seems to get irritated as Daisy talks about the heat."]', null, 'next', null, null,);
    } else if (sceneNum==53) {
        scene(sceneNum, gat_n, tom_n, hall, 
            '["You want Daisy to be happy, and to gain her trust, you approach Tom to defend her"]', null, 'next', null, null,);
    } else if (sceneNum==54) {
        scene(sceneNum, tom_n, daisy, hall, 
            '["Daisy seems to be uncomfortable with Tom\'s remark. You wish to be more favorable in Daisy\'s eyes."]', null, 'Defend Daisy', 'Aggress Tom', null,);
    } else if (sceneNum==55) {
        scene(sceneNum, gat_s, null, hall, 
            '["Tom\'s attitude towards Daisy angers you, how could someone not appreciate Daisy and be so mean towards her?"]', null,'I would never do such a thing!', null, null,);
    } else if (sceneNum==56) {
        scene(sceneNum, gat_n, tom_n, hall, 
            '["Why not let her alone old sport? You\'re the one that wanted to come to town."]', 'You', 'Look for a reaction by Tom', null, null,70);
    } else if (sceneNum==57) {
        scene(sceneNum, gat_n, tom_n, hall, 
            '["Tom seems to be angered by your comment, he attacks your \"Old Sport\" habit which makes you slightly worried that the accent does\'nt fit in natually with the upper class..."]', null, 'Dont fight with Tom', 'Remark that Daisy loves you more than Tom', 'Sarcastically chuckle at Tom\'s remark',60);
    } else if (sceneNum==58) {
        scene(sceneNum, daisy, null, hall, 
            '["Before Tom can say anything, Daisy breaks up the fight. You\'re happy that Daisy protected you from Tom"]', null, 'next', null, null,70);
    } else if (sceneNum==59) {
        scene(sceneNum, daisy, null, hall, 
            '["Before You can say anything, Daisy steps in to break up the fight."]', null, 'Take a deep breath', null, null,65);
    } else if (sceneNum==60) {
        scene(sceneNum, tom_n, gat_n, hall, 
            '["After Tom and the Others settle down, Tom asks you about your time in Oxford"]', null, 'Tell the truth that you only stayed at Oxford for 5 months', 'Attempt to avoid the question', 'Give a broad answer',);
    } else if (sceneNum==61) {
        scene(sceneNum, gat_n, null, hall, 
            '["It was 1919, I only stayed for 5 months. That\'s why I cant really call myself an Oxford man."]', 'You', 'Brace for Criticism', null, null,);
    } else if (sceneNum==62) {
        scene(sceneNum, gat_h, null, hall, 
            '["You brace for criticism and ridicule from Nick, Daisy, and Tom, but none come as they all seem glad that you told the truth."]', null, 'Be happy that you made the right decision', null, null, 75);
    } else if (sceneNum==63) {
        scene(sceneNum, gat_n, tom_n, hall,
            '["I told you I went there."]', 'You', 'next', null, null,);
    } else if (sceneNum==64) {
        scene(sceneNum, tom_n, null, hall, 
            '["Tom relentlessly asks you for a specific answer, you have no choice but to tell the truth to avoid suspicion"]', null, 'Tell the truth', null, null,);
    } else if (sceneNum==65) {
        scene(sceneNum, gat_h, null, hall, 
            '["Tom seems to have run out of ideas to expose you! But he suddenly reveals his suspicion about the relationship between you and Daisy..."]', null, 'next', null, null,);
    } else if (sceneNum==66) {
        scene(sceneNum, tom_n, gat_n, hall, 
            '["I suppose the latest thing is to sit back and let Mr. Nobody from Nowhere make love to your wife."]', 'Tom', 'Tell Tom that Daisy has always loved You but not him', null, null,);
    } else if (sceneNum==67) {
        scene(sceneNum, gat_s, daisy, hall, 
            '["As you were about to tell Tom, Daisy Stops you looking at you with plea to not say what you wanted to tell Tom."]', null, 'Dont tell Tom', 'Tell Tom later when you\'re alone with him', null,65);
    } else if (sceneNum==68) {
        scene(sceneNum, gat_s, null, hall, 
            '["Tom urges you to tell him what you wanted to say. Your inner desire for Daisy to be your\'s takes over and you cant help it but to give into Tom\'s pressure."]', null, 'Tell him', null, null,);
    } else if (sceneNum==69) {
        scene(sceneNum, gat_h, null, hall, 
            '["Your wife does\'nt love you, She\'s never loved you. She loves me!"]', null, 'next', null, null,75);
    } else if (sceneNum==70) {
        scene(sceneNum, gat_h, tom_n, hall, 
            '["You\'ve finally let out your inner feelings. Tom seemes to be shocked, he beleives that you are lying and attempts to call out your bluff."]', null, 'Look at Daisy\'s reaction', 'Continue to argue with Tom', null,);
    } else if (sceneNum==71) {
        scene(sceneNum, gat_n, daisy, hall, 
            '["Daisy is quiet, you hope this sudden statement has\'nt upset Daisy..."]', null, 'next', null, null,);
    } else if (sceneNum==72) {
        scene(sceneNum, gat_n, daisy, hall, '["You never loved Tom right?"]', 'You', 'Listen for Daisy\'s response', null, null,);
    } else if (sceneNum==73) {
        scene(sceneNum, gat_h, null, hall, 
            '["Despite Tom\'s protests and efforts to regain Daisy\'s heart, she turns a cold shoulder toward Tom as you stand beside her."]', null, 'next', null, null,85);
    } else if (sceneNum==74) {
        scene(sceneNum, tom_n, gat_n, hall, 
            '["There\'re things between Daisy and me that you\'ll never know, thing that neither of us can forget..."]', 'Tom', 'Attempt to get Tom to give up', 'Get Daisy to tell Tom to give in', null,80);
    } else if (setScene==75) {
        scene(sceneNum, gat_s, null, null, 
            '["Tom\'s statement reminds you of the time lost between you and Daisy and the Buchanan child..."]', null, 'next', null, null,65);
    } else if (setScene==76) {
        scene(sceneNum, gat_s, null, null, 
            '["Despite Tom\'s connection with Daisy, you have full faith that Daisy still truly loves you..."]', null, 'next', null, null,75);
    } else if (setScene==77) {
        scene(sceneNum, gat_n, tom_n, hall, 
            '["Daisy\'s leaving you."]', 'You', 'Look at Daisy for a response', 'Give Tom a look of Confidence', null,);
    } else if (setScene==78) {
        scene(sceneNum, gat_h, null, hall, 
            '["Daisy Agrees with you, she will not stay with Tom. You have full confidence that Daisy is falling away from Tom and closer to you."]', null, 'next', null, null,85);
    } else if (setScene==79) {
        scene(sceneNum, gat_n, tom_n, null, 
            '["Despite your long awaited dream of getting Daisy to be your\'s, and Tom\'s shaky hold on the situation, Tom suddenly gets a surge of Confidence..."]', null, 'next', null, null,75);
    } else if (sceneNum==80) {
        scene(sceneNum, tom_n, gat_n, hall, 
            '["I found out what your drug stores were."]', 'Tom', 'panic', 'stay calm', null,);
    } else if (sceneNum==81) {
        scene(sceneNum, gat_s, tom_n, hall, 
            '["Suddenly and rapidly, a burst of accusations pour out of Tom\'s mouth claiming that you were dealt illegal alcohol. You lose focus in shock, but the parts you hear are largly correct. You Can\'t beleive it! Who let out the Secrets?"]', null, 'Give an excuse and act Calm', null, null,65);
    } else if (sceneNum==82) {
        scene(sceneNum, gat_s, tom_n, hall, 
            '["Before you are able to push the conversation to a different topic, Tom snaps at you..."]', null, 'next', null, null,);
    } else if (sceneNum==83) {
        scene(sceneNum, gat_s, null, hall, 
            '["The world swirls, you feel lightheaded, you are speechless. Yet these emotions and Tom\'s accusations only make you angry. Why did Tom have to be in Daisy\'s life?"]', null, 'next', null, null,55);
    } else if (sceneNum==84) {
        scene(sceneNum, gat_s, dai_n, hall, 
            '["These accusations are false Daisy!"]', "You", 'attempt to convince daisy that You are righteous', null, null,45);
    } else if (sceneNum==85) {
        scene(sceneNum, gat_s, null, null, 
            '["Stress and Desperation takes over, you\'re not sure what to do."]', null, 'Continue to Explain yourself', null, null,40);
    } else if (sceneNum==86) {
        scene(sceneNum, gat_s, null, hall, 
            '["Words Stumble out of your mouth, you don\'t even know what you\'re saying. All you know is that you must hold onto Daisy\'s love"]', null, 'Explain more', 'Stop and look at Daisy\'s expression', null,);
    } else if (sceneNum=87) {
        scene(sceneNum, gat_s, dai_s, hall, 
            '["Daisy is scared, she does\'nt know what to do..."]', null, 'next', null, null,30);
    } else if (sceneNum==88) {
        scene(sceneNum, tom_n, gat_s, hall, 
            '["Tom insists that you and Daisy go back to East Egg"]', null, 'Leave with Daisy but let Daisy drive', 'Leave with Daisy but you drive', null,);
    } else if (sceneNum==89) {
        scene(sceneNum, dai_n, gat_s, hall, 
            '["Let me drive, it\'ll help me calm down."]', null, 'Let Daisy Drive', null, null,25);
    } else if (sceneNum==90) {
        scene(sceneNum, null, null, hall, 
            '["En Route to East Egg"]', 'Driving', 'next', null, null,);
    } else if (sceneNum==91) {
        scene(sceneNum, gat_h, daisy, hall, 
            '["You lean back in your seat, relaxing as the trip draws on."]', null, 'next', null, null,);
    } else if (sceneNum==92) {
        scene(sceneNum, gat_n, dai_n, hall, 
            '["Suddenly, a distressed woman shoots out of left field, waving her hands frantically."]', null, 'Grab the wheel', 'Let Daisy handle it', null,);
    } else if (sceneNum==93) {
        scene(sceneNum, gat_n, dai_s, hall, 
            '["You rip the steering wheel away from daisy, but find that you are too late to do anything."]', null, 'next', null, null,);
    } else if (sceneNum==94) {
        scene(sceneNum, gat_n, dai_s, path, 
            '["AHHHH!"]', 'Daisy', 'next', null, null,);
    } else if (sceneNum==95) {
        scene(sceneNum, gat_n, dai_s, path, 
            '["The car flies straight through the woman, throwing her under the vehicle and splattering blood all over the windshield."]', null, 'next', null, null,);
    } else if (sceneNum==96) {
        scene(sceneNum, gat_n, dai_n, path, 
            '["In a frenzy, Daisy speeds off at speeds well in excess of the speed limit."]', null, 'Take over the wheel', 'Sit in silence', null,);
    } else if (sceneNum==97) {
        scene(sceneNum, gat_n, null, path, 
            '["Worried for your life, you pull the emergency brake. Daisy is overcome by emotion and collapses."]', null, 'Take the wheel and drop off daisy', null, null,);
    } else if (sceneNum==98) {
        scene(sceneNum, gat_n, null, path, 
            '["You drop off Daisy at the Buchanan Mansion."]', null, 'Wait outside to keep tabs on daisy', 'Go Home', null,);
    } else if (sceneNum==99) {
        scene(sceneNum, gat_n, null, path, 
            '["You watch Daisy through the bushes outside their courtyard, making sure she is safe."]', null, 'next', null, null,);
    } else if (sceneNum==100) {
        scene(sceneNum, gat_n, null, path, 
            '["While driving home, you worry that Tom might come home and find out about what happened today. You decide that it would be best to keep them in check."]', null, 'next', null, null,);
    } else if (sceneNum==101) {
        scene(sceneNum, tom_n, daisy_n, hall, 
            '["You see daisy and Tom eating cold fried chicken and watermelon while listening to music. Neither of them look happy"]', null, 'Go Home and Sleep', null, null,);
    } else if (sceneNum==102) {
        scene(sceneNum, null, null, null, 
            '["Next Day"]', null, 'next', null, null,);
    } else if (sceneNum==120) {
        scene(sceneNum, gat_s, null, hall, 
            '["The feeling of dejection and loss of sleep makes you weary and tired..."]', null, 'Open the front door to get some fresh air', 'Get a servant to open some windows and doors for fresh air', null,65);
    } else if (sceneNum==121) {
        scene(sceneNum, nick, gat_s, hall, 
            '["Hello Jay..."]', 'Nick', 'Welcome Nick into your home', null, null,);
    } else if (sceneNum==122) {
        scene(sceneNum, gat_s, null, hall, 
            '["You ought to go away"]', 'Nick', 'Consider it', 'Stay', null,);
    } else if (sceneNum==123) {
        scene(sceneNum, gat_n, nick, hall, 
            '["Go away now, Old Sport?"]', 'You', 'next', null, null,);
    } else if (sceneNum==124) {
        scene(sceneNum, gat_s, nick, hall, 
            '["As Nick attempts to convince you to run away, you realize that nothing will ever convince you to leave Daisy behind..."]', null, 'Talk to Nick about your first encounter with Daisy', null, null,70);
    } else if (sceneNum==125) {
        scene(sceneNum, gat_n, null, hall, 
            '["As you explain Daisy\'s popularity, wealth, and personality, you remember the unforgettable experiences you had with her. Daisy still loves you and you must try to re-capture her heart."]', null, 'Your Gardener approaches you', null, null,75);
    } else if (sceneNum==126) {
        scene(sceneNum, placeholder, gat_n, hall, 
            '["The leaves are falling and could clog up the drain. Should I drain the pool, sir?"]', "Servant", 'Drain the Pool', 'Do not drain the pool', null,);
    } else if (sceneNum==127) {
        scene(sceneNum, gat_n, placeholder, hall, 
            '["Wait a day, I hav\'nt gone swimming this summer yet"]', null, 'Go use the pool or swim', null, null,);
    } else if (sceneNum==128) {
        scene(sceneNum, gat_n, null, hall, 
            '["Right before you are about to tell the servant to drain the pool, you remember that you hav\'nt gone swimming at all this summer and you hope to swim at least once this year."]', null, 'next', null, null,);
    } else if (sceneNum==129) {
        scene(sceneNum, gat_h, null, hall, 
            '["As you lay out ontop of a matress on the pool you realize how beautiful the falling leaves were"]', null, 'Think about Daisy', 'Rethink Nick\'s suggestion to run away', null, 70);
    } else if (sceneNum==130) {
        scene(sceneNum, gat_h, null, hall, 
            '["You remember how nice Daisy was to you and how she used to love you during the war... No matter what, tou beleive Daisy will one day come back to you"]', null, 'Call for your servant', 'Take a dip into the pool', 'Think more about Daisy', 80);
    } else if (sceneNum==131) {
        scene(sceneNum, gat_h, null, hall, 
            '["You think about Gatsby\'s suggestion, wondering if you\'ve made the correct decision to stay. "]', null, 'next', null, null, 75);
    } else if (sceneNum==132) {
        document.getElementById('game').style.display='none';
        document.getElementById('end').style.display='block';
        //GUNSHOT SOUNDS BANG BANG BANG 
        //WAIT FOR 3 SECONDS IDK
        //THEN DO A SAD SCENEWHERE GATBY THINKS IF HE COULDVE DONE ANYTHING DIFFERENT
        typeText('["What couldve been..."]','endtext');
        // NEXT BUTTON OR OPTION 1 BUTTON THAT GOES TO SCENE 133
    } else if (sceneNum==133) {
        //THE END OR RESTART BUTTON
    }
      
}

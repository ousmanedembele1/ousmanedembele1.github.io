let finalLevel =  5;
let lavas = [];
let powerups = [];
let platforms = [];
let texts = [];
let checkpoints = [];
let doorLocations = [];
let fakePlatforms = [];
let hiddenPlatforms = []

//LEVEL 1

fakePlatforms.push({
    leftX: 0,
    topY: 780,
    rightX: 3180,
    bottomY: 930,
    level: 1
});
platforms.push({
    leftX: 0,
    topY: 905,
    rightX: 4500,
    bottomY: 930,
    level: 1,
    color: "white"
});
platforms.push({
    leftX: 100,
    topY: 780,
    rightX: 2990,
    bottomY: 805,
    level: 1,
    color: "white"
});
texts.push({
    x: 960,
    y:100,
    words: "Use Left and Right  or A and D to move",
    level: 1
});
platforms.push({
    leftX: 2380,
    topY: 680,
    rightX: 2590,
    bottomY: 800,
    level: 1,
    color: "white"
});
platforms.push({
    leftX: 2580,
    topY: 580,
    rightX: 2790,
    bottomY: 800,
    level: 1,
    color: "white"
});
platforms.push({
    leftX: 2780,
    topY: 480,
    rightX: 3040,
    bottomY: 805,
    level: 1,
    color: "white"
});
texts.push({
    x: 2880,
    y:100,
    words: "Use Up  or W to jump",
    level: 1
});
platforms.push({
    leftX: 2980,
    topY: 380,
    rightX: 3190,
    bottomY: 520,
    level: 1,
    color: "white"
});
fakePlatforms.push({
    leftX: 2980,
    topY: 480,
    rightX: 3380,
    bottomY: 930,
    level: 1
});
platforms.push({
    leftX: 3180,
    topY: 280,
    rightX: 3380,
    bottomY: 520,
    level: 1,
    color: "white"
});
platforms.push({
    leftX: 3180,
    topY: 650,
    rightX: 3380,
    bottomY: 800,
    level: 1,
    color: "white"
});
platforms.push({
    leftX: 3180,
    topY: 780,
    rightX: 4500,
    bottomY: 930,
    level: 1,
    color: "white"
});
texts.push({
    x: 4800,
    y: 100,
    words: "Don't fall!",
    level: 1
});
platforms.push({
    leftX: 5100,
    topY: 780,
    rightX: 6160,
    bottomY: 930,
    level: 1,
    color: "white"
});
platforms.push({
    leftX: 6640,
    topY: 780,
    rightX: 6800,
    bottomY: 800,
    level: 1,
    color: "white"
});
texts.push({
    x: 6720,
    y:100,
    words: "Use Down or S to drop",
    level: 1
});
platforms.push({
    leftX: 7280,
    topY: 780,
    rightX: 7630,
    bottomY: 930,
    level: 1,
    color: "white"
});
checkpoints.push({
    x: 7530,
    y: 580,
    reached: false,
    level: 1
});
platforms.push({
    leftX: 8160,
    topY: 580,
    rightX: 8250,
    bottomY: 600,
    level: 1,
    color: "white"
});
texts.push({
    x: 8640,
    y: 100,
    words: "Checkpoints save your progress",
    level: 1
});
platforms.push({
    leftX: 8710,
    topY: 480,
    rightX: 8800,
    bottomY: 500,
    level: 1,
    color: "white"
});
platforms.push({
    leftX: 9360,
    topY: 680,
    rightX: 9450,
    bottomY: 700,
    level: 1,
    color: "white"
});
platforms.push({
    leftX: 9660,
    topY: 360,
    rightX: 9760,
    bottomY: 380,
    level: 1,
    color: "white"
});
platforms.push({
    leftX: 10550,
    topY: 780,
    rightX: 12470,
    bottomY: 930,
    level: 1,
    color: "white"
});
texts.push({
    x: 11630,
    y:100,
    words: "Reach the portal to move on to the next level",
    level: 1
});

//LEVEL 2

platforms.push({
    leftX: 0,
    topY: 320,
    rightX: 500,
    bottomY: 370,
    level: 2,
    color: "white"
});
platforms.push({
    leftX: 0,
    topY: 600,
    rightX: 500,
    bottomY: 650,
    level: 2,
    color: "white"
});
platforms.push({
    leftX: 0,
    topY: 880,
    rightX: 500,
    bottomY: 930,
    level: 2,
    color: "white"
});
// hovering
platforms.push({
    leftX: 1200,
    topY: 220,
    rightX: 1400,
    bottomY: 270,
    level: 2,
    color: "white"
});
platforms.push({
    leftX: 2100,
    topY: 420,
    rightX: 2300,
    bottomY: 470,
    level: 2,
    color: "white"
});
platforms.push({
    leftX: 3000,
    topY: 620,
    rightX: 3200,
    bottomY: 670,
    level: 2,
    color: "white"
});
fakePlatforms.push({
    leftX: 1920*2,
    topY: 780,
    rightX: 1920*2+800,
    bottomY: 930,
    level: 2
});
//base
platforms.push({
    leftX: 1920*2,
    topY: 780,
    rightX: 1920*2.5-600,
    bottomY: 930,
    level: 2,
    color: "white"
});
fakePlatforms.push({
    leftX: 1920*2+500,
    topY: 450,
    rightX: 1920*2+700,
    bottomY: 500,
    level: 2
});
hiddenPlatforms.push({
    leftX: 1920*2+650,
    topY: 880,
    rightX: 1920*2+850,
    bottomY: 930,
    level: 2
});
platforms.push({
    leftX: 1920*3.5+600,
    topY: 780,
    rightX: 1920*5,
    bottomY: 930,
    level: 2,
    color: "white"
});
hiddenPlatforms.push({
    leftX: 1920*2+900,
    topY: 270,
    rightX: 1920*2+1100,
    bottomY: 320,
    level: 2
});
platforms.push({
    leftX: 1920*2+1300,
    topY: 580,
    rightX: 1920*2+1500,
    bottomY: 630,
    level: 2,
    color: "white"
});
platforms.push({
    leftX: 1920*2+1450,
    topY: 150,
    rightX: 1920*2+1650,
    bottomY: 200,
    level: 2,
    color: "white"
});
platforms.push({
    leftX: 1920*3+700,
    topY: 550,
    rightX: 1920*3+900,
    bottomY: 600,
    level: 2,
    color: "white"
});
// base
platforms.push({
    leftX: 1920*3.5+600,
    topY: 780,
    rightX: 1920*5,
    bottomY: 930,
    level: 2,
    color: "white"
});
powerups.push({
    x: 1920*5-250,
    y: 705,
    effect: "doubleJump",
    level: 2,
    color: "hsl(270, 100%, 50%)",
    collected: false
});
platforms.push({
    leftX: 1920*6,
    topY: 780,
    rightX: 1920*6.5-300,
    bottomY: 930,
    level: 2,
    color: "white"
});
platforms.push({
    leftX: 1920*6.5+100,
    topY: 180,
    rightX: 1920*7-300,
    bottomY: 230,
    level: 2,
    color: "white"
});
platforms.push({
    leftX: 1920*8,
    topY: 780,
    rightX: 1920*9,
    bottomY: 930,
    level: 2,
    color: "white"
});








texts.push({
    x: 1920/2,
    y:100,
    words: "Physics sometimes doesn't apply!",
    level: 2
});
texts.push({
    x: 1920*2.5,
    y:100,
    words: "Things are not always as they seem...",
    level: 2
});
texts.push({
    x: 1920*4.5,
    y:100,
    words: "A powerup! Maybe it will help!",
    level: 2
});
checkpoints.push({
    x:1920*2,
    y:580,
    reached: false,
    level: 2
});
checkpoints.push({
    x:1920*3.5+600,
    y:580,
    reached: false,
    level: 2
});








platforms.push({
    leftX: 0,
    topY: 780,
    rightX: 1920,
    bottomY: 930,
    level: 3,
    color: "white"
});
powerups.push({
    x: 1920-75,
    y: 705,
    effect: "upsideDown",
    level: 3,
    color: "hsl(20, 100%, 50%)",
    collected: false
});
platforms.push({
    leftX: 1920,
    topY: 0,
    rightX: 1920*1.5 - 300,
    bottomY: 150,
    level: 3,
    color: "white"
});
platforms.push({
    leftX: 1920*1.5-75,
    topY: 400,
    rightX: 1920*1.5+75,
    bottomY: 450,
    level: 3,
    color: "white"
});








platforms.push({
    leftX: 1920*2-75,
    topY: 550,
    rightX: 1920*2+75,
    bottomY: 600,
    level: 3,
    color: "white"
});
platforms.push({
    leftX: 1920*2.5-75,
    topY: 250,
    rightX: 1920*2.5+75,
    bottomY: 300,
    level: 3,
    color: "white"
});
platforms.push({
    leftX: 1920*3,
    topY: 0,
    rightX: 1920*3.5,
    bottomY: 150,
    level: 3,
    color: "white"
});
platforms.push({
    leftX: 1920*3.5+200,
    topY: 550,
    rightX: 1920*3.5+350,
    bottomY: 600,
    level: 3,
    color: "white"
});
powerups.push({
    x: 1920*3.5+250,
    y: 470,
    effect: "",
    level: 3,
    color: "hsl(0, 100%, 50%)",
    collected: false
});
platforms.push({
    leftX: 1920*4,
    topY: 780,
    rightX: 1920*4.5+700,
    bottomY: 930,
    level: 3,
    color: "white"
});
platforms.push({
    leftX: 1920*4.5+100,
    topY: 220,
    rightX: 1920*4.5+200,
    bottomY: 930,
    level: 3,
    color: "white"
});
platforms.push({
    leftX: 1920*4.5-100,
    topY: 500,
    rightX: 1920*4.5+200,
    bottomY: 550,
    level: 3,
    color: "white"
});
platforms.push({
    leftX: 1920*4.5-100,
    topY: 220,
    rightX: 1920*4.5+200,
    bottomY: 270,
    level: 3,
    color: "white"
});
platforms.push({
    leftX: 1920*4.5+350,
    topY: -700,
    rightX: 1920*4.5+450,
    bottomY: 680,
    level: 3,
    color: "white"
});
powerups.push({
    x: 1920*4.5+375,
    y: 705,
    effect: "inverse",
    level: 3,
    color: "hsl(240, 100%, 50%)",
    collected: false
});
platforms.push({
    leftX: 1920*4.5+600,
    topY: 520,
    rightX: 1920*4.5+700,
    bottomY: 930,
    level: 3,
    color: "white"
});
lavas.push({
    leftX: 1920*6-200,
    rightX: 1920*6-150,
    topY: 309,
    bottomY: 360,
    level: 3
});
lavas.push({
    leftX: 1920*6-550,
    rightX: 1920*6-500,
    topY: 309,
    bottomY: 360,
    level: 3
});
lavas.push({
    leftX: 1920*6-900,
    rightX: 1920*6-850,
    topY: 309,
    bottomY: 360,
    level: 3
});
lavas.push({
    leftX: 1920*6-1250,
    rightX: 1920*6-1200,
    topY: 309,
    bottomY: 360,
    level: 3
});
lavas.push({
    leftX: 1920*6-1600,
    rightX: 1920*6-1550,
    topY: 309,
    bottomY: 360,
    level: 3
});
lavas.push({
    leftX: 1920*6-1950,
    rightX: 1920*6-1900,
    topY: 309,
    bottomY: 360,
    level: 3
});
lavas.push({
    leftX: 1920*6-2300,
    rightX: 1920*6-2250,
    topY: 309,
    bottomY: 360,
    level: 3
});
platforms.push({
    leftX: 1920*4.5+440,
    topY: 310,
    rightX: 1920*6,
    bottomY: 410,
    level: 3,
    color: "white"
});
platforms.push({
    leftX: 1920*6-2300,
    topY: 100,
    rightX: 1920*6+450,
    bottomY: 110,
    level: 3,
    color: "white"
});
















// small platforms
platforms.push({
    leftX: 1920*5+200,
    topY: 900,
    rightX: 1920*5+300,
    bottomY: 930,
    level: 3,
    color: "white"
});
platforms.push({
    leftX: 1920*5+860,
    topY: 900,
    rightX: 1920*5+960,
    bottomY: 930,
    level: 3,
    color: "white"
});
platforms.push({
    leftX: 1920*5+1520,
    topY: 900,
    rightX: 1920*5+1620,
    bottomY: 930,
    level: 3,
    color: "white"
});
platforms.push({
    leftX: 1920*6+150,
    topY: 650,
    rightX: 1920*6+250,
    bottomY: 680,
    level: 3,
    color: "white"
});
powerups.push({
    x: 1920*6+175,
    y: 575,
    effect: "",
    level: 3,
    color: "hsl(0, 100%, 50%)",
    collected: false
});








platforms.push({
    leftX: 1920*6.5+750,
    topY: 830,
    rightX: 1920*7.5,
    bottomY: 930,
    level: 3,
    color: "white"
});
lavas.push({
    leftX: 13615,
    rightX: 14015,
    topY: 829,
    bottomY: 930,
    level: 3
});
powerups.push({
    x: 1920*7.5+180,
    y:570,
    effect: "lengthen",
    level: 3,
    color: "hsl(70, 100%, 50%)",
    collected: false
});

platforms.push({
    leftX: 1920*7.5+200,
    topY: 630,
    rightX: 1920*7.5+210,
    bottomY: 640,
    level: 3,
    color: "white"
});
platforms.push({
    leftX: 1920*8,
    topY: 430,
    rightX: 1920*8+10,
    bottomY: 440,
    level: 3,
    color: "white"
});
platforms.push({
    leftX: 1920*8+500,
    topY: 230,
    rightX: 1920*8+510,
    bottomY: 240,
    level: 3,
    color: "white"
});
platforms.push({
    leftX: 1920*8.5+800,
    topY: 920,
    rightX: 1920*8.5+810,
    bottomY: 930,
    level: 3,
    color: "white"
});
platforms.push({
    leftX: 1920*9,
    topY: 580,
    rightX: 1920*9+10,
    bottomY: 590,
    level: 3,
    color: "white"
});
platforms.push({
    leftX: 1920*9+500,
    topY: 280,
    rightX: 1920*9+510,
    bottomY: 290,
    level: 3,
    color: "white"
});
platforms.push({
    leftX: 1920*10-100,
    topY: 780,
    rightX: 1920*10.5-400,
    bottomY: 930,
    level: 3,
    color: "white"
});
platforms.push({
    leftX: 1920*10.5+200,
    topY: 780,
    rightX: 1920*11,
    bottomY: 930,
    level: 3,
    color: "white"
});
platforms.push({
    leftX: 1920*10.5+400,
    topY: 430,
    rightX: 1920*11,
    bottomY: 480,
    level: 3,
    color: "white"
});
platforms.push({
    leftX: 1920*11-50,
    topY: 440,
    rightX: 1920*11,
    bottomY: 880,
    level: 3,
    color: "white"
});
platforms.push({
    leftX: 1920*10.5+400,
    topY: 440,
    rightX: 1920*10.5+450,
    bottomY: 680,
    level: 3,
    color: "white"
});
platforms.push({
    leftX: 1920*11-400,
    topY: 600,
    rightX: 1920*11-350,
    bottomY: 880,
    level: 3,
    color: "white"
});








platforms.push({
    leftX: 1920*11+460,
    topY: 280,
    rightX: 1920*11+580,
    bottomY: 290,
    level: 3,
    color: "white"
});
platforms.push({
    leftX: 1920*11.5+260,
    topY: 580,
    rightX: 1920*11.5+380,
    bottomY: 590,
    level: 3,
    color: "white"
});
platforms.push({
    leftX: 1920*12+260,
    topY: 480,
    rightX: 1920*12+380,
    bottomY: 490,
    level: 3,
    color: "white"
});
platforms.push({
    leftX: 1920*12.5-20,
    topY: 560,
    rightX: 1920*12.5+100,
    bottomY: 570,
    level: 3,
    color: "white"
});
platforms.push({
    leftX: 1920*12.5+360,
    topY: 920,
    rightX: 1920*12.5+480,
    bottomY: 930,
    level: 3,
    color: "white"
});
platforms.push({
    leftX: 1920*13,
    topY: 780,
    rightX: 1920*14,
    bottomY: 930,
    level: 3,
    color: "white"
});
lavas.push({
    leftX: 1920*13.5-275,
    rightX: 1920*13.5-225,
    topY: 550,
    bottomY: 780,
    level: 3
});








lavas.push({
    leftX: 1920*13.5+225,
    rightX: 1920*13.5+275,
    topY: 550,
    bottomY: 780,
    level: 3
});
texts.push({
    x: 1920*0.5,
    y:100,
    words: "Powerups can do many different things",
    level: 3
});
texts.push({
    x: 1920*1.5,
    y: 830,
    words: "Press r to reset the game at any time",
    level: 3
});
texts.push({
    x: 1920*3.5,
    y:830,
    words: "Red powerups return you to your normal state",
    level: 3
});
texts.push({
    x: 1920*4.5,
    y:100,
    words: "What's this powerup?",
    level: 3
});
texts.push({
    x: 1920*5.5,
    y:655,
    words: "I don't think that lava is good for you...",
    level: 3
});
texts.push({
    x: 1920*7+375,
    y:100,
    words: "This powerup looks interesting...",
    level: 3
});
texts.push({
    x: 1920*13.5,
    y:100,
    words: "What next?",
    level: 3
});
checkpoints.push({
    x:1920*4,
    y:580,
    reached: false,
    level: 3
});
checkpoints.push({
    x: 1920*6.5+750,
    y: 630,
    reached: false,
    level: 3
});
checkpoints.push({
    x: 1920*14-300,
    y: 580,
    reached: false,
    level: 3
});








platforms.push({
    leftX: 0,
    topY: 780,
    rightX: 1920*0.5,
    bottomY: 930,
    level: 4,
    color: "white"
});
texts.push({
    x: 1920/2,
    y:100,
    words: "This level is hard. Good luck!",
    level: 4
});
platforms.push({
    leftX: 1920*0.5+550,
    topY: 920,
    rightX: 1920*0.5+590,
    bottomY: 930,
    level: 4,
    color: "white"
});
platforms.push({
    leftX: 1920+610,
    topY: 920,
    rightX: 1920+650,
    bottomY: 930,
    level: 4,
    color: "white"
});
platforms.push({
    leftX: 1920*1.5+730,
    topY: 870,
    rightX: 1920*1.5+770,
    bottomY: 880,
    level: 4,
    color: "white"
});


platforms.push({
    leftX: 1920*2.5,
    topY: 920,
    rightX: 1920*4.5,
    bottomY: 930,
    level: 4,
    color: "white"
});
platforms.push({
    leftX: 1920*2.5+200,
    topY: 620,
    rightX: 1920*2.5+2530,
    bottomY: 630,
    level: 4,
    color: "white"
});
platforms.push({
    leftX: 1920*2.5+2670,
    topY: 620,
    rightX: 1920*2.5+3030,
    bottomY: 630,
    level: 4,
    color: "white"
});
platforms.push({
    leftX: 1920*2.5+3170,
    topY: 620,
    rightX: 1920*4.5,
    bottomY: 630,
    level: 4,
    color: "white"
});
fakePlatforms.push({
    leftX: 1920*2.5+200,
    topY: 620,
    rightX: 1920*4.5,
    bottomY: 630,
    level: 4,
    color: "green"
})
platforms.push({
    leftX: 1920*2.5+200,
    topY: 420,
    rightX: 1920*4.5,
    bottomY: 430,
    level: 4,
    color: "white"
});
lavas.push({
    leftX: 1920*2.5+200,
    topY: 410,
    rightX: 1920*4.5,
    bottomY: 421,
    level: 4
});
platforms.push({
    leftX: 1920*2.5+200,
    topY: 420,
    rightX: 1920*2.5+210,
    bottomY: 630,
    level: 4,
    color: "white"
});
platforms.push({
    leftX: 1920*4.5-10,
    topY: 420,
    rightX: 1920*4.5,
    bottomY: 630,
    level: 4,
    color: "white"
});
texts.push({
    x: 1920*3.5+100,
    y:540,
    words: "Which ones are safe? Which ones are safe? Which ones are safe? Which ones are safe?",
    level: 4
});
platforms.push({
    leftX: 1920*2.5+200,
    topY: 770,
    rightX: 1920*2.5 + 500,
    bottomY: 780,
    level: 4,
    color: "white"
});
platforms.push({
    leftX: 1920*2.5+700,
    topY: 770,
    rightX: 1920*2.5 + 1000,
    bottomY: 780,
    level: 4,
    color: "white"
});
platforms.push({
    leftX: 1920*2.5+1200,
    topY: 770,
    rightX: 1920*2.5 + 1500,
    bottomY: 780,
    level: 4,
    color: "white"
});
platforms.push({
    leftX: 1920*2.5+1700,
    topY: 770,
    rightX: 1920*2.5 + 2000,
    bottomY: 780,
    level: 4,
    color: "white"
});
platforms.push({
    leftX: 1920*2.5+2200,
    topY: 770,
    rightX: 1920*2.5 + 2500,
    bottomY: 780,
    level: 4,
    color: "white"
});
platforms.push({
    leftX: 1920*2.5+2700,
    topY: 770,
    rightX: 1920*2.5 + 3000,
    bottomY: 780,
    level: 4,
    color: "white"
});
platforms.push({
    leftX: 1920*2.5+3200,
    topY: 770,
    rightX: 1920*2.5 + 3500,
    bottomY: 780,
    level: 4,
    color: "white"
});
platforms.push({
    leftX: 1920*2.5+3700,
    topY: 770,
    rightX: 1920*4.5 + 200,
    bottomY: 780,
    level: 4,
    color: "white"
});
hiddenPlatforms.push({
    leftX: 1920*4.5-1,
    topY: 920,
    rightX: 1920*4.5 + 250,
    bottomY: 930,
    level: 4
});
lavas.push({
    leftX: 1920*2.5+325,
    rightX: 1920*2.5+375,
    topY: 675,
    bottomY: 725,
    level: 4
});
powerups.push({
    x: 1920*2.5+325,
    y: 825,
    effect: "",
    level: 4,
    color: "hsl(0, 100%, 50%)",
    collected: false
});
powerups.push({
    x: 1920*2.5+825,
    y: 675,
    level: 4,
    effect: "",
    color: "hsl(0, 100%, 50%)",
    collected: false
});
lavas.push({
    leftX: 1920*2.5+825,
    rightX: 1920*2.5+875,
    topY: 825,
    bottomY: 875,
    level: 4
});
powerups.push({
    x: 1920*2.5+1325,
    y: 825,
    effect: "",
    level: 4,
    color: "hsl(0, 100%, 50%)",
    collected: false
});
lavas.push({
    leftX: 1920*2.5+1325,
    rightX: 1920*2.5+1375,
    topY: 675,
    bottomY: 725,
    level: 4
});
powerups.push({
    x: 1920*2.5+1825,
    y: 825,
    effect: "",
    level: 4,
    color: "hsl(0, 100%, 50%)",
    collected: false
});
lavas.push({
    leftX: 1920*2.5+1825,
    rightX: 1920*2.5+1875,
    topY: 675,
    bottomY: 725,
    level: 4
});
powerups.push({
    x: 1920*2.5+2325,
    y: 675,
    effect: "",
    level: 4,
    color: "hsl(0, 100%, 50%)",
    collected: false
});
lavas.push({
    leftX: 1920*2.5+2325,
    rightX: 1920*2.5+2375,
    topY: 825,
    bottomY: 875,
    level: 4
});
lavas.push({
    leftX: 1920*2.5+2825,
    rightX: 1920*2.5+2875,
    topY: 675,
    bottomY: 725,
    level: 4,
    collected: false
});
lavas.push({
    leftX: 1920*2.5+2825,
    rightX: 1920*2.5+2875,
    topY: 825,
    bottomY: 875,
    level: 4
});
powerups.push({
    x: 1920*2.5+3325,
    y: 825,
    effect: "",
    level: 4,
    color: "hsl(0, 100%, 50%)",
    collected: false
});
lavas.push({
    leftX: 1920*2.5+3325,
    rightX: 1920*2.5+3375,
    topY: 675,
    bottomY: 725,
    level: 4
});
powerups.push({
    x: 1920*2.5+3825,
    y: 825,
    effect: "",
    level: 4,
    color: "hsl(0, 100%, 50%)",
    collected: false
});
lavas.push({
    leftX: 1920*2.5+3825,
    rightX: 1920*2.5+3875,
    topY: 675,
    bottomY: 725,
    level: 4
});
platforms.push({
    leftX: 1920*5+100,
    topY: 620,
    rightX: 1920*5 + 190,
    bottomY: 930,
    level: 4,
    color: "white"
});
powerups.push({
    x: 1920*5+120,
    y: 560,
    effect: "inverse",
    level: 4,
    color: "hsl(240, 100%, 50%)",
    collected: false
});
platforms.push({
    leftX: 1920*5+1000,
    topY: 780,
    rightX: 1920*7,
    bottomY: 930,
    level: 4,
    color: "white"
});
platforms.push({
    leftX: 1920*6-30,
    topY: -100,
    rightX: 1920*6,
    bottomY: 690,
    level: 4,
    color: "white"
});
checkpoints.push({
    x:1920*5+1000,
    y:580,
    reached: false,
    level: 4
});
platforms.push({
    leftX: 1920*6-150,
    topY: 420,
    rightX: 1920*6,
    bottomY: 450,
    level: 4,
    color: "white"
});
powerups.push({
    x: 1920*6-115,
    y: 360,
    effect: "",
    color: "hsl(120, 0%, 5%)",
    level: 4,
    collected: false
})
platforms.push({
    leftX: 1920*5.5-75,
    topY: 150,
    rightX: 1920*5.5+25,
    bottomY: 180,
    level: 4,
    color: "white"
});
platforms.push({
    leftX: 1920*5+25,
    topY: 200,
    rightX: 1920*5+125,
    bottomY: 230,
    level: 4,
    color: "white"
});
platforms.push({
    leftX: 1920*4.5-245,
    topY: 300,
    rightX: 1920*4.5-145,
    bottomY: 330,
    level: 4,
    color: "white"
});
platforms.push({
    leftX: 1920*4.5-1175,
    topY: 360,
    rightX: 1920*4.5-1075,
    bottomY: 390,
    level: 4,
    color: "white"
});
platforms.push({
    leftX: 1920*4.5-2265,
    topY: 360,
    rightX: 1920*4.5-2165,
    bottomY: 390,
    level: 4,
    color: "white"
});
platforms.push({
    leftX: 1920*4.5-3350,
    topY: 350,
    rightX: 1920*4.5-3250,
    bottomY: 380,
    level: 4,
    color: "white"
});
platforms.push({
    leftX: 1920*2.5,
    topY: 330,
    rightX: 1920*2.5+100,
    bottomY: 360,
    level: 4,
    color: "white"
});
platforms.push({
    leftX: 1920*2,
    topY: 230,
    rightX: 1920*2+100,
    bottomY: 260,
    level: 4,
    color: "white"
});
platforms.push({
    leftX: 1920*1.5+100,
    topY: 230,
    rightX: 1920*1.5+200,
    bottomY: 260,
    level: 4,
    color: "white"
})
platforms.push({
    leftX: 1920,
    topY: 230,
    rightX: 1920+100,
    bottomY: 260,
    level: 4,
    color: "white"
})
platforms.push({
    leftX: 910,
    topY: 370,
    rightX: 1010,
    bottomY: 400,
    level: 4,
    color: "white"
})
checkpoints.push({
	x: 910,
    y: 170,
    level: 4,
    reached: false
})
powerups.push({
    x: 935,
    y: 310,
    effect: "shorten",
    color: "hsl(120, 100%, 40%)",
    level: 4,
    collected: false
})


platforms.push({
    leftX: 0,
    topY: 780,
    rightX: 1920,
    bottomY: 930,
    level: finalLevel,
    color: "white"
});
platforms.push({
    leftX: 0,
    topY: 0,
    rightX: 1920,
    bottomY: 150,
    level: finalLevel,
    color: "white"
});
powerups.push({
    x: 1920*0.5-175,
    y:705,
    effect: "",
    level: finalLevel,
    color: "hsl(0, 100%, 50%)",
    collected: false
});
powerups.push({
    x: 25,
    y:175,
    effect: "",
    level: finalLevel,
    color: "hsl(0, 100%, 50%)",
    collected: false
});
powerups.push({
    x: 1920-75,
    y:175,
    effect: "",
    level: finalLevel,
    color: "hsl(0, 100%, 50%)",
    collected: false
});
powerups.push({
    x: 1920*0.5-100,
    y:705,
    effect: "upsideDown",
    level: finalLevel,
    color: "hsl(20, 100%, 50%)",
    collected: false
});
powerups.push({
    x: 1920*0.5-250,
    y:705,
    effect: "upsideDown",
    level: finalLevel,
    color: "hsl(20, 100%, 50%)",
    collected: false
});
powerups.push({
    x: 1920*0.5+200,
    y:705,
    effect: "upsideDown",
    level: finalLevel,
    color: "hsl(20, 100%, 50%)",
    collected: false
});
powerups.push({
    x: 1920*0.5-25,
    y:705,
    effect: "lengthen",
    level: finalLevel,
    color: "hsl(70, 100%, 50%)",
    collected: false
});
powerups.push({
    x: 1920*0.5+50,
    y:705,
    effect: "inverse",
    level: finalLevel,
    color: "hsl(240, 100%, 50%)",
    collected: false
});
powerups.push({
    x: 1920*0.5+125,
    y:705,
    effect: "doubleJump",
    level: finalLevel,
    color: "hsl(270, 100%, 50%)",
    collected: false
});
texts.push({
    x: 1920*0.5,
    y:465-120,
    words: "You win!",
    level: finalLevel
});
texts.push({
    x: 1920*0.5,
    y:465-40,
    words: "Reach the portal to restart",
    level: finalLevel
});
texts.push({
    x: 1920*0.5,
    y:465+40,
    words: "Time: ",
    level: finalLevel
});
texts.push({
    x: 1920*0.5,
    y:465+120,
    words: "Deaths: ",
    level: finalLevel
});


doorLocations.push({
    x:12270,
    y:580
});
doorLocations.push({
    x:1920*9-200,
    y:580
});
doorLocations.push({
    x:1920*11-300,
    y:580
});
doorLocations.push({
    x:1920*7-200,
    y:580
});
doorLocations.push({
    x:1920-100,
    y:580
});
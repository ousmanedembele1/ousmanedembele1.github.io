//Starting platform
platforms.push({
    leftX: 0,
    topY: 780,
    rightX: 1920*0.5,
    bottomY: 930,
    level: 4
    
});

//3 small platforms
platforms.push({
    leftX: 1920*0.5+550,
    topY: 920,
    rightX: 1920*0.5+590,
    bottomY: 930,
    level: 4
    
});
platforms.push({
    leftX: 1920+610,
    topY: 920,
    rightX: 1920+650,
    bottomY: 930,
    level: 4
    
});
platforms.push({
    leftX: 1920*1.5+730,
    topY: 870,
    rightX: 1920*1.5+770,
    bottomY: 880,
    level: 4
    
});

//Which ones are safe base
platforms.push({
    leftX: 1920*2.5,
    topY: 920,
    rightX: 1920*4.5,
    bottomY: 930,
    level: 4
    
});

//WOAS box top with lava
platforms.push({
    leftX: 1920*2.5+200,
    topY: 420,
    rightX: 1920*4.5,
    bottomY: 430,
    level: 4
});
lavas.push({
    leftX: 1920*2.5+200,
    topY: 410,
    rightX: 1920*4.5,
    bottomY: 421,
    level: 4
});

//WOAS box bottom
fakePlatforms.push({
    leftX: 1920*2.5+200,
    topY: 620,
    rightX: 1920*4.5,
    bottomY: 630,
    level: 4
})
platforms.push({
    leftX: 1920*2.5+200,
    topY: 620,
    rightX: 1920*2.5+2520,
    bottomY: 630,
    level: 4
});
platforms.push({
    leftX: 1920*2.5+2680,
    topY: 620,
    rightX: 1920*2.5+3020,
    bottomY: 630,
    level: 4
    
});
platforms.push({
    leftX: 1920*2.5+3180,
    topY: 620,
    rightX: 1920*4.5,
    bottomY: 630,
    level: 4
    
});
//WOAS box sides
platforms.push({
    leftX: 1920*2.5+200,
    topY: 420,
    rightX: 1920*2.5+210,
    bottomY: 630,
    level: 4
    
});
platforms.push({
    leftX: 1920*4.5-10,
    topY: 420,
    rightX: 1920*4.5,
    bottomY: 630,
    level: 4
    
});
//Which Ones Are Safe? #1-8

//Safe-Unsafe #1
lavas.push({
    leftX: 1920*2.5+325,
    rightX: 1920*2.5+375,
    topY: 675,
    bottomY: 725,
    level: 4
});
platforms.push({
    leftX: 1920*2.5+200,
    topY: 770,
    rightX: 1920*2.5 + 500,
    bottomY: 780,
    level: 4
    
});
powerups.push({
    x: 1920*2.5+325,
    y: 825,
    effect: "",
    level: 4,
    collected: false
});

//Safe-Unsafe #2
powerups.push({
    x: 1920*2.5+825,
    y: 675,
    level: 4,
    effect: "",
    collected: false
});
platforms.push({
    leftX: 1920*2.5+700,
    topY: 770,
    rightX: 1920*2.5 + 1000,
    bottomY: 780,
    level: 4
});
lavas.push({
    leftX: 1920*2.5+825,
    rightX: 1920*2.5+875,
    topY: 825,
    bottomY: 875,
    level: 4
});

//Safe-Unsafe #3
lavas.push({
    leftX: 1920*2.5+1325,
    rightX: 1920*2.5+1375,
    topY: 675,
    bottomY: 725,
    level: 4
});
platforms.push({
    leftX: 1920*2.5+1200,
    topY: 770,
    rightX: 1920*2.5 + 1500,
    bottomY: 780,
    level: 4
    
});
powerups.push({
    x: 1920*2.5+1325,
    y: 825,
    effect: "",
    level: 4,
    collected: false
});

//Safe-Unsafe #4
lavas.push({
    leftX: 1920*2.5+1825,
    rightX: 1920*2.5+1875,
    topY: 675,
    bottomY: 725,
    level: 4
});
platforms.push({
    leftX: 1920*2.5+1700,
    topY: 770,
    rightX: 1920*2.5 + 2000,
    bottomY: 780,
    level: 4
});
powerups.push({
    x: 1920*2.5+1825,
    y: 825,
    effect: "",
    level: 4,
    collected: false
});

//Safe-Unsafe #5
powerups.push({
    x: 1920*2.5+2325,
    y: 675,
    effect: "",
    level: 4,
    collected: false
});
platforms.push({
    leftX: 1920*2.5+2200,
    topY: 770,
    rightX: 1920*2.5 + 2500,
    bottomY: 780,
    level: 4
});
lavas.push({
    leftX: 1920*2.5+2325,
    rightX: 1920*2.5+2375,
    topY: 825,
    bottomY: 875,
    level: 4
});

//Safe-Unsafe #6
lavas.push({
    leftX: 1920*2.5+2825,
    rightX: 1920*2.5+2875,
    topY: 675,
    bottomY: 725,
    level: 4,
    collected: false
});
platforms.push({
    leftX: 1920*2.5+2700,
    topY: 770,
    rightX: 1920*2.5 + 3000,
    bottomY: 780,
    level: 4
});
lavas.push({
    leftX: 1920*2.5+2825,
    rightX: 1920*2.5+2875,
    topY: 825,
    bottomY: 875,
    level: 4
});

//Safe-Unsafe #7, switches daily
platforms.push({
    leftX: 1920*2.5+3200,
    topY: 770,
    rightX: 1920*2.5 + 3500,
    bottomY: 780,
    level: 4
});

let day = new Date().getDate()
if (day % 2 === 1){
	lavas.push({
        leftX: 1920*2.5+3325,
        rightX: 1920*2.5+3375,
        topY: 675,
        bottomY: 725,
        level: 4
    });
    powerups.push({
        x: 1920*2.5+3325,
        y: 825,
        effect: "",
        level: 4,
        collected: false
    });
} else {
	lavas.push({
        leftX: 1920*2.5+3325,
        rightX: 1920*2.5+3375,
        topY: 825,
        bottomY: 875,
        level: 4
    });
    powerups.push({
        x: 1920*2.5+3325,
        y: 675,
        effect: "",
        level: 4,
        collected: false
    });
}


//Safe-Unsafe #8
lavas.push({
    leftX: 1920*2.5+3825,
    rightX: 1920*2.5+3875,
    topY: 675,
    bottomY: 725,
    level: 4
});
platforms.push({
    leftX: 1920*2.5+3700,
    topY: 770,
    rightX: 1920*4.5 + 200,
    bottomY: 780,
    level: 4
});
powerups.push({
    x: 1920*2.5+3825,
    y: 825,
    effect: "",
    level: 4,
    collected: false
});

//Extended platform
hiddenPlatforms.push({
    leftX: 1920*4.5-1,
    topY: 920,
    rightX: 1920*4.5 + 250,
    bottomY: 930,
    level: 4
});

//Platform midair switch
platforms.push({
    leftX: 1920*5+100,
    topY: 620,
    rightX: 1920*5 + 190,
    bottomY: 930,
    level: 4
    
});
powerups.push({
    x: 1920*5+120,
    y: 560,
    effect: "inverse",
    level: 4,
    collected: false
});


//Rest of level
platforms.push({
    leftX: 1920*5+1000,
    topY: 780,
    rightX: 1920*7,
    bottomY: 930,
    level: 4
    
});
platforms.push({
    leftX: 1920*6-30,
    topY: -100,
    rightX: 1920*6,
    bottomY: 690,
    level: 4
    
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
    level: 4 
});
powerups.push({
    x: 1920*6+595,
    y: 705,
    effect: "upsideDown",
    level: 4,
    collected: false
})
powerups.push({
    x: 1920*6+595,
    y: 630,
    effect: "upsideDown",
    level: 4,
    collected: false
})
powerups.push({
    x: 1920*6+595,
    y: 555,
    effect: "upsideDown",
    level: 4,
    collected: false
})
powerups.push({
    x: 1920*6+595,
    y: 480,
    effect: "upsideDown",
    level: 4,
    collected: false
})
lavas.push({
    leftX: 1920*6+1275,
    topY: 630,
    rightX: 1920*6+1325,
    bottomY: 680,
    level: 4
})
lavas.push({
    leftX: 1920*6+1275,
    topY: 555,
    rightX: 1920*6+1325,
    bottomY: 605,
    level: 4
})
lavas.push({
    leftX: 1920*6+1275,
    topY: 480,
    rightX: 1920*6+1325,
    bottomY: 530,
    level: 4
})
lavas.push({
    leftX: 1920*6+1275,
    topY: 705,
    rightX: 1920*6+1325,
    bottomY: 755,
    level: 4
})
powerups.push({
    x: 1920*6+1275,
    y: 405,
    effect: "upsideDown",
    level: 4,
    collected: false
})
platforms.push({
    leftX: 1920*6+1500,
    topY: 0,
    rightX: 1920*7,
    bottomY: 50,
    level: 4 
});
powerups.push({
    x: 1920*7-175,
    y: 490,
    effect: "",
    level: 4,
    collected: false
})
platforms.push({
    leftX: 1920*6+1500,
    topY: 220,
    rightX: 1920*6+1550,
    bottomY: 930,
    level: 4 
});
powerups.push({
    x: 1920*6-115,
    y: 360,
    effect: "hidden",
    level: 4,
    collected: false
})
platforms.push({
    leftX: 1920*5.5-75,
    topY: 150,
    rightX: 1920*5.5+25,
    bottomY: 180,
    level: 4
    
});
platforms.push({
    leftX: 1920*5+25,
    topY: 200,
    rightX: 1920*5+125,
    bottomY: 230,
    level: 4
    
});
platforms.push({
    leftX: 1920*4.5-245,
    topY: 300,
    rightX: 1920*4.5-145,
    bottomY: 330,
    level: 4
    
});
platforms.push({
    leftX: 1920*4.5-1175,
    topY: 360,
    rightX: 1920*4.5-1075,
    bottomY: 390,
    level: 4
    
});
platforms.push({
    leftX: 1920*4.5-2265,
    topY: 360,
    rightX: 1920*4.5-2165,
    bottomY: 390,
    level: 4
    
});
platforms.push({
    leftX: 1920*4.5-3350,
    topY: 350,
    rightX: 1920*4.5-3250,
    bottomY: 380,
    level: 4
    
});
platforms.push({
    leftX: 1920*2.5,
    topY: 330,
    rightX: 1920*2.5+100,
    bottomY: 360,
    level: 4
    
});
platforms.push({
    leftX: 1920*2,
    topY: 230,
    rightX: 1920*2+100,
    bottomY: 260,
    level: 4
    
});
platforms.push({
    leftX: 1920*1.5+100,
    topY: 230,
    rightX: 1920*1.5+200,
    bottomY: 260,
    level: 4
    
})
platforms.push({
    leftX: 1920,
    topY: 230,
    rightX: 1920+100,
    bottomY: 260,
    level: 4
    
})
platforms.push({
    leftX: 910,
    topY: 370,
    rightX: 1010,
    bottomY: 400,
    level: 4
    
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
    level: 4,
    collected: false
})

//Text
texts.push({
    x: 1920*0.5,
    y:100,
    words: "This level is hard. Good luck!",
    level: 4
});
texts.push({
    x: 1920*3.5+100,
    y:540,
    words: "Which ones are safe? Which ones are safe? Which ones are safe? Which ones are safe?",
    level: 4
});

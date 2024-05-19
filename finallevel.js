let finalLevel =  5;
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
    x: 1920*0.5-25,
    y:635,
    effect: "shorten",
    level: finalLevel,
    color: "hsl(120, 100%, 40%)",
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
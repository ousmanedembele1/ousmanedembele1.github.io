let finalLevel =  5;
platforms.push({
    leftX: 0,
    topY: 780,
    rightX: 1920,
    bottomY: 930,
    level: finalLevel
});
platforms.push({
    leftX: 0,
    topY: 0,
    rightX: 1920,
    bottomY: 150,
    level: finalLevel
});
powerups.push({
    x: 1920*0.5-175,
    y:705,
    effect: "",
    level: finalLevel,
    collected: false
});
powerups.push({
    x: 25,
    y:175,
    effect: "",
    level: finalLevel,
    collected: false
});
powerups.push({
    x: 1920-75,
    y:175,
    effect: "",
    level: finalLevel,
    collected: false
});
powerups.push({
    x: 1920*0.5-100,
    y:705,
    effect: "upsideDown",
    level: finalLevel,
    collected: false
});
powerups.push({
    x: 1920*0.5-250,
    y:705,
    effect: "upsideDown",
    level: finalLevel,
    collected: false
});
powerups.push({
    x: 1920*0.5+200,
    y:705,
    effect: "upsideDown",
    level: finalLevel,
    collected: false
});
powerups.push({
    x: 1920*0.5-25,
    y:705,
    effect: "lengthen",
    level: finalLevel,
    collected: false
});
powerups.push({
    x: 1920*0.5-325,
    y:705,
    effect: "shorten",
    level: finalLevel,
    collected: false
});
powerups.push({
    x: 1920*0.5+275,
    y:705,
    effect: "hidden",
    level: finalLevel,
    collected: false
});
powerups.push({
    x: 1920*0.5+50,
    y:705,
    effect: "inverse",
    level: finalLevel,
    collected: false
});
powerups.push({
    x: 1920*0.5+125,
    y:705,
    effect: "doubleJump",
    level: finalLevel,
    collected: false
});
texts.push({
    x: 1920*0.5,
    y:465-160,
    words: "You win!",
    level: finalLevel
});
texts.push({
    x: 1920*0.5,
    y:465-80,
    words: "Reach the portal to restart",
    level: finalLevel
});
texts.push({
    x: 1920*0.5,
    y:465,
    words: "Time: , Deaths: ",
    level: finalLevel
});
texts.push({
    x: 1920*0.5,
    y:465+80,
    words: "Index: ",
    level: finalLevel
});
texts.push({
    x: 1920*0.5,
    y:465+160,
    words: "Personal best index: ",
    level: finalLevel
});

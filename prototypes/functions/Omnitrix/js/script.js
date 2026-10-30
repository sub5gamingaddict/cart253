/**
 * Unwinnable fight
 * Wassim
 * 
 * you're in a fight against Velgax, and your chances of winning are close to none.
 */

"use strict";

let intro;
let alien;
let transformationsnd;

/**
 * aliens variable.
 */
let diamondhead;
let fourarms;
let xlr8;
let alienx;
let humungousaur;
let ghostfreak;
let echo;
let heatblast;


async function preload() {
    intro = await loadImage("assets/images/intro.png");
    diamondhead = await loadImage("assets/images/diamondhead1.png");
    echo = await loadImage("assets/images/echo1.png");
    fourarms = await loadImage("assets/images/fourarms1.png");
    ghostfreak = await loadImage("assets/images/ghostfreak1.png");
    humungousaur = await loadImage("assets/images/humungousaur1.png");
    xlr8 = await loadImage("assets/images/xlr81.png");
    alienx = await loadImage("assets/images/alienx1.png");
   heatblast = await loadImage("assets/images/heatblast1.png");
   transformationsnd = await loadSound("assets/sounds/transformation.mp3");

}
/**
 * sets up canvas
*/
async function setup() {
    createCanvas(800, 800)
    await preload();
}
/**
 * draws aliens.
*/
function draw() {
    background(255);

     if (!intro) return;

    if(alien) {
        image(alien, 150, 50, 500, 500)
    }
    else {
        image(intro, 150, 50, 500, 500)
    }

}

/**
 * pulls alien when the mouse is pressed.
 * plays transformation sound when mouse is pressed
*/
function mousePressed() {
    if (!alien){
     alien = pull();
     transformationsnd.play();
    }
}

/**
 * displays odds for every single alien.
*/
function pull() {
const p = random();

if (p < 0.01) {
    return alienx;
}

else if (p < 0.10) {
    return ghostfreak
    
}

else if (p < 0.15) {
    return xlr8
    
}

else if (p < 0.20) {
    return heatblast
    
}

else if (p < 0.30) {
    return echo
    
}

else if (p < 0.40) {
    return fourarms
    
}

else if (p < 0.50) {
    return diamondhead
}

else {
    return humungousaur
}

}
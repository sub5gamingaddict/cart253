/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let loaded = {};
let current = null;
let buffer = "";
let lastKeyTime = 0;
const AFK = 600;

const members = {
    "1": { img: "assets/images/Xemnas.png", snd: "assets/sounds/xemnas.mp3" },
    "2": { img: "assets/images/Xigbar.png", snd: "assets/sounds/Xigbar.mp3" },
    "3": { img: "assets/images/Xaldin.png", snd: "assets/sounds/Xaldin2.mp3" },
    
    
}

function preload() {
    for (let code in members) {
        loaded[code] = {
            img: loadImage(members[code].img),
            snd: loadSound(members[code].snd),
        }
    }
}
/**
 * sets up canvas.
*/
function setup() {
    createCanvas(800, 800);
    imageMode(CENTER);

}

/**
 * added background color and characters.
*/
function draw() {
    background(0)
    if (current) image(current.img, width / 2, height / 2, 800, 800);
    if (buffer && millis() - lastKeyTime > AFK) {
        trigger(buffer);
    buffer ="";
    }

}

function keyTyped() {
    if (key >= "0" && key <= "9") {
        buffer += key;
        lastKeyTime = millis();
    }
}

function trigger(code) {
    const entry = loaded[code]
    if (!entry) return;
    if (current && current.snd.isPlaying()) current.snd.stop();
    current = entry;
    current.snd.play();
}
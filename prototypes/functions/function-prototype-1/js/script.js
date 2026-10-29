/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";


const AFK = 600;

const members = {
    "1": { img: "assets/images/Xemnas.png", snd: "assets/sounds/Xemnas.mp3" },
    "2": { img: "assets/images/Xigbar.png", snd: "assets/sounds/Xigbar.mp3" },
    "3": { img: "assets/images/Xaldin.png", snd: "assets/sounds/Xaldin.mp3" },
    
    
}

function preload() {
    for (let code in entries) {
        loaded[code] = {
            img: LoadImage(members[code].img),
            snd: LoadImage(members[code].snd),
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
    if (current) image(current.img, width / 2, height / 2);

}
/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let myFont;

/**
 * sets up canvas
*/
async function setup() {
    createCanvas(1080, 1080)
    myFont = await loadFont("fonts/baltime.ttf")
    textFont(myFont);
    textAlign(CENTER, CENTER)

}


function draw(){
    background(0);
    warning();
    message();
    message2();
}


/**
 * sets up a warning text.
*/
function warning() {
    fill(255);
    textSize(150);
    text("Warning!", 540, 400);

}

function message() {
    fill(255);
    textSize(30);
    text("This game contains blood, frightening imagery, and a sudden jumpscare with loud sound.", 540, 540 )
}

function message2() {
    fill(255);
    textSize(30);
    text("Player discretion is advised.", 540, 600 )
}
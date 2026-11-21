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
    warning();
}
/**
 * sets up a warning text.
*/
function warning() {
    background(0);
    fill(255);
    textSize(150);
    text("Warning!", 540, 400);

}
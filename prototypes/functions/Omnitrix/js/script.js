/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let omnitrix;
let alien;

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
    omnitrix = await loadImage("assets/images/omnitrix.png");
    diamondhead = await loadImage("assets/images/diamondhead.webp");
    echo = await loadImage("assets/images/echo.webp");
    fourarms = await loadImage("assets/images/four_arms.webp");
    ghostfreak = await loadImage("assets/images/ghostfreak.png");
    humungousaur = await loadImage("assets/images/humungousaur.webp");
    xlr8 = await loadImage("assets/images/xlr8.webp");
    alienx = await loadImage("assets/images/alien_x.webp");
}
/**
 * sets up canvas
*/
async function setup() {
    createCanvas(800, 800)
    await preload();
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(255);

    if(!omnitrix) return;

    if (alien) {
        image(alien, 150, 50, 500, 500);
    }
    else{
        image(omnitrix, 150, 50, 500, 500);
    }

}
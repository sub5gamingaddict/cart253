/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let yarn;

async function preload() {

     yarn = await loadImage("assets/images/ball.png");
}

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
async function setup() {
    createCanvas(1080, 1080)
    imageMode(CENTER);
    cursor("assets/images/cat2.png", 20, 20);
    await preload();

}



/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0);
    image(yarn, 540, 540, 200, 200);

}
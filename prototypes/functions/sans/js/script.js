/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let sansImg;

async function preload() {
    sansImg = loadImage("assets/images/sans.png");
}

/**
 * sets up canvas.
*/
async function setup() {
    createCanvas(800, 800);

    background(0);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

}

/**
 * sans appears when the user clicks.
*/
function mousePressed() {
    sans(mouseX, mouseY);
}

function sans(x, y) {
    push();
    imageMode(CENTER);
    image(sansImg, x, y, 160, 160);
    pop();
}
/**
 * Penguin Prototype
 * Wassim
 * 
 * Cool penguin
 */

"use strict";

/**
 * Creates the canvas
*/
function setup() {
    createCanvas(400, 400);
}


/**
 * Draws sky
*/
function draw() {
    background("#9fd1ff");


     //draws a land
    push();
    fill("#699ee2");
    square(0, 250, 400);
    pop();
    noStroke();
}
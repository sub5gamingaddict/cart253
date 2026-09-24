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

    //draws left feet
    push();
    fill("#f3a42e");
    triangle(300, 300, 265, 300, 250, 275);
    pop();
    noStroke();

     //draws penguin body
    push();
    fill("#252525");
    ellipse(200, 200, 200, 250);
    pop();
    noStroke();
}
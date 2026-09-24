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

    //draws right feet
    push();
    fill("#f3a42e");
    triangle(100, 300, 135, 300, 150, 275);
    pop();
    noStroke();

     //draws penguin body
    push();
    fill("#252525");
    ellipse(200, 200, 200, 250);
    pop();
    noStroke();

    //draws hair
    push();
    fill("#252525");
    triangle(200, 25, 150, 250, 250, 250);
    pop();
    noStroke();

    //draws triangle on top of penguin body
    push();
    fill("#eeeeee");
    triangle(200, 325, 150, 250, 250, 250);
    pop();
    noStroke();

    //draws left eye
    push();
    fill("#f8f8f8");
    ellipse(165, 150, 50, 50);
    pop();
    noStroke();

     //draws left pupil
    push();
    fill("#0e0d0d");
    ellipse(165, 150, 25, 25);
    pop();
    noStroke();

    //draws right eye
    push();
    fill("#f8f8f8");
    ellipse(235, 150, 50, 50);
    pop();
    noStroke();

    //draws right pupil
    push();
    fill("#0e0d0d");
    ellipse(235, 150, 25, 25);
    pop();
    noStroke();

    //draws beak
    push();
    fill("#f3a42e");
    triangle(200, 175, 180, 200, 220, 200);
    pop();
    noStroke();
}
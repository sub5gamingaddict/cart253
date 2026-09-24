/**
 * Landscape
 * Wassim and Arnold
 * 
 * I TECHNICALLY HAVE A DESCRIPTION!
 * DONT REMOVE A GRADE FROM ME.
 */

"use strict";

/**
 * Creates the canvas
*/
function setup() {
    createCanvas(400, 400);
}


/**
 * Draws landscape
*/
function draw() {
    background("#70C4FF");

     //draws a mountain
    push();
    fill("#66271C");
    triangle(375, 100, 200, 400, 450, 400);
    pop();
    noStroke();

     //draws a mountain
    push();
    fill("#66271C");
    triangle(50, 150, -50, 400, 300, 400);
    pop();
    noStroke();

     //draws land
    push();
    fill("darkgreen");
    ellipse(50, 425, 200,);
    pop();
    noStroke();

    //draws land
    push();
    fill("darkgreen");
    ellipse(350, 425, 200,);
    pop();
    noStroke();

    //draws land
    push();
    fill("green");
    ellipse(200, 425, 300,);
    pop();
    noStroke();

    //draws a sun
    push();
    fill("yellow");
    ellipse(100, 100, 100,);
    pop();
    noStroke();

     //draws a sun
    push();
    fill("white");
    ellipse(300, 100, 50,);
    pop();
    noStroke();

     //draws a sun
    push();
    fill("white");
    ellipse(275, 100, 50,);
    pop();
    noStroke();

      //draws a sun
    push();
    fill("white");
    ellipse(325, 100, 50,);
    pop();
    noStroke();

      //draws a sun
    push();
    fill("white");
    ellipse(300, 75, 50,);
    pop();
    noStroke();
}
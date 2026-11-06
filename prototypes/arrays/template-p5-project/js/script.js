/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

const circle = {
    diameter: 20,
    maxTrailLenght: 100,
    trail: []
}

function preload() {
    images.push(loadImage("assets/images/1.png"))
    images.push(loadImage("assets/images/2.png"))
    images.push(loadImage("assets/images/3.png"))
    images.push(loadImage("assets/images/4.png"))
    images.push(loadImage("assets/images/5.png"))
    images.push(loadImage("assets/images/6.png"))
    images.push(loadImage("assets/images/7.png"))
    images.push(loadImage("assets/images/8.png"))

}

/**
 * creates canvas.
*/
function setup() {

    createCanvas (800, 800)
    noCursor();
    imageMode(CENTER);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0);

    circle.x = mouseX;
    circle.y = mouseY;

    push();
    noStroke();
    fill(255);
    ellipse(circle.x, circle.y, circle.diameter);
    pop();

}
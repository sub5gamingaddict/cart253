/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * Creates the canvas
*/
function setup() {
    createCanvas(600, 600);
}


/**
 * Draws sky
*/
function draw() {
    background("#200e22");

 //draws land
    push();
    fill("#10291d");
    ellipse(300, 800, 800,);
    pop();
    noStroke();

    //draws moon
    push();
    fill("#edf1b1");
    ellipse(300, 200, 300, 300);
    pop();
    noStroke();

    //draws moon cutout
    push();
    fill("#200e22");
    ellipse(400, 200, 300, 300);
    pop();
    noStroke();

    //draws nose
    push();
    fill("#edf1b1");
    triangle(240, 175, 240, 250, 400, 200);
    pop();
    noStroke();

     //split eye in half
    push();
    fill("#fffdfd");
    arc(215, 150, 80, 80, 0, PI + QUARTER_PI, CHORD); 
    pop();
    noStroke();

    //draws pupil
    push();
    fill("#0e0d0d");
    ellipse(210, 150, 25, 25);
    pop();
    noStroke();

    
    
}
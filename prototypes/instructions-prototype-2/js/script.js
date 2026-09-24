/**
 * Angry Moon
 * Wassim
 * 
 * That moon is REALLY angry.
 * 
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
    background("#fdd008");


 //draws land
    push();
    fill("#e62d15");
    ellipse(300, 800, 800,);
    pop();
    noStroke();

    //draws moon
    push();
    fill("#254cb8");
    ellipse(300, 200, 300, 300);
    pop();
    noStroke();

    //draws moon cutout
    push();
    fill("#fdd008");
    ellipse(400, 200, 300, 300);
    pop();
    noStroke();

    //draws nose
    push();
    fill("#254cb8");
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
    fill("#e62d15");
    ellipse(210, 150, 25, 25);
    pop();
    noStroke();

     //draws angry mouth
    push();

translate(215, 250);
rotate(PI);

fill("#fffdfd");
arc(0, -20, 90, 80, 0, PI + QUARTER_PI, CHORD);

pop();

noStroke();    
}
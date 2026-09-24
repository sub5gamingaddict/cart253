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
    fill("#e8ff93");
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
    fill("#e8ff93");
    triangle(240, 175, 240, 250, 400, 200);
    pop();
    noStroke();


}
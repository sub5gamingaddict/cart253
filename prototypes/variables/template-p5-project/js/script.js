/**
 * shape randomizer
 * Wassim Naim
 * 
 * This project generates random shapes on the canvas. try to generate until you get the same shape in all 6 slots!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
createCanvas(800, 250);
rectMode(CENTER);
background("purple");

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    fill("yellow");
    noStroke();
    circle(400, 125, 220);
    square(135, 125, 200);
    triangle(650, 30, 550, 225, 775, 225);
   



}
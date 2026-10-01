/**
 * shape randomizer
 * Wassim Naim
 * 
 * This project generates random shapes on the canvas. try to generate until you get the same shape in all 6 slots!
 */

"use strict";

let slot1 = "circle";
let slot2 = "square";
let slot3 = "triangle";
/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
createCanvas(800, 250);
rectMode(CENTER);
background("purple");

}

function draw() {
    drawShape(slot1, 100, 125, 200);
    drawShape(slot2, 400, 125, 200);
    drawShape(slot3, 700, 125, 200);
}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function drawShape(name, x, y, size) {

    fill("yellow");
    noStroke();

   if (name === "circle") {
    circle(400, 125, 220);
   
   } else if (name === "square") {
    square(135, 125, 200);
   
   }else if (name === "triangle") {
    triangle(650, 30, 550, 225, 775, 225);
   }
}


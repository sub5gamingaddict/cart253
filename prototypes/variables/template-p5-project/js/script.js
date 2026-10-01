/**
 * shape randomizer
 * Wassim Naim
 * 
 * This project generates random shapes on the canvas. try to generate until you get the same shape in all 6 slots!
 */

"use strict";

const shapes = ["circle", "square", "triangle"];

let slot1 = "circle";
let slot2 = "square";
let slot3 = "triangle";
/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
createCanvas(800, 250);
rectMode(CENTER);

}

function draw() {
    background("purple");

    drawShape(slot1, 110, 125, 200);
    drawShape(slot2, 400, 125, 200);
    drawShape(slot3, 690, 125, 200);
}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function drawShape(name, x, y, size) {

    fill("yellow");
    noStroke();

   if (name === "circle") {
    circle(x, y, size);
   
   } else if (name === "square") {
    square(x, y, size);
   
   }else if (name === "triangle") {
    triangle(x, y - size / 2, x - size / 2, y + size / 2, x + size / 2, y + size / 2);
   }
}

   function pickRandomShape() {
    return random(shapes);
}

function randomizeSlots() {
    slot1 = pickRandomShape();
    slot2 = pickRandomShape();
    slot3 = pickRandomShape();
}

function mousePressed() {
    randomizeSlots();
}

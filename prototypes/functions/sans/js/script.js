/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let sansImg;
let sansSnd;
let sansSize = 160;

async function preload() {
    sansImg = await loadImage("assets/images/sans.png");
    sansSnd = await loadSound("assets/sounds/sans.mp3");
}

/**
 * sets up canvas.
*/
async function setup() {
    createCanvas(800, 800);
    await preload();

    background(0);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

}

/**
 * sans appears when the user clicks.
*/
function mousePressed() {
    sans(mouseX, mouseY);
    sansSnd.play();
    sansSize += 20;
}

function sans(x, y) {
    push();
    imageMode(CENTER);
    image(sansImg, x, y, sansSize, sansSize);
    pop();
}
/**
 * Laughing Skeleton
 * Wassim Naim
 * 
 * Click the canvas and sans appears, click it more? he appears again!
 */

"use strict";

let sansImg;
let sansSnd;
let sansSize = 160;

/**
 * loads sans image and sound
*/
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
 * sans appears when the user clicks.
*/
function mousePressed() {
    sans(mouseX, mouseY);
    sansSnd.play();
    /**
    * makes sans grow bigger in each click.
    */
    sansSize += 20;
}

/**
 * draws sans.
*/
function sans(x, y) {
    push();
    imageMode(CENTER);
    image(sansImg, x, y, sansSize, sansSize);
    pop();
}
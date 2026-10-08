/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

const mover = {
    x: 150,
    y: 150,
    size: 15,
    fill: "#ffffff"
}

/**
 * Creates canvas
*/
function setup() {
    createCanvas(600, 600)

}


/**
 * Adds blue sky
*/
function draw() {
    background("#87ceeb");
    drawmover();

}

function drawmover() {
    push();
    fill(mover.fill);
    noStroke();
    ellipse(mover.x, mover.y, mover.size);
    pop();
}

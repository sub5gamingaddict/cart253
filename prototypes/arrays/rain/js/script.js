/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * creates canvas.
*/
function setup() {
    createCanvas(800, 800)

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("#21263b")

}

function drawRain(rain) {
    push();
    fill(rain.fill);
    noStroke();
    ellipse(rain.x, rain.y, rain.size);
    pop();
}
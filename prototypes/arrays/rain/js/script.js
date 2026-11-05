/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

const raindrops = []

function createRain() {
    return {
        x: random(0, 600),
        y: 0,
        size: random(7, 20),
        velocity:{
            x:0,
            y: random(2, 3)
        },
        fill: "#ffffff"
    }
}

/**
 * creates canvas.
*/
function setup() {
    createCanvas(800, 800)

    drawRain(rain);
    moveRain(rain);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("#21263b")

}

function moveRain(rain) {
    rain.x += rain.velocity.x;
    rain.y += rain.velocity.y;
}

function drawRain(rain) {
    push();
    fill(rain.fill);
    noStroke();
    ellipse(rain.x, rain.y, rain.size);
    pop();
}
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
        x: random(0, 800),
        y: -20,
        width: 2,
        height: random(10, 20),
        size: random(7, 20),
        velocity:{
            x:0,
            y: random(8, 12)
        },
        fill: "#ffffff"
    }
}

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

    for (let i = 0; i < 3; i++){
        raindrops.push(createRain()); 

    for (let i = raindrops.length - 1; i>= 0; i--) {
        
          const rain = raindrops[i];
    drawRain(rain);
    moveRain(rain);
    }
    }
}

function moveRain(rain) {
    rain.x += rain.velocity.x;
    rain.y += rain.velocity.y;
}

function drawRain(rain) {
    push();
    fill(rain.fill);
    noStroke();
    rect(rain.x, rain.y, rain.width, rain.height);
    pop();
}
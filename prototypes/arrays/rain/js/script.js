/**
 * Rain
 * Wassim Naim
 * 
 * It's raining!.....that's all.
 */

"use strict";

/**
 * array for rain.
*/
const raindrops = []

/**
 * creates rain.
*/
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
 * adds background color.
*/
function draw() {
    background("#21263b")

/**
* loop that spawns 3 drops per frame
*/
    for (let i = 0; i < 3; i++){
        raindrops.push(createRain()); 

/**
 * loop that draws every drop
*/
    for (let i = raindrops.length - 1; i>= 0; i--) {
        
          const rain = raindrops[i];
    drawRain(rain);
    moveRain(rain);
    }
    }
}

/**
 * rain movement
*/
function moveRain(rain) {
    rain.x += rain.velocity.x;
    rain.y += rain.velocity.y;
}

/**
 * draws rain.
*/
function drawRain(rain) {
    push();
    fill(rain.fill);
    noStroke();
    rect(rain.x, rain.y, rain.width, rain.height);
    pop();
}
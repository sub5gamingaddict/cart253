/**
 * Snow
 * Wassim Naim
 * 
 *winter simulator.
 */

"use strict";

/**
 * Snowflakes storage
 */
const snowflakes = [];

/**
 * THE snowflake
 */

function createSnow() {
    return {
        x: random(0, 600),
        y: 0,
        size: random(7,20),
        velocity:{
            x: 0,
            y: random(2, 3)
        },
        fill: "#ffffff"
    }
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
/**
 * makes snowflakes
 */
    if (random() < 0.1){
        snowflakes.push(createSnow( ));
    }

       for (const snow of snowflakes){
          moveSnow(snow);
          drawSnow(snow);
       }
  

}

/**
 * randomizes the velocity of the snow flakes.
 */

function moveSnow(snow){
    const chance = random();
    if (chance < 0.05) {
    snow.velocity.x= -0.5;
}
    else if (chance < 0.10){
        snow.velocity.x= 0.5;
    }
    else if (chance < 0.15) {
        snow.velocity.x= 0;
    }
    snow.x += snow.velocity.x;
    snow.y += snow.velocity.y;
}

/**
 * draws the snowflakes
 */

function drawSnow(snow) {
    push();
    fill(snow.fill);
    noStroke();
    ellipse(snow.x, snow.y, snow.size);
    pop();
}

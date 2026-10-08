/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

const snowflakes = [];

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

    if (random() < 0.1){
        snowflakes.push(createSnow( ));
    }
/*
    if (snow.y > 600){
        snowflakes.splice(i , 1);
    }
        */
       for (const snow of snowflakes){
          moveSnow(snow);
          drawSnow(snow);
       }
  

}

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

function drawSnow(snow) {
    push();
    fill(snow.fill);
    noStroke();
    ellipse(snow.x, snow.y, snow.size);
    pop();
}

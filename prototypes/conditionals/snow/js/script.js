/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

const snow = {
    x: 150,
    y: 150,
    size: 15,
    velocity:{
        x: 0,
        y: 3
    },
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
    moveSnow();
    drawSnow();

}

function moveSnow(){
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

function drawSnow() {
    push();
    fill(snow.fill);
    noStroke();
    ellipse(snow.x, snow.y, snow.size);
    pop();
}

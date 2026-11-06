/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

const circle = {
    size: 80,
    maxTrailLenght: 100,
    trail: []
}

let images = [];

function preload() {
    images.push(loadImage("assets/images/1.png"))
    images.push(loadImage("assets/images/2.png"))
    images.push(loadImage("assets/images/3.png"))
    images.push(loadImage("assets/images/4.png"))
    images.push(loadImage("assets/images/5.png"))
    images.push(loadImage("assets/images/6.png"))
    images.push(loadImage("assets/images/7.png"))
    images.push(loadImage("assets/images/8.png"))
    images.push(loadImage("assets/images/9.png"))

}

/**
 * creates canvas.
*/
function setup() {

    createCanvas (800, 800)
    noCursor();
    imageMode(CENTER);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0);

    circle.x = mouseX;
    circle.y = mouseY;

    for (let i = 0; i < circle.trail.length; i++){
        let soul = circle.trail[i];

     push();
    noStroke();
    fill(255);
    image(soul.img, soul.x, soul.y, circle.size, circle.size);
    pop();

    }

    circle.trail.push({
        x: circle.x,
        y: circle.y,
        img: random(images)
    })

    if (circle.trail.length >= circle.maxTrailLength){
        circle.trail.shift();
    }
}
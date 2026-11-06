/**
 * Soul
 * Wassim Naim
 * 
 * Your mouse draws a bunch of souls!
 */

"use strict";

const circle = {
    size: 80,
    maxTrailLenght: 100,
    trail: []
}

/**
 * an array that holds all the images.
*/
let images = [];

/**
 * loads the images.
*/
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

   /**
    * removes cursor.
   */
    noCursor();
    imageMode(CENTER);

}


/**
 * draws the image cursor thingy.
*/
function draw() {
    background(0);

    circle.x = mouseX;
    circle.y = mouseY;

    for (let i = 0; i < circle.trail.length; i++){
        let soul = circle.trail[i];

 /**
 * draws the image on the cursor
*/
     push();
    noStroke();
    fill(255);
    image(soul.img, soul.x, soul.y, circle.size, circle.size);
    pop();

    }

/**
 * adds image to the mouses current position.
*/
    circle.trail.push({
        x: circle.x,
        y: circle.y,
        img: random(images)
    })

/**
 * removes old trail when it reachs max length
*/
    if (circle.trail.length >= circle.maxTrailLength){
        circle.trail.shift();
    }
}
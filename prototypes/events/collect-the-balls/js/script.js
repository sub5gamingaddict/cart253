/**
 * Collect the balls.
 * Wassim Naim
 * 
 * cats like yarn...well that's atleast what i see in cartoons...i dont have a cat so idk.
 */

"use strict";

const yarn = {
    img: undefined,
    x: 540,
    y: 540,
    size: 200,
    meow: undefined,
}

async function preload() {

     yarn.img = await loadImage("assets/images/ball.png");
     yarn.meow = await loadSound("assets/sounds/meow.mp3")
}

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
async function setup() {
    createCanvas(1080, 1080)
    imageMode(CENTER);
    cursor("assets/images/cat2.png", 20, 20);
    await preload();

    resetYarn();

}

function resetYarn(){
    yarn.x = random(yarn.size/2, width - yarn.size/2)
    yarn.y = random(yarn.size/2, height - yarn.size/2)
}



/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0);
    image(yarn.img, yarn.x, yarn.y, yarn.size, yarn.size);

}

function mousePressed(){
    const d = dist(mouseX, mouseY, yarn.x, yarn.y);
    const clicked = (d < yarn.size/2)
    if(clicked) {
        yarn.meow.play();
        resetYarn();
    }
}
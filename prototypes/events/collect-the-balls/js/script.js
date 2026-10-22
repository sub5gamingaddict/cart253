/**
 * Collect the balls.
 * Wassim Naim
 * 
 * cats like yarn...well that's atleast what i see in cartoons...i dont have a cat so idk.
 */

"use strict";

/**
 * yarn ball properties
 */
const yarn = {
    img: undefined,
    x: 540,
    y: 540,
    size: 200,
    meow: undefined,
}

/**
 * loads the image and the sound
 */

async function preload() {

     yarn.img = await loadImage("assets/images/ball.png");
     yarn.meow = await loadSound("assets/sounds/meow.mp3")
}

/**
 * sets up canvas
*/
async function setup() {
    createCanvas(1080, 1080)
    imageMode(CENTER);
    cursor("assets/images/cat2.png", 20, 20);
    await preload();

    resetYarn();

}

/**
 * resets the yarn ball position
 */
function resetYarn(){
    yarn.x = random(yarn.size/2, width - yarn.size/2)
    yarn.y = random(yarn.size/2, height - yarn.size/2)
}



/**
 * displays the yarn ball
*/
function draw() {
    background(255);
    image(yarn.img, yarn.x, yarn.y, yarn.size, yarn.size);

}

/**
 * when the mouse is clicked, the ball changes locations
 */
function mousePressed(){
    /**
     * detects when the cursor overlaps with the yarn ball
     */
    const d = dist(mouseX, mouseY, yarn.x, yarn.y);
    const clicked = (d < yarn.size/2)
    if(clicked) {
        yarn.meow.play();
        resetYarn();
    }
}
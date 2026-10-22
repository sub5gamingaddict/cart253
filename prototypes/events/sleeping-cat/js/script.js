/**
 * don't wake up the cat.
 * Wassim Naim
 * 
 * cat is sleeping, do not disturb. if you disturb, cat angry.
 */

"use strict";

let sleepingCat;
let angryCat;
let angry = false;
let wakeUpTime = 0;

/**
 * loads up required assets
 */
async function preload() {

     sleepingCat = await loadImage("assets/images/sleepingcat.jpg");
     angryCat = await loadImage("assets/images/angrycat.jpg")
}

/**
 * sets up canvas
*/
async function setup() {

    createCanvas(1080, 1080);
    imageMode(CENTER);
    await preload();

}


/**
 * adds sleeping and angry cat images
*/
function draw() {

    background(0);

    if (angry) {
        image(angryCat, 540, 540, 1080, 1080);
    }
    else{
        image(sleepingCat, 540, 540, 1080, 1080);
    }
/**
 * if the cat is awake for 10 seconds, the cat goes back to sleep
 */
    if (angry) {
        if (millis() - wakeUpTime > 10000)
            angry = false;
    }

}

/**
 * pressing the mouse makes the angry image appear
 */
function mousePressed() {
    angry = true;
    wakeUpTime = millis();
}
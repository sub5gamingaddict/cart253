/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let sleepingCat;
let angryCat;

async function preload() {

     sleepingCat = await loadImage("assets/images/sleepingcat.jpg");
     angryCat = await loadImage("assets/images/angrycat.jpg")
}

/**
 * sets up canvas
*/
async function setup() {

    createCanvas(1080, 1080);
    await preload();

}


/**
 * adds sleeping cat image
*/
function draw() {

    if (!sleepingCat) return;
     if (angryCat) {
        image(angryCat, 150, 50, 500, 500);
    }
    

}
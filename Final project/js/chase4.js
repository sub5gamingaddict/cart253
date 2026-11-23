/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let madeline;
let thelady;

let madelineX = 540;
let madelineY = 540;
let theladyX = 800;
let theladyY = 800;
const speed = 5;

/**
 * sets up canvas
*/
async function setup() {
    createCanvas(1080, 1080)
    imageMode(CENTER)
    madeline = await loadImage ("assets/images/madeline.png");
    thelady = await loadImage ("assets/images/thelady.png");

}


function draw(){

    background(40);

    if (keyIsDown("w")) madelineY -= speed;
    if (keyIsDown("s")) madelineY += speed;
    if (keyIsDown("a")) madelineX -= speed;
    if (keyIsDown("d")) madelineX += speed;

    image(madeline, madelineX, madelineY, 300, 300);
    image(thelady, theladyX, theladyY, 300, 300);

}

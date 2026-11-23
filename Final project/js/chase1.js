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
let tvroom;

let madelineX = 200;
let madelineY = 900;
const speed = 5;

/**
 * sets up canvas
*/
async function setup() {
    createCanvas(1080, 1080)
    imageMode(CENTER)
    tvroom = await loadImage ("assets/images/tvroom.png");
    madeline = await loadImage ("assets/images/madeline.png");
    thelady = await loadImage ("assets/images/thelady.png");

}


function draw(){

    background(40);

    if (keyIsDown("w")) madelineY -= speed;
    if (keyIsDown("s")) madelineY += speed;
    if (keyIsDown("a")) madelineX -= speed;
    if (keyIsDown("d")) madelineX += speed;

    image(tvroom, 540, 540, 1080, 1080);
    image(madeline, madelineX, madelineY, 350, 350);
    image(thelady, 150, 200, 450, 450);

}

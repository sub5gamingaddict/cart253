/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

const yarn = {
    img: undefined,
    x: 540,
    y: 540,
    size: 200
}

async function preload() {

     yarn.img = await loadImage("assets/images/ball.png");
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
        resetYarn();
    }
}
/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let images= [];
let current = 0;

/**
 * sets up canvas
*/
async function setup() {
    createCanvas(1080, 1080)
    imageMode(CENTER)

    for (let i = 1; i <= 5; i++){
        images.push(await loadImage(`assets/images/drawing${i}.png`))
    }

}


function draw(){

    if (images.length > 0){
        image(images[current], width / 2, height / 2);
    }

}

function mousePressed() {
    current = (current + 1) % images.length;
}


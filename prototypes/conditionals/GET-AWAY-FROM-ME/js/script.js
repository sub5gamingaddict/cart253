/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let rarityImage

const rarity = {
    x: 300,
    y: 300,
    size: 70,
    speed: 3
}
/**
 * creates canvas
*/
async function setup() {
    createCanvas(600, 600)

/**
 * Centers the image.
 */
    imageMode(CENTER);

    rarityImage = await loadImage("assets/images/rarity-scare.png")

}


/**
 * adds project elements.
*/
function draw() {
    background("#acb3f3")

    drawRarity();

}

function drawRarity(){
    image(rarityImage, rarity.x, rarity.y, rarity.size, rarity.size);
}
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
    size: 100,
    speed: 3
}
/**
 * creates canvas
*/
async function setup() {
    createCanvas(800, 800)

/**
 * Centers the image
 */
    imageMode(CENTER);

/**
 * loads rarity image
 */

    rarityImage = await loadImage("assets/images/rarity-scare.png")
    

}

function moveRarity () {
    const d = dist(mouseX, mouseY, rarity.x, rarity.y);

    if (d < 150) {
        if (mouseX < rarity.x){
            rarity.x += rarity.speed;
        }
        
        else if (mouseX > rarity.y){
            rarity.x -= rarity.speed;
        }

        if (mouseY < rarity.y){
            rarity.y += rarity.speed;
        }
        else if (mouseY > rarity.y){
            rarity.y -= rarity.speed;
        }
    }

    rarity.x = constrain(rarity.x, 0, width)
    rarity.y = constrain(rarity.y, 0, width)
}


/**
 * adds project elements
*/
function draw() {
    background("#acb3f3")

    moveRarity();
    drawRarity();

}

function drawRarity(){
    image(rarityImage, rarity.x, rarity.y, rarity.size, rarity.size);
}
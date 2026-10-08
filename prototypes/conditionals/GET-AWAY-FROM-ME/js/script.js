/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * variable for rarity and spike
 */

let rarityImage;
let cursorImage;

const rarity = {
    x: 300,
    y: 300,
    size: 150,
    speed: 6
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
 * removes cursor
 */
    noCursor();

/**
 * loads rarity image
 */

    rarityImage = await loadImage("assets/images/rarity-scare.png")

/**
 * loads spike image
 */
    cursorImage = await loadImage("assets/images/spike.jpg")
    

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

    /**
     * stops rarity from leaving the canvas
     */

    rarity.x = constrain(rarity.x, 0, 800)
    rarity.y = constrain(rarity.y, 0, 800)
}


/**
 * adds project elements
*/
function draw() {
    background("#acb3f3")

    moveRarity();
    drawRarity();

/**
 * replaces the cursor with the image
 */
    image(cursorImage, mouseX, mouseY, 100, 100);

}

/**
 *draws rarity
 */

function drawRarity(){
    image(rarityImage, rarity.x, rarity.y, rarity.size, rarity.size);
}
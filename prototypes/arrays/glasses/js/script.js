/**
 * Glasses
 * Wassim Naim
 * 
 * Help the girl find her glasses!
 */

"use strict";

/**
 * each line of dialogue and the image that displays with it
*/
const speech = [
    { text: "Hey...", imagePath: "assets/images/1.png"},
    { text: "I've been trying to find my glasses...", imagePath: "assets/images/2.png"},
    { text: "Can you help me find them? (give her the glasses.)", imagePath: "assets/images/3.png"},
    { text: "Oh!", imagePath: "assets/images/4.png"},
    { text: "Thank you!", imagePath: "assets/images/5.png"},
    { text: "Without yout help i would've been stuck here forever.", imagePath: "assets/images/5.png"},
]

/**
 * what text is playing.
*/
let speechIndex = 0;

/**
 * dialogue text attributes.
*/
let speechbubble = {
    x: 200,
    y: 665,
    width: 300,
    height: 80,
    padding: 20,
    fontSize: 27
}

/**
 * holds the glasses image.
*/
let glassesImage = undefined;

/**
 * loads all the images.
*/
function preload() {
/**
 * goes through every text and displays it's image
*/
    for (const part of speech) {
        part.image = loadImage(part.imagePath);
    }
    glassesImage = loadImage("assets/images/glasses.png")
}
/**
 * sets up canvas
*/
function setup() {
    createCanvas (800, 800)
    noCursor();

}


/**
 * draws the text, image and the glasses cursor.
*/
function draw() {
    const current = speech[speechIndex];

    image(current.image, 0, 0, width, height);
   showDialog(current.text);

   image(glassesImage, mouseX, mouseY, 60, 30);
}

/**
 * draws the text
*/
function showDialog(speech){
   push();
   fill(255);
   textSize(speechbubble.fontSize);
   text(speech, speechbubble.x + speechbubble.padding, speechbubble.y + speechbubble.padding, speechbubble.width - 2 * speechbubble.padding);
   pop();
}    

/**
 * goes from dialogue to dialogue when the mouse is clicked.
*/
function mousePressed() {
    if (speechIndex < speech.length - 1){
        speechIndex++;
    }
}
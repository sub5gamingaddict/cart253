/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

const speech = [
    { text: "Hey...", imagePath: "assets/images/1.png"},
    { text: "I've been trying to find my glasses...", imagePath: "assets/images/2.png"},
    { text: "Can you help me find them? (give her the glasses.)", imagePath: "assets/images/3.png"},
    { text: "Oh!", imagePath: "assets/images/4.png"},
    { text: "Thank you!", imagePath: "assets/images/5.png"},
    { text: "Without yout help i would've been stuck here forever.", imagePath: "assets/images/5.png"},
]

let speechIndex = 0;

let speechbubble = {
    x: 200,
    y: 665,
    width: 300,
    height: 80,
    padding: 20,
    fontSize: 27
}

let glassesImage = undefined;

function preload() {
    for (const part of speech) {
        part.image = loadImage(part.imagePath);
    }
    glassesImage = loadImage("assets/images/glasses.png")
}
/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas (800, 800)
    noCursor();

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    const current = speech[speechIndex];

    image(current.image, 0, 0, width, height);
   showDialog(current.text);

   image(glassesImage, mouseX, mouseY, 60, 30);
}

function showDialog(speech){
   push();
   fill(255);
   textSize(speechbubble.fontSize);
   text(speech, speechbubble.x + speechbubble.padding, speechbubble.y + speechbubble.padding, speechbubble.width - 2 * speechbubble.padding);
   pop();
}    

function mousePressed() {
    if (speechIndex < speech.length - 1){
        speechIndex++;
    }
}
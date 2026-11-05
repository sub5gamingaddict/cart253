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
    { text: "Can you help me find them?", imagePath: "assets/images/3.png"},
    { text: "Oh!", imagePath: "assets/images/4.png"},
    { text: "Thank you!", imagePath: "assets/images/5.png"},
    { text: "Without yout help i would've been stuck here forever.", imagePath: "assets/images/5.png"},
]

let speechIndex = 0;

let speechbubble = {
    x: 50,
    y: 300,
    width: 300,
    height: 80,
    padding: 20,
    fontSize: 18
}

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas (800, 800)

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

}

function showDialog(){
   push();
   fill();
   textSize(18);
   text(speech[speechIndex], speechbubble.x + speechbubble.padding, speechbubble.y + speechbubble.padding, speechbubble.width - 2 * speechbubble.padding, speechbubble.height - 2 * speechbubble.padding);
   pop();
}
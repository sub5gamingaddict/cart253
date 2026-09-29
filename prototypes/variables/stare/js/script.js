/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

 //jumpscare variable
   let jumpscareimage;
   
   //jumpscare tracker
    let jumpscared = false;

    /**
 * loading assets.
 */
function preload() {
   jumpscareimage = loadImage("image/jumpscare.jpg");

}


/**
 * Sets up the canvas.
 */
function setup() {
   createCanvas(800, 800);

}


/**
 * canvas details.
*/
function draw() {

    // Normal screen
    if (!jumpscared) {
        background("#070707");

   //draws circle
    push();
    fill("#faf2f1");
    ellipse(400, 400, 100, 100);
    pop();
    noStroke();
    
    }

     // Jumpscare screen
   else {

      image(jumpscareimage, 0, 0, 800, 800);
   }
}

   /**
 * jumpscare event
*/

function mousePressed() {
   jumpscared = true;

}
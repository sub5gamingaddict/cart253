/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * Sets up the canvas.
 */
function setup() {
   createCanvas(800, 800);

   //jumpscare variable
   let jumpscare = false;
   
   //jumpscare tracker
    let jumpscared = false;


}

/**
 * loading assets.
 */
function preload() {
   jumpscare = loadImage("jumpscare.jpg");

}

/**
 * canvas details.
*/
function draw() {

    // Normal screen
    if (!jumpscare) {
        background("#070707");

   //draws circle
    push();
    fill("#faf2f1");
    ellipse(400, 400, 100,);
    pop();
    noStroke();
    
    }

     // Jumpscare screen
   else {

      image(jumpscare, 0, 0, width, height);
   }
}


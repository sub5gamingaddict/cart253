/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
   createCanvas(800, 800);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("#070707");

    //draws face
    push();
    fill("#faf2f1");
    ellipse(400, 400, 810,);
    pop();
    noStroke();

    //draws face shadow
    push();
    fill("#030303");
    ellipse(400, 400, 600, 810);
    pop();
    noStroke();

     //draws left eye
    push();
    fill("#faf2f1");
    ellipse(225, 350, 200, 100);
    pop();
    noStroke();

    
     //draws left pupil
    push();
    fill("#030303");
    ellipse(225, 350, 5, 100);
    pop();
    noStroke();

     //draws right eye
    push();
    fill("#faf2f1");
    ellipse(575, 350, 200, 100);
    pop();
    noStroke();

     //draws right pupil
    push();
    fill("#030303");
    ellipse(575, 350, 5, 100);
    pop();
    noStroke();

       //draws angry mouth
    push();

translate(215, 250);
rotate(PI);

fill("#fffdfd");
arc(-175, -300, 500, 20, 0, PI);

pop();

noStroke();    
}
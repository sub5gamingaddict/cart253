/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let nighttime;
let daytime;

let sun = {
    x: 400,
    y: 750,
    size: 250,
    color: "#ffdf29"
};

/**
 * set up canvas,
*/
function setup() {
       createCanvas(800, 800);

nighttime= color(24, 40, 71);
daytime= color(147, 213, 255);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
   nighttime= lerpColor(nighttime, daytime, 0.001);   

   background(nighttime);

   drawsun();
   
}

function drawsun() {
    push();
    fill(sun.color);
    ellipse(sun.x, sun.y, sun.size, sun.size);
    pop();
    noStroke();
}
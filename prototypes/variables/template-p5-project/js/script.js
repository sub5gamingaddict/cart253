/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let wheel = {
    x: 400,
    y: 400,
    size: 700,
    color: "#fffcf7",
    angle: 0
};

let centerPivot = {
    x: 400,
    y: 400,
    size: 30,
    color: "#050505",
};
/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
   createCanvas(800, 800);
    background("#000000");

    
    drawclock();
    drawcenterpivot();
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function drawclock() {
    push();
    fill(wheel.color);
    ellipse(wheel.x, wheel.y, wheel.size);
    pop();

}

function drawcenterpivot() {
    push();
    fill(centerPivot.color);
    ellipse(centerPivot.x, centerPivot.y, centerPivot.size);
    pop();
    nostroke();
}
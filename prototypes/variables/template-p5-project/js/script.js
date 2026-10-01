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

let romannumbers = ["XII", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI"

];

let hourstick = {
    length: 200,
    width: 10,
    color: "#050505",
}

let minutestick = {
    length: 270,
    width: 10,
    color: "#050505",
}
/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
   createCanvas(800, 800);
    background("#000000");

    hourstick.angle = -HALF_PI;
    minutestick.angle = -HALF_PI;
    
    drawclock();
    drawcenterpivot();
    drawromannumbers();
    drawhourstick();
    drawminutestick();
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
    noStroke();
    ellipse(centerPivot.x, centerPivot.y, centerPivot.size);
    pop();

}

function drawromannumbers() {
    push();
    fill("#050505");
    noStroke();
    textSize(30);
    textAlign(CENTER, CENTER);
    for (let i = 0; i < romannumbers.length; i++) {
        let angle = map(i, 0, romannumbers.length, 0, TWO_PI) - HALF_PI;
        let x = wheel.x + cos(angle) * (wheel.size / 2 - 30);
        let y = wheel.y + sin(angle) * (wheel.size / 2 - 30);
        text(romannumbers[i], x, y);
    }
    pop();
    
}

function drawhourstick() {
    push();
    stroke(hourstick.color);
    strokeWeight(hourstick.width);
    line (centerPivot.x, centerPivot.y, centerPivot.x + cos(hourstick.angle) * hourstick.length, centerPivot.y + sin(hourstick.angle) * hourstick.length);
    pop();
}

function drawminutestick() {
    push();
    stroke(minutestick.color);
    strokeWeight(minutestick.width);
    line (centerPivot.x, centerPivot.y, centerPivot.x + cos(minutestick.angle) * minutestick.length, centerPivot.y + sin(minutestick.angle) * minutestick.length);
    pop();
}

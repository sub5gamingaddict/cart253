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

let sunset = {
    x: 400,
    size: 250,
    color: "#ffdf29"
};

let sunrise = {
    x: 400,
    size: 250,
    color: "#ffdf29"
};

let mountain1 = {
    x: 150,
    y: 900,
    size: 600,
    color: "#141625"
};

let mountain2 = {
    x: 650,
    y: 900,
    size: 600,
    color: "#141625"
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
   drawmountain1();
   drawmountain2();
}

function drawsun() {
    push();
    fill(sun.color);
    ellipse(sun.x, sun.y, sun.size, sun.size);
    pop();
    noStroke();
}

function drawmountain1() {
    push();
    fill(mountain1.color);
    triangle(mountain1.x - mountain1.size/2, mountain1.y, mountain1.x, mountain1.y - mountain1.size/2, mountain1.x + mountain1.size/2, mountain1.y);
    pop();
    noStroke();
}

function drawmountain2() {
    push();
    fill(mountain2.color);
    triangle(mountain2.x - mountain2.size/2, mountain2.y, mountain2.x, mountain2.y - mountain2.size/2, mountain2.x + mountain2.size/2, mountain2.y);
    pop();
    noStroke();
}
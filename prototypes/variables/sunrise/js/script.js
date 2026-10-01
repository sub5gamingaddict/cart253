/**
 * Egyptian sunrise
 * Wassim Naim
 * 
 * a sunrise in egypt
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

let sunrise = {
    x:400,
    y: 400,
    size: 250,
    color: "#ffdf29"
};

let mountain1 = {
    x: 150,
    y: 900,
    size: 700,
    color: "#141625"
};


let mountain2 = {
    x: 650,
    y: 900,
    size: 700,
    color: "#141625"
};

let mountain1color;
let mountain2color;

/**
 * set up canvas,
*/
function setup() {
       createCanvas(800, 800);

nighttime= color(24, 40, 71);
daytime= color(147, 213, 255);

mountain1.color = color("#141625");
mountain2.color = color("#141625");

mountain1color = { color: color("#967b52") };
mountain2color = { color: color("#967b52") };

}


/**
 * draws canvas.
*/
function draw() {
   nighttime= lerpColor(nighttime, daytime, 0.003);   

   background(nighttime);

   drawsun();
   drawmountain1();
   drawmountain2();
}

/**
 * draws sun.
*/
function drawsun() {
    push();
    fill(sun.color);
    ellipse(sun.x, sun.y, sun.size, sun.size);
    pop();
    noStroke();

    sun.y = lerp(sun.y, sunrise.y, 0.001);
}

/**
 * draws first mountain.
 */
function drawmountain1() {
    push();
    fill(mountain1.color);
    triangle(mountain1.x - mountain1.size/2, mountain1.y, mountain1.x, mountain1.y - mountain1.size/2, mountain1.x + mountain1.size/2, mountain1.y);
    pop();
    noStroke();

    mountain1.color = lerpColor(mountain1.color, mountain1color.color, 0.001);
}

/**
 * draws second mountain.
 */
function drawmountain2() {
    push();
    fill(mountain2.color);
    triangle(mountain2.x - mountain2.size/2, mountain2.y, mountain2.x, mountain2.y - mountain2.size/2, mountain2.x + mountain2.size/2, mountain2.y);
    pop();
    noStroke();

    mountain2.color = lerpColor(mountain2.color, mountain2color.color, 0.001);
}


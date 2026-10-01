/**
 * Clock
 * Wassim Naim
 * 
 * a ticking clock :D
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

let secondstick = {
    length: 270,
    width: 3,
    color: "#c21313",
}
/**
 * sets up canvas.
*/
function setup() {
   createCanvas(800, 800);
   
/**
 * sets up clock elements.
*/
}
function draw() {
    background("#000000");

    updatehands();
  
    drawclock();
    drawromannumbers();
    drawhourstick();
    drawminutestick();
    drawsecondstick();
    drawcenterpivot();

}
/**
 * sets up clock hand movements.
*/
function updatehands() {
    let hr = hour() %12;
    let mn = minute();
    let sc = second();

    secondstick.angle = map(sc, 0, 60, 0, TWO_PI) - HALF_PI;
    minutestick.angle = map(mn + norm(sc, 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
    hourstick.angle = map(hr + norm(mn, 0, 60), 0, 12, 0, TWO_PI) - HALF_PI;

}


/**
 * draws clock.
*/
function drawclock() {
    push();
    fill(wheel.color);
    ellipse(wheel.x, wheel.y, wheel.size);
    pop();

}

/**
 * draws center pivot.
*/
function drawcenterpivot() {
    push();
    fill(centerPivot.color);
    noStroke();
    ellipse(centerPivot.x, centerPivot.y, centerPivot.size);
    pop();

}

/**
 * adds roman numbers.
*/
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

/**
 * draws hour stick.
*/
function drawhourstick() {
    push();
    stroke(hourstick.color);
    strokeWeight(hourstick.width);
    line (centerPivot.x, centerPivot.y, centerPivot.x + cos(hourstick.angle) * hourstick.length, centerPivot.y + sin(hourstick.angle) * hourstick.length);
    pop();
}

/**
 * draws minute stick.
*/
function drawminutestick() {
    push();
    stroke(minutestick.color);
    strokeWeight(minutestick.width);
    line (centerPivot.x, centerPivot.y, centerPivot.x + cos(minutestick.angle) * minutestick.length, centerPivot.y + sin(minutestick.angle) * minutestick.length);
    pop();
}

/**
 * draws second stick.
*/
function drawsecondstick() {
    push();
    stroke(secondstick.color);
    strokeWeight(secondstick.width);
    line (centerPivot.x, centerPivot.y, centerPivot.x + cos(secondstick.angle) * secondstick.length, centerPivot.y + sin(secondstick.angle) * secondstick.length);
    pop();
}

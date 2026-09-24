/**
 * Mr. Furious
 * Pippin Barr
 *
 * A guy who becomes visibly furious!
 */

"use strict";

// Our friend Mr. Furious
let mrFurious = {
  // Position and size
  x: 200,
  y: 200,
  size: 100,
  // Colour
  fill: {
    r: 255,
    g: 225,
    b: 225
  }
};

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

//sky color
let skyColor = {
  r: 160,
  g: 180,
  b: 200
};

/**
 * Draw (and update) Mr. Furious
 */
function draw() {
  background(skyColor.r, skyColor.g, skyColor.b);

  //gradually changes the sky color from day to night
  skyColor.r -= 0.5;
  skyColor.g -= 0.5;
  skyColor.b -= 0.5;

  // Draw Mr. Furious as a coloured circle
  push();
  noStroke();
  fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);

  //gradually change the colour of Mr. Furious white to red and redder
  mrFurious.fill.g -= 0.5; 
  mrFurious.fill.b -= 0.5;

  ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
  pop();
}
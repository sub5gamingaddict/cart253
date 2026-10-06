/**
 * Keyblade Gacha
 * Wassim Naim
 * 
 * this is a program that allows you to pull for keyblades.
 */

"use strict";

/**
 * keyblade chest variable.
*/
let keybladeChest;

/**
 * keyblade drops variable.
*/
let keyblade = undefined;

/**
 * Loading the chest of keyblades.
*/
async function preload() {
    keybladeChest = await loadImage("assets/images/blackbox.png");
}

async function setup() {
    createCanvas(800, 600);
    await preload();
}

function draw() {
    background(0);
    image(keybladeChest, 150, 50, 500, 500);
}

const p = random();

if (p < 0.01) {
    keyblade = "gazingeye.png";
}

else if (p < 0.20) {
    keyblade = "oathkeeper.png";
}

else if (p < 0.20) {
    keyblade = "oblivion.png";
}

else if (p < 0.50) {
    keyblade = "kingdomkey.png";
}

else {
    keyblade = "braveheart.png";
}


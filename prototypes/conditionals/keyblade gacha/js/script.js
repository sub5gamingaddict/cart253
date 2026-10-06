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
let keybladeChest = undefined;

/**
 * Loading the chest of keyblades.
*/
async function loadKeybladeChest() {
    keybladeChest = await loadimage("assets/images/blackbox.png");
}

async function setup() {
    createCanvas(800, 600);
    await preload();
}

function draw() {
    background(0);
    image(keybladeChest, 100, 50);
}
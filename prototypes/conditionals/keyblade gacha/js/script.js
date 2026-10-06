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
    gazingeye = await loadImage("assets/images/gazingeye.png");
    oathkeeper = await loadImage("assets/images/oathkeeper.png");
    oblivion = await loadImage("assets/images/oblivion.png");
    kingdomkey = await loadImage("assets/images/kingdomkey.png");
    braveheart = await loadImage("assets/images/braveheart.png");
}

async function setup() {
    createCanvas(800, 600);
    await preload();
}

function draw() {
    background(0);
    image(keybladeChest, 150, 50, 500, 500);
}

function pull() {
const p = random();

if (p < 0.01) {
    keyblade = "gazingeye";
}

else if (p < 0.20) {
    keyblade = "oathkeeper";
}

else if (p < 0.20) {
    keyblade = "oblivion";
}

else if (p < 0.50) {
    keyblade = "kingdomkey";
}

else {
    keyblade = "braveheart";
}
}

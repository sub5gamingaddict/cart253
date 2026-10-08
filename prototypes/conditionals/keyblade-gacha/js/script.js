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
let keyblade;

/**
 * keyblade drops variable.
*/
let gazingeye;
let oathkeeper;
let oblivion;
let kingdomkey;
let braveheart;
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

    if (!keybladeChest) return;

    if (keyblade) {
        image(keyblade, 150, 50, 500, 500);
    }
    else {
    image(keybladeChest, 150, 50, 500, 500);
    }
}

function mousePressed() {
    if (!keyblade){
    keyblade = pull();
    }
}

function pull() {
const p = random();

if (p < 0.01) {
    return gazingeye;
}

else if (p < 0.10) {
    return oathkeeper;
}

else if (p < 0.20) {
    return oblivion;
}

else if (p < 0.50) {
    return kingdomkey;
}

else {
    return braveheart;
}
}


/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let cuteCat;
let scaryCat;
let scary = false;

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
async function preload() {

     cuteCat = await loadImage("assets/images/cutecat.jpg");
     scaryCat = await loadImage("assets/images/scarycat.jpg")
}

async function setup() {
    
    createCanvas(1080, 1080)
    imageMode(CENTER);
    await preload();

  document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    lose();
  }
});

}


function lose(){
    scary = true;
}

function draw(){

    background(0)

         if (scary) {
        image(scaryCat, 540, 540, 1080, 1080);
    }
    else{
        image(cuteCat, 540, 540, 1080, 1080);
    }
}

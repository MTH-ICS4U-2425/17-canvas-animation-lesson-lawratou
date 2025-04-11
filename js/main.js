/**
 * ICS4U - Mr. Brash 🐿️
 * 
 * 17 - Canvas Animation
 * 
 * Author:
 * 
 */

'use strict';

import Player from "./player.js";
import { CANVAS, CTX, MS_PER_FRAME, KEYS } from "./globals.js";

// Globals
const HERO = new Player(120, 50, 48, 48);

let ground1 = new Image()
let ground2 = new Image()

ground1.src = "../images/dino_large.png"
ground2.src = "../images/dino_large.png"

ground1.x_pos = 0
ground2.x_pos = 2300





let frame_time = performance.now()

// Event Listeners
document.addEventListener("keydown", keypress);

// Disable the context menu on the entire document
document.addEventListener("contextmenu", (event) => { 
  event.preventDefault();
  return false; 
});

/**
 * The user pressed a key on the keyboard 
 */
function keypress(event) {
if ([KEYS.W, KEYS.UP_ARROW, KEYS.SPACE].includes(event.keyCode)){
  console.log(HERO.bottom, HERO.velocity.y)
  HERO.jump();
}
}


/**
 * The main game loop
 */
function update() {
  // Prepare for the next frame
  requestAnimationFrame(update)
  
  /*** Desired FPS Trap ***/
  const NOW = performance.now()
  const TIME_PASSED = NOW - frame_time
  
  if (TIME_PASSED < MS_PER_FRAME) return
  
  const EXCESS_TIME = TIME_PASSED % MS_PER_FRAME
  frame_time = NOW - EXCESS_TIME
  /*** END FPS Trap ***/
  
  // Clear the canvas
  CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);
  
//Draw Ground 

ground1.x_pos -= 5
ground2.x_pos -= 5

if (ground1.x_pos <= -2300) {
  ground1.x_pos = ground2.x_pos + 2300
}

if (ground2.x_pos <= -2300) {
  ground2.x_pos = ground1.x_pos + 2300
}

CTX.drawImage(ground1, 0, 102, 2300, 28, ground1.x_pos, 300, 2300, 28)
CTX.drawImage(ground2, 0, 102, 2300, 28,  ground2.x_pos, 300, 2300, 28)


  // Draw our hero
  



  HERO.update();
  
}

// Start the animation


update()

function startDinoRain() {
    const originalImg = document.getElementById('comsypack');
    const rainCount = 15; // Number of falling dinos

    // i++ is also i=i+1 but yeah whatever...
    for (let i = 0; i < rainCount; i++) { 
        // Create a duplicate image
        const drop = document.createElement('img');
        // comsy2.src = "images/comsy2.png";
        // const drop2 = comsy2;
        // const drop2 = 
        drop.src = originalImg.src;
        drop.classList.add('falling-dino');

        // Randomize horizontal position (0 to 100% of screen width)
        drop.style.left = Math.random() * 100 + "vw";
        drop.style.top = "-100px";
        // drop2.style.left = Math.random() * 100 +"vw";
        // drop2.style.bottom = "-100px";
        
        // Randomize delay so they don't all fall at once
        drop.style.animationDelay = Math.random() * 2 + "s";
        // drop2.style.animationDelay = Math.random() * 2 + "s";

        // Randomize speed for a natural look
        drop.style.animationDuration = (Math.random() * 2 + 2) + "s";
        // drop2.style.animationDuration = (Math.random() * 2 + 2) + "s";
        document.body.appendChild(drop);
        // document.body.appendChild(drop2);
        // Remove the element after animation ends to keep the site fast
        setTimeout(() => {
            drop.remove();
            // drop2.remove();
        }, 5000);
    }
}

// reverse rain
// kinda not working
function startDinoRise() {
    const originalImg = document.getElementById('comsypack2');
    // const originalImg = src="images/comsy2.png";
    
    const dinoCount = 15; // Number of floating dinos

    for (let i = 0; i < dinoCount; i++) {
        const drop2 = document.createElement('img');
        drop2.src = originalImg.src;
        drop2.classList.add('rising-dino');

        // Random horizontal position
        drop2.style.left = Math.random() * 100 + "vw";
        
        // Start them just below the visible screen
        drop2.style.bottom = "-100px"; 
        
        // Randomize speed and delay for a natural "bubble" effect
        drop2.style.animationDuration = (Math.random() * 2 + 2) + "s";
        drop2.style.animationDelay = Math.random() * 2 + "s";

        document.body.appendChild(drop2);

        // Clean up after they float away
        setTimeout(() => drop2.remove(), 5000);
    }
}


// wooooOOoooo the scary snake woOWOOoOOOOoo
let snakeTimer; // Variable to store the countdown

function snakeHiss() {
    const snakeImg = document.getElementById('clicksnake');
    
    // 1. Change to the hissing image
    snakeImg.src = 'images/bigsnakehissing.png';

    // 2. Clear any existing timer so they don't overlap
    clearTimeout(snakeTimer);

    // 3. Start a new 10-second timer (10000 milliseconds)
    snakeTimer = setTimeout(() => {
        snakeImg.src = 'images/bigsnake.png';
        console.log("The snake has calmed down.");
    }, 2200); 
}



// you make spino mad... run
let madspino;
let spinocount;
spinocount=0;
function run() {
    // spinocount=0;
    spinocount+=1;
    console.log(spinocount);
    
    const spinoImg = document.getElementById('spino');
    spinoImg.src = "images/spino2.png";
    
    if (spinocount>2) {
        window.confirm("spino dislike your clicking\nplease stop.");
        spinocount=0;
    }
    
    clearTimeout(madspino);

    madspino = setTimeout(() => {
        
        spinoImg.src = "images/spino.png";
        console.log("spino forgive you");
        spinocount=0;
        
    }, 2200);

    
}


// BE HOLD!!!
// mosy swimming!!!

const mosy = document.getElementById('mosy');
let mosyTimer;
let oldX = 0; // Track the previous horizontal position

function swim() {
    const maxX = window.innerWidth - mosy.clientWidth;
    const maxY = window.innerHeight - mosy.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // --- FLIP LOGIC ---
    if (randomX < oldX) {
        // Moving Left: Flip the image
        mosy.style.transform = "scaleX(-1)";
    } else {
        // Moving Right: Normal orientation
        mosy.style.transform = "scaleX(1)";
    }

    // Update the position
    mosy.style.left = randomX + 'px';
    mosy.style.top = randomY + 'px';

    // Store current X for the next move
    oldX = randomX;
}

setInterval(swim, 2000);
swim();

function mosyHiss() {
    mosy.src = 'images/mosy_swiming.png';
    clearTimeout(mosyTimer);
    mosyTimer = setTimeout(() => {
        mosy.src = 'images/mosy.png';
    }, 5000);
}

// const mosy = document.getElementById('mosy');
// let mosyTimer;

// --- PART 1: SWIMMING LOGIC ---
// function swim() {
//     // Calculate random positions within the browser window
//     const maxX = window.innerWidth - mosy.clientWidth;
//     const maxY = window.innerHeight - mosy.clientHeight;

//     const randomX = Math.floor(Math.random() * maxX);
//     const randomY = Math.floor(Math.random() * maxY);

//     // Apply the new position
//     mosy.style.left = randomX + 'px';
//     mosy.style.top = randomY + 'px';

//     // Optional: Flip the image based on direction
//     // If moving left, scaleX(-1). If moving right, scaleX(1).
// }

// // Move every 2 seconds
// setInterval(swim, 2000);
// swim(); // Start immediately


// --- PART 2: HISSING LOGIC ---
// function mosyHiss() {
//     // Change to the swimming/hissing image
//     mosy.src = 'images/mosy.png';
//     mosy.style.width = "100px";
//     // Reset the timer if clicked again
//     clearTimeout(mosyTimer);

//     // Return to normal after 5 seconds
//     mosyTimer = setTimeout(() => {
//         mosy.src = 'images/mosy_swiming.png';
//         mosy.style.width = "150px";
//     }, 2200);
// }


// let timeRemaining = 5;
// let countdownInterval;

// function run() {
  // Clear any existing intervals
//   clearInterval(countdownInterval);
    // alert(timeRemaining)
    
  // Get the display element
//   const display = document.getElementById("idk");
//   display.textContent = `Time remaining: ${timeRemaining} seconds`;

//   Start the countdown interval
//   countdownInterval = setInterval(function() {
    // timeRemaining--;
    // display.textContent = `Time remaining: ${timeRemaining} seconds`;

    // if (timeRemaining <= 0) {
      // Stop the countdown
    //   clearInterval(countdownInterval);
      // Show the alert
    //   alert("Countdown finished!");
      // Reset time for next run
    //   timeRemaining = 5; 
    //   display.textContent = `Time remaining: ${timeRemaining} seconds`;
    // }
//   }, 1000); // 1000 milliseconds = 1 second
//   alert(timeRemaining)
//   window.confirm(timeRemaining)
// }


// document.getElementById




// document.addEventListener('DOMContentLoaded', () => {
    // const container = document.querySelector('.container');
    
    // Initial state
    // container.style.opacity = '0';
    // container.style.transition = 'opacity 1.5s ease-in-out';

    // Fade in effect
    // setTimeout(() => {
        // container.style.opacity = '1';
    // }, 100);
// });


// onclick="document.getElementById('clicksnake').src=''";

// Source - https://stackoverflow.com/a/12448006
// Posted by Markweb, modified by community. See post 'Timeline' for change history
// Retrieved 2026-03-06, License - CC BY-SA 4.0

// function changeImage() {
    // if (document.getElementsByClassName("dino-snake").src == "http://www.userinterfaceicons.com/80x80/minimize.png"){
        // document.getElementById("imgClickAndChange").src = "http://www.userinterfaceicons.com/80x80/maximize.png";
    // } else {
        // document.getElementById("imgClickAndChange").src = "http://www.userinterfaceicons.com/80x80/minimize.png";
    // }
// }

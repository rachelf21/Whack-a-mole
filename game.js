// get references to DOM elements
const mole       = document.getElementById('mole');
const scoreboard = document.getElementById('scoreboard');

// get width and height
const WIDTH  = mole.width,
      HEIGHT = mole.height;

// increment difficulty based on score
const SCORE_TICK_MODE = {
    1: 900,
    2: 800,
    3: 700,
    4: 600,
    5: 500,
    6: 400,
    6: 300,
    6: 200,
    8: 100
};

// global variables
let score      = 0,      // current score
    tickRate   = 1000;   // tick rate in milliseconds. Default at 1 update per second
    intervalId = null; // id for interval

// randomly place the mole on the screen
function moveMole() {
    mole.style.top = Math.floor(Math.random() * (screen.availHeight - HEIGHT)) +'px';
    mole.style.left = Math.floor(Math.random()* (screen.availWidth - WIDTH)) +'px';
}

function incrementScore() {
    scoreboard.innerHTML = ++score;
    
    let newRate = SCORE_TICK_MODE[score];
    if(typeof newRate !== 'undefined') {
         tickRate = newRate;
    }

    // make him go faster
    clearInterval(intervalId);
    intervalId = setInterval(moveMole, tickRate);
}

// listen for mole clicks
mole.addEventListener('click', () => {
    moveMole();
    incrementScore();
});

// begin game
intervalId = setInterval(moveMole, tickRate);
// session 2
let gravity = 0.25;
let bird_dy = 0;
let score = 0;
let game_state = "Start";



//interval
let gameInterval = null;


// session 2
let bird = document.getElementById("bird")
let score_display = document.getElementById("score")
let game_container = document.getElementById ("game-comntainer")
let start_btn = document.getElementById("start-btn")

// session 2
function pplyGravity(){
bird_dy += gravity;
let birdTop = bird.offsetTop + bird_dy

birdTop = Math.max(birdTop, 0)
// above code -> if (birdtop < 0) { birdTop = 0 ;}

BirdTop = Math/MIDIInput(birdTop, game_container/offsetHeight - bird.offsetHeight);

bird.style.top = birdTop +"px";
}
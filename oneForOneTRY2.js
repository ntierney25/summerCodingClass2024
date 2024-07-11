function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}

//initialize the players 
let player1;
let player2;

// initialize their positions
let player1X 
let player1Y 
let player2X
let player2Y

//initializing the game state
let player1win = false;
let player2win = false;

// constants
let player1XInitial
let player1YInitial
let player2XInitial
let player2YInitial

// arrays of the traps
let p1x = []
let p1y = []
let p2x = []
let p2y = []

// the goal
let golden


function setup(){

	createCanvas(windowWidth, windowHeight);
	background(0)

	player1X = (windowWidth/20)
	player1Y = (windowHeight/20)
	player2X = windowWidth-(windowWidth/20);
	player2Y = windowHeight-(windowHeight/20);

	player1XInitial = (windowHeight/20)
	player1YInitial = (windowHeight/20)
	player2XInitial = windowWidth-(windowWidth/20);
	player2YInitial = windowHeight-(windowHeight/20);

	rectMode(CENTER);

}

function draw(){
	background(0);

	if (player1win === false && player2win === false){
		game();
	} 
	else if(player1win === true){
		textSize(20);
		fill(255)
		text('red wins! refresh to play again', windowWidth/2 - 150, windowHeight/2)
	} 
	else if(player2win === true){
		textSize(20);
		fill(255)
		text('blue wins! refresh to play again', windowWidth/2 - 150, windowHeight/2)
	}

}

function game(){

//initializing the players
	fill(255,0,0)
	player1 = rect(player1X, player1Y, windowWidth/20, windowHeight/20);
	fill(0,0,255)
	player2 = rect(player2X, player2Y, windowWidth/20, windowHeight/20);

//setting up the game winning condition
	fill(255,0,255);
	golden = ellipse(windowWidth/2, windowHeight/2, 20,20)
	if (dist(player1X, player1Y, windowWidth/2, windowHeight/2) < 20){
		player1win = true;
	}
	if (dist(player2X, player2Y, windowWidth/2, windowHeight/2) < 20){
		player2win = true;
	}

// trap mechanics
	for(let i = 0; i < p1x.length; i++){

		fill(255,0,0)
		ellipse(p1x[i], p1y[i], 40, 40);
		if(dist(player2X, player2Y, p1x[i], p1y[i]) < 50){
			
			p1x.splice(i, 1)
		 	p1y.splice(i, 1)
		 	player2X = player2XInitial;
		 	player2Y = player2YInitial;
		}
	}
	for(let i = 0; i < p2x.length; i++){

		fill(0,0,255)
		ellipse(p2x[i], p2y[i], 40, 40)
		if(dist(player1X, player1Y, p2x[i], p2y[i]) < 50){
			
			p2x.splice(i, 1)
		 	p2y.splice(i, 1)

		 	player1X = player1XInitial;
		 	player1Y = player1YInitial;
		}
	}
//  making the screen have walls
	if (player1X < 0){
		player1X = 0;
	}
	if (player1Y < 0){
		player1Y = 0;
	}
	if (player2X < 0){
		player2X = 0;
	}
	if (player2Y < 0){
		player2Y = 0;
	}
	if (player1X > (windowWidth-windowWidth/10)){
		player1X = windowWidth-windowWidth/10;
	}
	if (player1Y > (windowHeight-windowHeight/10)){
		player1Y = windowHeight-windowHeight/10;
	}
	if (player2X > windowWidth-windowHeight/10){
		player2X = windowWidth-windowHeight/10;
	}
	if (player2Y > windowHeight-windowHeight/10){
		player2Y = windowHeight-windowHeight/10;
	}

}

function keyPressed(){

// arrow keys for p2
	if (keyCode === UP_ARROW){
		player2Y = player2Y-40;
	}
	if (keyCode === DOWN_ARROW){
		player2Y = player2Y+40;
	}
	if (keyCode === LEFT_ARROW){
		player2X = player2X-40;
	}
	if(keyCode === RIGHT_ARROW){
		player2X = player2X+40;
	}

// WASD for p1
	if (key === 'w'){
		player1Y = player1Y-40;
	}

	if (key === 's'){
		player1Y = player1Y+40;
	}

	if (key === 'a'){
		player1X = player1X-40;
	}

	if(key === 'd'){
		player1X = player1X+40;
	}

//trap dropping keys
	if(key === 'p'){
		traps(2);
	}
	if(key === 'r'){		
		traps(1);
	}
}


function traps(x){

	let n = random(50,60);

	if(x === 1){

		if(p1x.length < 10){

			if(player2X < windowWidth/2){
				p1x.push(player2X + n)
			}else{
				p1x.push(player2X - n)
			}
			
			if(player2Y < windowHeight/2){
				p1y.push(player2X + n)
			}else{
				p1y.push(player2Y - n)
			}
			
		}
	}

	if(x === 2){

		if(p2x.length < 10){
			
			if(player1X < windowWidth/2){
				p2x.push(player1X + n)
			}else{
				p2x.push(player1X - n)
			}
			
			if(player1Y < windowHeight/2){
				p2y.push(player1X + n)
			}else{
				p2y.push(player1Y - n)
			}

		}
	}

}
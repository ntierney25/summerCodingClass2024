//One for One is a two player combat game where they play against each other

let player1;
let player2;
let player1X 
let player1Y 
let player2X
let player2Y

let player1Score = 10
let player2Score = 10

function setup(){
	createCanvas(windowWidth, windowHeight);
	background(0)

	player1X = 0
	player1Y = 0
	player2X = windowWidth-(windowWidth/10);
	player2Y = windowHeight-(windowHeight/10);

}


function draw(){
	
	background(0)

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


//initializing the players


	player1 = rect(player1X, player1Y, windowWidth/10, windowHeight/10)
	player2 = rect(player2X, player2Y, windowWidth/10, windowHeight/10);




	if (keyIsDown(UP_ARROW) === true){
		player1Y = player1Y-50;
	}

	if (keyIsDown(DOWN_ARROW) === true){
		player1Y = player1Y+50;
	}

	if (keyIsDown(LEFT_ARROW) === true){
		player1X = player1X-50;
	}

	if(keyIsDown(RIGHT_ARROW) === true){
		player1X = player1X+50;
	}


}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}

function keyPressed(){


	if (key === 'w'){
		player2Y = player2Y-50;
	}

	if (key === 's'){
		player2Y = player2Y+50;
	}

	if (key === 'a'){
		player2X = player2X-50;
	}

	if(key === 'd'){
		player2X = player2X+50;
	}

	if(key === 'p'){
		ellipse(20,20, player2X - random(15,50), player2Y - random(15,50))
		player1Score = player1Score - 1
	}

	if(key === 'r'){
		ellipse(20,20, player1X - random(15,50), player1Y - random(15,50))
		player2Score = player2Score - 1
	}
}
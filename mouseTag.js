// initializing the Fermat
let mathMan;

//Fermat Position
let mathManX;
let mathManY;

// Fermat Speed
let xSpeed = 5;
let ySpeed = 5;

// other variables that we need
let score = 0;
let mouseDistance
let startBool = true;
let winBool = false;

function preload(){
	mathMan = loadImage('mathMan.jpg');

}

function setup(){
	createCanvas(windowWidth, windowHeight);
	mathManX = windowWidth/2
	mathManY = windowHeight/2
}

function draw(){


	if(startBool == true){
		startGame();
	}
	if(winBool == true){
		winGame();
	}

}


// the function with out game inside
function startGame(){
	background(0);

	fill(255)
	textSize(20)
	text('Tag the Mathematitian! Score:'+ score, 0,100)

	image(mathMan, mathManX, mathManY, 50, 50);

	mouseDistance = dist(mouseX, mouseY, mathManX, mathManY);

	mathManX = mathManX + xSpeed;
	mathManY = mathManY + ySpeed;

	if(mathManX >= windowWidth-25 || mathManX <= 0){
		xSpeed = xSpeed*(-1)
	}
	if(mathManY >= windowHeight-25 || mathManY <= 0){
		ySpeed = ySpeed*(-1)
	}

	if(mouseDistance < 25){
		score++
		mathManX = random(26, windowWidth-25)
		mathManY = random(26, windowHeight-25)

		xSpeed = xSpeed* 1.2;
		ySpeed = ySpeed* 1.2;
	}

	if (score > 20){
		startBool = false;
		winBool = true;
	}
}

// the function that ends the game and has the win screen
function winGame(){

	background(0);
	fill(255);
	textSize(20);
	text('YOU WON', 0,100);
	image(mathMan, windowWidth/2, windowHeight/2, 100,100);

}


function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}
function preload(){

}

function setup(){
	createCanvas(windowWidth, windowHeight);
	imageMode(CENTER);
	rectMode(CENTER);
}

function draw(){

// UI with an If statement that checks if the mouse is pressed
	if (mouseIsPressed == true){
		background(255,255,255);
	}else{
		background(0,0,0);
	}

	if (keyIsPressed == true){
		ellipse(windowWidth/2, windowHeight/2, windowWidth/2, windowHeight/2);
	}

	text('what le fuck', windowWidth/2, windowHeight/2)

}
function setup(){
	createCanvas(windowWidth, windowHeight);
}

function draw(){

// UI with an If statement that checks if the mouse is pressed
	if (mouseIsPressed == true){
		background(0,255,0);
	}else{
		background(0,0,0);
	}

	if (keyIsPressed == true){
		ellipse(windowWidth/2, windowHeight/2, 100,10);
	}

	text('what the fuck is happening', windowWidth/2, windowHeight/2)

}
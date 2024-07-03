let mathMan
let mathBrushBool = false;
let ellipseBrushBool = false;

function preload(){
	mathMan = loadImage('mathMan.jpg');
}

function setup(){
	createCanvas(windowWidth, windowHeight);
	background(255);
	imageMode(CENTER);
}

function draw(){
	
	if (ellipseBrushBool == true){
		ellipseBrush();
	}
	
	if (mathBrushBool == true){
		mathBrush();
	}
	
}

function ellipseBrush(){
		
	fill(random(255),random(255), random(255))
	ellipse(mouseX, mouseY, 50, 50)
	text(50, 50,'Ellipse!')

}

function mathBrush(){
	// if(){
		fill(random(255),random(255), random(255))
		image(mathMan, mouseX, mouseY, 50,50)
	// }
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}

function keyPressed(){
	if (key === 'w'){
		mathBrushBool = true;
		ellipseBrushBool = false;
	}
	if (key === 'e'){
		mathBrushBool = false;
		ellipseBrushBool = true;
	}

	if (key === 'r'){
		mathBrushBool = false;
		ellipseBrushBool = false;
		background(255);
	}

	if (key === 'q'){
		mathBrushBool = false;
		ellipseBrushBool = false;
	}
}
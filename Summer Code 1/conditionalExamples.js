let man
// let redvar
// let greenvar
// let bluevar

// function preload(){
// 	man = loadImage('mathMan.jpg')
// }

function setup(){

	createCanvas(windowWidth, windowHeight)
	rectMode(CENTER)
	imageMode(CENTER)

	// redvar = random(255)
	// greenvar = random(255)
	// bluevar = random(255)
}



function draw(){
	strokeWeight(5);

	

	for(let i=0; i< 2000; i=i+30){
		line(0,0,i,windowHeight)
	}

	for(let i=0; i<windowHeight; i=i+30){
		line(0,i,windowWidth, i);
	}

	textSize(40)
	text('Click Me!', 100, 200)

	if(keyIsPressed == true){
		fill(200, 200, 100)
		ellipse(windowWidth/2, windowHeight/2, 100, 100)
	}else{
		fill(100, 200, 100)
		rect(windowWidth/2, windowHeight/2, 100, 100)
	}


}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}

// function mouseCicked(){
// 	redvar = random(255)
// 	greenvar = random(255)
// 	bluevar = random(255)
// }
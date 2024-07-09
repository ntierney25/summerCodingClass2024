// let mathMan;

// let x = [];
// let y = [];


let playButton;
let canvas;

//let baskervvilleFont
let phone;

let phoneVolSlider
let phoneRateSlider

function preload(){
	//mathMan = loadImage('mathMan.jpg')
	//baskervvilleFont = loadFont('Baskervville_SC.zip');
	phone = loadSound('unavailable-phone.mp3')
}

function setup(){
	
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.style('z-index', -1);
	canvas.position(0,0);

	imageMode(CENTER);
	playButton = createButton('Play Audio');
	playButton.position(100,100);
	playButton.mousePressed(playPhone());

	phoneVolSlider = createSlider(0,1,1,0.01)
	phoneRateSlider = createSlider(0.5,3, 1, 0.01)
}


function draw(){
	
	background(150,40,100);
	// for(let i=0; i<x.length; i++){

	// 	image(mathMan, x[i], y[i], 60,60);

	// }


	phone.setVolume(phoneVolSlider.value());
	phone.rate(phoneRateSlider.value());

}


function playPhone(){

	if(phone.isPlaying()){
		phone.loop()
		playButton.html('Pause Audio');
	}
	else{

		phone.pause()
		playButton.html('Play Audio');
	}
}

// function mouseClicked(){

// 	x.push(mouseX);
// 	y.push(mouseY);



// }

// function keyPressed(){


// // undo button
// 	if(key === 'x'){
// 		x.splice(x.length-1, 1);
// 		y.splice(y.length-1, 1);
// 	}

// 	if(key === 'd'){
// 		for(i=0; i<x.length; i++){
// 			if(dist(mouseX, mouseY, x[i], y[i]) < 25){
// 				x.splice(i,1);
// 				y.splice(i,1);
// 			}
// 		}
// 	}

// 
// }

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}
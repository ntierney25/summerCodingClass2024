let capture; 


function setup(){
	createCanvas(800, 240);

	capture = createCapture(VIDEO);
	capture.size(320, 240)
	capture.hide();
}

function draw(){

	image(capture, 0,0);
	capture.filter(INVERT);

}
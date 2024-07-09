let canvas
let playbutton

let playing = false


let forty

function preload(){
	
	forty = createVideo(['forty.mp4'])
}


function setup(){
	canvas = createCanvas(windowWidth, windowHeight)
	canvas.style('z-index', '-1')
	canvas.position(0,0)

	forty.position(300, 200)
	forty.style('width', '480px')
	forty.style('height', '360px')
	playbutton = createButton('play video');
	playbutton.position(200,200);
	playbutton.mousePressed(playVid);
}

function playVid(){
	
	if(playing){
		forty.pause()
		playbutton.html('play video');
	}else{
		forty.loop()
		playbutton.html('pause video');
	
	}
		playing = !playing;
}

function draw(){
	
}
//One for One is a two player combat game where they play against each other

let player1;
let player2;
let player1X 
let player1Y 
let player2X
let player2Y

let player1win = false;
let player2win = false;

let player1XInitial
let player1YInitial
let player2XInitial
let player2YInitial

let p1x = []
let p1y = []
let p1Traps
let p2Traps

let golden
//let add

let player1Score 
let player2Score

//let dist1
//let dist2

let getP = false
let getR = false

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}

function setup(){
	createCanvas(windowWidth, windowHeight);
	background(0)

	player1X = 0
	player1Y = 0
	player2X = windowWidth-(windowWidth/20);
	player2Y = windowHeight-(windowHeight/20);

	player1XInitial = 0
	player1YInitial = 0
	player2XInitial = windowWidth-(windowWidth/20);
	player2YInitial = windowHeight-(windowHeight/20);

	add = 0;



}


function draw(){
	
	background(0)
	fill(255,0,255);
	golden = ellipse(windowWidth/2, windowHeight/2, 20,20)

	if (dist(player1X, player1Y, windowWidth/2, windowHeight/2) < 10){
		player1win = true;
	}

	if (dist(player2X, player2Y, windowWidth/2, windowHeight/2) < 10){
		player2win = true;
	}

	fill(255)

	for(let i = 0; i < p1x.length; i++){
		ellipse(p1x[i], p1y[i], 40, 40)
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

//initializing the players

	player1 = rect(player1X, player1Y, windowWidth/20, windowHeight/20)
	player2 = rect(player2X, player2Y, windowWidth/20, windowHeight/20);

}

function keyPressed(){

	if (keyCode === UP_ARROW){
		player1Y = player1Y-50;
	}

	if (keyCode === DOWN_ARROW){
		player1Y = player1Y+50;
	}

	if (keyCode === LEFT_ARROW){
		player1X = player1X-50;
	}

	if(keyCode === RIGHT_ARROW){
		player1X = player1X+50;
	}

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
		getP = true
		traps();
		getP = false		
	}

	if(key === 'r'){		
		getR = true
		traps();
		getR = false
	}
}


function traps(){

	// p1 = [
	// 	(player2X - random(15,50), player2Y - random(15,50)),
	// 	(player2X - random(15,50), player2Y - random(15,50)),
	// 	(player2X - random(15,50), player2Y - random(15,50)),
	// 	(player2X - random(15,50), player2Y - random(15,50)),
	// 		(player2X - random(15,50), player2Y - random(15,50)),
	// 	(player2X - random(15,50), player2Y - random(15,50)),
	// 	(player2X - random(15,50), player2Y - random(15,50)),
	// 	(player2X - random(15,50), player2Y - random(15,50)),
	// 	(player2X - random(15,50), player2Y - random(15,50)),
	// 		(player2X - random(15,50), player2Y - random(15,50))
	// 	]

	// p2 = [
	// 	(player1X - random(15,50), player1Y - random(15,50)),
	// 	(player1X - random(15,50), player1Y - random(15,50)),
	// 	(player1X - random(15,50), player1Y - random(15,50)),
	// 	(player1X - random(15,50), player1Y - random(15,50)),
	// 		(player1X - random(15,50), player1Y - random(15,50)),
	// 	(player1X - random(15,50), player1Y - random(15,50)),
	// 	(player1X - random(15,50), player1Y - random(15,50)),
	// 	(player1X - random(15,50), player1Y - random(15,50)),
	// 	(player1X - random(15,50), player1Y - random(15,50)),
	// 		(player1X - random(15,50), player1Y - random(15,50))
	// 	]

	if(p1x.length < 10){
		p1x.push(player2X - random(15,50))
		p1y.push(player2Y - random(15,50))
	}
	
	print(p1x)
	p1Traps = []
	p2Traps = []

	if(getP === true){
		
		// ellipse(p1[1], 30,30);
		// p1Traps.push(p);
		// p1.splice(0);

		// player1Score = p1.length;

		// if(player1Score <= 0){
		// 	player2win = true;
		// }
		
		// add++
	}

	if(getR === true){
 
		// fill(255)
		// ellipse(p2[1], 20,20);
		// p2.splice();
		// fill(0)
		// player2Score = p2.length;

		// if(player2Score <= 0){
		// 	player1win = true;
		// }
	}

	for (i=0; i<p1Traps.length; i++){

		if(dist(player2X, player2Y, p1Traps[i]) < 20){

			p1.push(p1Traps[i])

			fill(0)
			ellipse(20,20, p1Traps[i]);

			p1Traps.splice(i)


		}
	}

	for (i=0; i<p2Traps.length ; i++){

		if(dist(player1X, player1Y, p2Traps[i]) < 20){

			p2.push(p2Traps[i])

			fill(0)
			ellipse(20,20, p2Traps[i]);
			
			p2Traps.splice(i)
		}
	}


}
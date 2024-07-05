nightBool = false;
dayBool = true;

function setup() {
  createCanvas(650, windowHeight);
  
}

function keyPressed(){

  if(key == 'n'){
    nightBool = true;
    dayBool = false;
  }

  if (key == 'd'){
    nightBool = false;
    dayBool = true;
  }
}

function draw() {
  background(220);
  // make night time
  if (mouseX > (700/2)){
    background(0);
  }
  
  // IDEA: make an ocean and have the waves move with the mouse
  
  //mouseIsPressed is a common boolean
  
  
  //Waves
  
  fill(0,0,255);
  circle(mouseX-500, 350, 200);
  if (mouseX>(700/2)){
    fill(0)
  }else{
    fill(220);
  }
  noStroke();
  circle(mouseX-480,370,200)
  
  fill(0,0,255);
  circle(mouseX-250, 350, 200);
  if (mouseX>(700/2)){
    fill(0)
  }else{
    fill(220);
  }
  noStroke();
  circle(mouseX-230,370,200)
  
  fill(0,0,255);
  circle(mouseX, 350, 200);
  if (mouseX>(700/2)){
    fill(0)
  }else{
    fill(220);
  }
  noStroke();
  circle(mouseX+20,370,200)
  
  fill(0,0,255);
  circle((mouseX+250), 350, 200);
  if (mouseX>(700/2)){
    fill(0)
  }else{
    fill(220);
  }
  noStroke();
  circle((mouseX+270),370,200)
  
  fill(0,0,255);
  circle((mouseX+500), 350, 200);
  if (mouseX>(700/2)){
    fill(0)
  }else{
    fill(220);
  }
  noStroke();
  circle((mouseX+520),370,200)
  
  // Sea
  fill(0,0,255);
  rect(0,350, 650, 300)
  
  //Sun/moon

  if(dayBool == true){
    fill(255,255,0);
    noStroke();
    circle(mouseX, -mouseX*[Math.cos(mouseX/450)]+200, 100)
  }
  
  if(nightBool == true){
    fill(255,255,0);
    noStroke();
    circle(mouseX, -mouseX*[Math.cos(mouseX/450)]+200, 100)
    if (mouseX>(700/2)){
      fill(0)
    }else{
      fill(220);
    }
    circle(mouseX-20, -mouseX*[Math.cos(mouseX/450)]+200, 100)
  }
  
  
  
}

var ballx = 50;
var bally = 345;

var gravity = 0.1;
var vy = -0.25;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  //background
  background("lightblue");
  fill("green");
  noStroke;
  rect(0,370,400,30);


  //ball
  fill("red");
  circle(ballx,bally,50);
  
  //gravity
  vy += gravity;
  bally += vy;
  bally = constrain(bally , 0 , 345);
  if(vy > 5){
    vy = 5;
  }
  
  //movement
  if(keyCode === RIGHT_ARROW){
    ballx += 2;
  }
  if(keyCode === LEFT_ARROW){
    ballx -= 2;
  }
  ballx = constrain(ballx , 25 , 375);


  //floor 1
  rect(350,280,400,20);
  if(ballx < 400 && ballx > 350 && bally > 240 && bally < 280){
    bally = constrain(bally,0,255);
  }

  //floor 2
  rect(0,230,50,20);
  if(ballx < 45 && ballx > 0 && bally > 200 && bally < 230){
    bally = constrain(bally,0,205);
  }
} 

//jump
function mousePressed(){
  vy = -4;
}
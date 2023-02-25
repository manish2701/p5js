var xpaddle = 210;
var ypaddle = 580;
var xball = 250;
var yball = 0;

var xspeed = 7;
var yspeed = 5;

var xpspeed = 3;
var ypspeed = 3;

function setup() {
  createCanvas(500, 600);
}

function draw() {
  background("black");  

  stroke("white");
  strokeWeight(2)
  rect(xpaddle - 50 , ypaddle , 100 , 15);

  fill("black");
  circle(xball,yball,20);

 xball = xball + xspeed;
 yball = yball + yspeed;

  xpaddle = xball;

  if(xball > width || xball < 0){
    xspeed = xspeed * -1;
  }
  
  if(yball > ypaddle || yball < 0){
    yspeed = yspeed * -1;
  }

}


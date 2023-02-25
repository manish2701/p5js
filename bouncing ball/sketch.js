var xball = 300;
var yball = 190;

var xspeed = 3;
var yspeed = 3;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("black");
  fill("yellow")
  stroke("white");
 //ball
  let ball = rect(xball , yball , 50, 50 );
  yball = yball + yspeed;
  xball = xball + xspeed;


  
  if(yball+48 > height || yball < 0){
    yspeed = yspeed * -1;
  }
  
  if(xball+48 > width || xball < 0){
    xspeed = xspeed * -1;
  }


}

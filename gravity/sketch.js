var gravity = 0.1;
var y = 50;
var vy = -1.0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  ellipse(200, y, 60, 60);
  vy = vy + gravity;
  y = y + vy;
  y = constrain(y, -10, 370);
}

function mousePressed() {
  vy = -5;
}

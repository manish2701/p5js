function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background("black");
  translate(200 , 200);
  rotate(-90);

  let hr = hour();
  let mn = minute();
  let sc = second();

  strokeWeight(5);
  noFill();

  //minute hand
  let end1 = map(sc , 0 , 60 , 0 , 360);
  stroke(255 , 100 , 150);
  arc(0, 0 , 300 , 300 , 0 , end1);

  push();
  rotate(end1);
  stroke(255 , 100 , 150);
  line(0,0,120,0);
  pop();

  //minute hand
  let end2 = map(mn , 0 , 60 , 0 , 360);
  stroke(150 , 255 , 100);
  arc(0, 0 , 280 , 280 , 0 , end2);

  push();
  rotate(end2);
  stroke(150 , 255 , 100);
  line(0,0,80,0);
  pop();  

  //hour hand
  let end3 = map(hr % 12 , 0 , 12 , 0 , 360);
  stroke(100 , 150 , 255);
  arc(0, 0 , 260 , 260 , 0 , end3);

  push();
  rotate(end3);
  stroke(100 , 150 , 255);
  line(0,0,60,0);
  pop();

}

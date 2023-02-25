var s;
var scl = 15;
var food;

function setup() {
 
 createCanvas(600, 600);
 s = new Snake();
 frameRate(10);
 pickLocation();
}

function pickLocation(){
  var rows = floor(height/scl);
  var cols = floor(width/scl);
  food = createVector(floor(random(cols)) ,floor(random(rows)));
  food.mult(scl);
}

function draw() {
  background(70);


  s.update();
  s.show();

  if(s.eat(food)){
    pickLocation();
  }
  
  fill(225 , 0 , 100);
  rect(food.x , food.y , scl , scl);
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    s.dir(0 , -1);
  }else if (keyCode === DOWN_ARROW){
    s.dir(0 , 1);
  }else if (keyCode === RIGHT_ARROW){
    s.dir(1 , 0);
  }else if (keyCode === LEFT_ARROW){
    s.dir(-1 , 0);
  }


}

function Snake(){
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];


  this.dir = function(x , y){
    this.xspeed = x;
    this.yspeed = y;
  }

  this.eat = function(pos){
    var d = dist(this.x, this.y, pos.x , pos.y);
    if (d < 2){
      this.total++;
      return true;
    }else{
      return false;
    }
  }

  this.update = function(){
    if(this.total === this.tail.length){
      for(var i = 0; i < this.tail.length-1; i++){
      this.tail[i] = this.tail[i+1];
      }
    }   
    this.tail[this.total - 1] = createVector(this.x , this.y);

    this.x = this.x + this.xspeed*scl;
    this.y = this.y + this.yspeed*scl;

    this.y = constrain(this.y , 0 , width-scl);   
    this.x = constrain(this.x , 0 , height-scl);


  }

  this.show = function(){
    fill(225);
    for(var i = 0; i < this.total; i++){
      rect(this.tail[i].x , this.tail[i].y , scl , scl);      
    }

    fill(225);
    rect(this.x , this.y , scl , scl);

  }

}



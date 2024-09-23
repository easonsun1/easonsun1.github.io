var pointSize=120;
var myFont;
function preLoad(){
  myFont=loadFont("data/romant__.ttf");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  fill(255);
  textSize(120);
 }
function draw() {
  ///background(0, 0, 0, 24);
  ///text('HELLO', mouseX, mouseY);
  
  }

function mousePressed() {
  //background(0);
  } 
  
 function keyTyped() { 
   text(key, mouseX, mouseY);
 }
 
 function keyPressed() {
   if (keyCode === LEFT_ARROW){
     pointSize-=10;
   }
   if (keyCode === RIGHT_ARROW){
     pointSize+=10;
   }
   textSize(pointSize);
 }

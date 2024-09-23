var mygreen, myblue, myred;
var mygreen2, myblue2, myred2;
var mygreen3, myblue3, myred3;

function setup() {
  createCanvas(windowWidth, windowHeight);

  background(255, 255, 0);
  fill(245, 66, 111);
  frameRate(30);
  colorMode(HSB)

  myblue2 = random(256);
  myred2 = random(256);
  mygreen2 = random(256);

  myblue3 = random(256);
  myred3 = random(256);
  mygreen3 = random(256);
}

function draw() {
  background(0)

  stroke(myred2, mygreen2, myblue2)
  strokeWeight(100);
  line(100, 100, width / 2 - 100, 100)
  line(100, height / 2, width / 2 - 100, height / 2)
  line(100, height - 100, width / 2 - 100, height - 100)
  line(100, 100, 100, height - 100)


  stroke(myred3, mygreen3, myblue3)
  noFill()
  strokeWeight(100);
  arc(width / 4 * 3 + 100, 260, width / 2 - 100, width / 4, PI, TWO_PI - 1)
  arc(width / 4 * 3 - 100, height - 260, width / 2 - 100, width / 4, 0, PI - 1)
  line(992, 265, 1534, 559)

  myblue2 = (myblue2 + 2) % 255;
  myred2 = (myred2 + 2) % 255;
  mygreen2 = (mygreen2 + 2) % 255;
  myblue3 = (myblue3 + 2) % 255;
  myred3 = (myred3 + 2) % 255;
  mygreen3 = (mygreen3 + 2) % 255;

}

function mousePressed() {
  myblue = random(256);
  myred = random(256);
  mygreen = random(256);
  background(myblue, myred, mygreen);
} 

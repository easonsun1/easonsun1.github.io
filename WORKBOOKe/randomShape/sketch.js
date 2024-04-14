let pos = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 100; i++) {
    pos.push({
      x: random(width),
      y: random(height),
      shape: int(random(3)),
    });
  }
}

function draw() {
  background(0);

  noFill();
  stroke(255);
  let s = 40;
  for (let i = 0; i < pos.length; i++) {
    let target = pos[i];
    if (target.shape == 0) {
      ellipse(target.x, target.y, s, s);
    } else if (target.shape == 1) {
      rect(target.x, target.y, s, s);
    } else if (target.shape == 2) {
      triangle(
        target.x,
        target.y - s / 2,
        target.x - s / 2,
        target.y + s / 2,
        target.x + s / 2,
        target.y + s / 2
      );
    }
  }
}

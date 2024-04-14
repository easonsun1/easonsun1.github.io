let song;
let button;
let amp;
let vol;
let volumes = [];

let fft;

let minVol,
  maxVol = 0;

let bg;
function preload() {
  song = loadSound("09innocent.mp3");
  bg = loadImage('bg.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Button default settings
  button = createButton("PAUSE");
  button.mousePressed(toggle);
  button.position(16, height - 32)
  song.play();
  song.setVolume(1);

  // Amplitude tracking
  amp = new p5.Amplitude();

  // Frequency tracking
  // fft = new p5.FFT(0.8, 512);
}

function draw() {
  image(bg, 0, 0, width, height)

  textSize(18);
  fill(255);
  noStroke();
  text("Assignment 2", 20, 40);
  // textSize(12);
  // text("as intensity of fire", 20, 60);

  // Analyse volume
  if (song.isPlaying()) {
    vol = amp.getLevel();
    volumes.push(vol);
  }

  // Circle reacts to volume
  noFill();
  strokeWeight(2);
  stroke(255);
  let mapVol = map(vol, 0, 0.5, 100, height);
  circle(width / 2, height/2, mapVol);

  // Line graph
  if (song.isPlaying) {
    beginShape();
    for (let i = 0; i < volumes.length; i++) {
      noFill();
      let mapVolumes = map(volumes[i], 0, 0.4, 0, height / 2);
      strokeWeight(3);
      stroke(255);
      point(i * 2, height-mapVolumes);
      strokeWeight(1.2);
      vertex(i * 2, height-mapVolumes);
    }
    endShape();
  }

  // Move graphs if it hits edge of canvas
  if (volumes.length > width / 2) {
    volumes.splice(0, 1);
  }
  
}

function toggle() {
  if (!song.isPlaying()) {
    song.play();
    song.setVolume(1);
    button.html("PAUSE");
  } else if (song.isPlaying()) {
    song.pause();
    button.html("PLAY");
  }
}
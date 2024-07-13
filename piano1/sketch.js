let sounds = [];
let playFreq = [];
let imgs = [];
let current = -1;
let slider;
let amp;
let levels = [];
let bgColor ;

let kk=['a','w','s','e','d','f','t','g','y','h','u','j','k','o','l']

function preload() {
  soundFormats("m4a");
  for (var i = 0; i < 15; i++) {
    let sound = loadSound("glockenspiel.m4a");
    sound.rate(0.5 * pow(2, i / 12)); 
    sounds.push(sound);
    playFreq.push(0);
  }

  for (let i = 1; i <= 8; i++) {
    imgs.push(loadImage("images/" + i + ".png"));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  imageMode(CENTER);
  textAlign(CENTER);

  slider = createSlider(0, 1, 0.5, 0.1);
  slider.position(50, 120);
  slider.size(150);
 bgColor=color(3, 106, 151)
  amp = new p5.Amplitude();
}

function draw() {
  background(bgColor);

  let level = amp.getLevel();
  levels.push(level);

  beginShape();
  for (let i = 0; i < levels.length; i++) {
    noFill();
    let mapLevels = map(levels[i], 0, 0.4, 0, height);
    strokeWeight(3);
    stroke(255);
    point(i * 2, height - mapLevels);
    strokeWeight(1.2);
    vertex(i * 2, height - mapLevels);
  }
  endShape();
  
  if (levels.length > width / 2) {
    levels.splice(0, 1);
  }

  let vol = slider.value();
  noStroke();
  for (var i = 0; i < sounds.length; i++) {
    let sound = sounds[i];
    sound.setVolume(vol);

    if (sound.isPlaying()) {
      fill(220);
    } else {
      fill(255);
     
    }
    let x = width / 2 + i * 28 - 415 / 2;
    let y = height/2;
    if ([1, 3, 6, 8, 10, 13].includes(i)) {
      y -= 20;
      if (sound.isPlaying()) {
        fill(100);
      } else {
        fill(0);
      }
    }

    rect(x, y, 25, 70);

    if ([1, 3, 6, 8, 10, 13].includes(i)) {
    fill(255)
    }
    else{fill(0)}
    text(kk[i],x+10,y+50)
  }

  if (current != -1) {
    image(imgs[current], width / 2, 300);
  }

  fill(255);
  textSize(56);
  text("PIANO",width/2-260,height-200)
  
  let message = "THE  KEYBOARD";
  let x = width / 2 - textWidth(message) / 2;
  let y = 100;
  let letters = split(message, '');
  
  for (let i = 0; i < letters.length; i++) {
    if (i % 2 === 0) {
      fill(0); 
    } else {
      fill(255); 
    }
    text(letters[i], x, y);
    x += textWidth(letters[i]);
  }
  fill(0)
  text("————————————", width / 2, 150);
  textSize(20)
  text("Becoming the next musician",width / 2, 160)
  push()
  textAlign(LEFT)
  textSize(16)

  fill(255)
  text("Life is like a piano the white keys represent happiness\n and the black shows sadness.but as you\ngo through life's journey,remember\nthat the black keys\nalso makes music",width/2-350,height-160)
  
  text("Tips:\nYou can drag the slider to change the volume\npress the keyboard\nto produce different wonderful music",50,200)

  pop ()


}





function keyPressed() {
  if (key == "a") {
    sounds[0].play();
  }
  if (key == "w") {
    sounds[1].play();
  }
  if (key == "s") {
    sounds[2].play();
  }
  if (key == "e") {
    sounds[3].play();
  }
  if (key == "d") {
    sounds[4].play();
  }
  if (key == "f") {
    sounds[5].play();
  }
  if (key == "t") {
    sounds[6].play();
  }
  if (key == "g") {
    sounds[7].play();
  }
  if (key == "y") {
    sounds[8].play();
  }
  if (key == "h") {
    sounds[9].play();
  }
  if (key == "u") {
    sounds[10].play();
  }
  if (key == "j") {
    sounds[11].play();
  }
  if (key == "k") {
    sounds[12].play();
  }
  if (key == "o") {
    sounds[13].play();
  }
  if (key == "l") {
    sounds[14].play();
  }

  current = int(random(imgs.length));
  bgColor = color(random(255), random(255), random(255));
}
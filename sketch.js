var breg;
var brendArp;
var brendBass;
var eis;
var felsen;
var kapelle;
var linach;
var tanne;
var brendVisual;

let stopAudio;
let yPos = 0;

/* var ampBreg;
var volHistoryBreg = []; */
var env;

function preload() {
  breg = loadSound("BREG_V2.wav");
  brendArp = loadSound("BREND_ARP_V1.wav");
  brendBass = loadSound("BREND_BASS_V1.wav");
  eis = loadSound("EIS_V1.wav");
  felsen = loadSound("FELSEN_SNARE_V1.wav");
  kapelle = loadSound("KAPELLE_V1.wav");
  linach = loadSound("LINACHTALSPERRE_V1.wav");
  tanne = loadSound("TANNE_KICK_V1.wav");

  brendVisual = loadImage("Brend.png");
  linachVisual = loadImage("Linachtalsperre.png");
  kapelleVisual = loadImage("Kapelle.png");
  tanneVisual = loadImage("tintenbaum.png");
}

function keyReleased() {
  switch (keyCode) {
    case 65:
      fadeAudio(breg);
      break;
    case 83:
      fadeAudio(brendArp);
      break;
    case 68:
      fadeAudio(brendBass);
      break;
    case 70:
      fadeAudio(eis);
      break;
    case 71:
      fadeAudio(felsen);
      break;
    case 72:
      fadeAudio(kapelle);
      break;
    case 74:
      fadeAudio(linach);
      break;
    case 75:
      fadeAudio(tanne);
      break;
  }
}

function keyTyped() {

  switch (keyCode) {
    case 65:
      playAudio(breg);
      break;
    case 83:
      playAudio(brendArp);
      break;
    case 68:
      playAudio(brendBass);
      drawImage(brendVisual);
      break;
    case 70:
      playAudio(eis);
      break;
    case 71:
      playAudio(felsen);
      break;
    case 72:
      playAudio(kapelle);
      break;
    case 74:
      playAudio(linach);
      break;
    case 75:
      playAudio(tanne);
      break;
  }
};

function playAudio(_audio) {
  clearTimeout(stopAudio);
  _audio.stop();
  _audio.setVolume(1);
  _audio.play();
}

function fadeAudio(_audio) {
  _audio.setVolume(0, 0.4);
  stopAudio = setTimeout(function () { _audio.stop(); }, 400);
}

function setup() {
  createCanvas(640, 480);
  //amp = new p5.Amplitude()
}

function drawImage(_image) {
  // console.log("image drawn");
  // image(_image, 10, 10);
}

function draw() {
  background(220);
  yPos = yPos - 1;
  if (yPos < 0) {
    yPos = height-350;
  }
  image(brendVisual, 10, yPos, 248, 350);
  // image(kapelleVisual, 300, 10, 350, 248);
  // image(linachVisual, 270, 250, 350, 248);
  // image(tanneVisual, 220, 70, 248, 351);

  /* var vol = ampBreg.getLevel();
  volHistoryBreg.push(vol);
  stroke(255);
  for (let index = 0; index < volHistoryBreg.length; index++) {
    var y = map(volHistoryBreg[index], 0, 1, height, 0)
    point(index, volHistoryBreg[index]);
  } */

}


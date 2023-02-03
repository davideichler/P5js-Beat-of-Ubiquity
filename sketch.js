var breg;
var brendArp;
var brendBass;
var eis;
var felsen;
var kapelle;
var linach;
var tanne;

var bregMoshed;
var brendMoshed;
var eisMoshed;
var felsenMoshed;
var kapelleMoshed;
var linachtalMoshed;
var tanneGif1;
var tanneGif2;  
var logo;
var font;

let stopAudio;
let yPos = 0;

let bregPressed = false;
let brendPressed = false;
let kapellePressed = false;
let felsenPressed = false;
let linachPressed = false;
let tannePressed = false;
let eisPressed = false;
let startApplication = false

function preload() {
  breg = loadSound("soundsmp3/BREG_V2.mp3");
  brendBass = loadSound("soundsmp3/BREND_BASS_V1.mp3");
  eis = loadSound("EIS_V1.wav");
  felsen = loadSound("soundsmp3/FELSEN_SNARE_V1.mp3");
  kapelle = loadSound("soundsmp3/KAPELLE_V1.mp3");
  linach = loadSound("soundsmp3/LINACHTALSPERRE_V1.mp3");
  tanne = loadSound("soundsmp3/TANNE_KICK_V1.mp3");

  bregMoshed = loadImage("Edwin/breg_moshed.gif");
  brendMoshed = loadImage("Edwin/brend_moshed.gif");
  eisMoshed = loadImage("Edwin/eis_moshed.gif");
  felsenMoshed = loadImage("Edwin/felsen_moshed.gif");
  kapelleMoshed = loadImage("Edwin/kapelle_moshed.gif");
  linachtalMoshed = loadImage("Edwin/linachtalsperre_moshed.gif");
  tanneGif1 = loadImage("GIFS/Tanne1Cut.gif");
  logo = loadImage("logo.png")
  font = loadFont("OCRAEXT.TTF");
}

function keyReleased() {
  switch (keyCode) {
    case 65:
      fadeAudio(breg);
      bregPressed = false;
      break;
    case 68:
      fadeAudio(brendBass);
      brendPressed = false;
      break;
    case 70:
      fadeAudio(eis);
      eisPressed = false;
      break;
    case 71:
      fadeAudio(felsen);
      felsenPressed = false;
      break;
    case 72:
      fadeAudio(kapelle);
      kapellePressed = false;
      break;
    case 74:
      fadeAudio(linach);
      linachPressed = false;
      break;
    case 83:
      fadeAudio(tanne);
      tannePressed = false;
      break;
  }
}

function keyTyped() {

  console.log(keyCode);

  switch (keyCode) {
    case 65:
      playAudio(breg);
      bregPressed = true;
      startApplication = true;
      break;
    case 68:
      playAudio(brendBass);
      brendPressed = true;
      startApplication = true;
      break;
    case 70:
      playAudio(eis);
      eisPressed = true;
      startApplication = true;
      break;
    case 71:
      playAudio(felsen);
      felsenPressed = true;
      startApplication = true;
      break;
    case 72:
      playAudio(kapelle);
      kapellePressed = true;
      startApplication = true;
      break;
    case 74:
      playAudio(linach);
      linachPressed = true;
      startApplication = true;
      break;
    case 83:
      playAudio(tanne);
      tannePressed = true;
      startApplication = true;
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
  createCanvas(1280, 720);
  textFont(font);
  textAlign(CENTER, CENTER);
  textSize(20);
}

function draw() {
  background(0);
  if (startApplication != true) {
    //image(logo, 0, 0, 877, 110);
    text("press 'a' 's' 'd' 'f' 'g' 'h' or 'j' to play", 600, 300)
    fill(255, 255, 255);
  } else if (startApplication == false) {
    fill(0, 0, 0);
  
  }

  if (bregPressed == true) {
    image(bregMoshed, 0, 0, 1280, 720);
  }
  
  if (brendPressed == true) {
    image(brendMoshed, 0, 0, 1280, 720);
  }

  if (eisPressed == true) {
    image(eisMoshed, 0, 0, 1280, 720)
  }

  if (kapellePressed == true) {
    //image(kapelleGif2, 247, 6, 786, 768);
    image(kapelleMoshed, 0, 0, 1280, 720)
  }

  if (linachPressed == true) {
    image(linachtalMoshed, 0, 0, 1280, 720);
  }

  if (felsenPressed == true) {
    image(felsenMoshed, 0, 0, 1280, 720)
  }

  if (tannePressed == true) {
    image(tanneGif1, 0, 0, 1280, 720)
  }
}


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
// var tanneMoshed

// var brendVisual;
// var brendGif1;
// var brendGif2
// var brendGif3
// var felsenGif;
// var kapelleGif1;
// var kapelleGif2;
// var kapelleGif3;
// var linachGif1;
// var linachGif2;
var tanneGif1;
var tanneGif2;  

let stopAudio;
let yPos = 0;

let bregPressed = false;
let brendPressed = false;
let kapellePressed = false;
let felsenPressed = false;
let linachPressed = false;
let tannePressed = false;
let eisPressed = false;

/* var ampBreg;
var volHistoryBreg = []; */
var env;

function preload() {
  breg = loadSound("/soundsmp3/BREG_V2.mp3");
  //brendArp = loadSound("/soundsmp3/BREND_ARP_V1.wav");
  brendBass = loadSound("/soundsmp3/BREND_BASS_V1.mp3");
  eis = loadSound("EIS_V1.wav");
  felsen = loadSound("/soundsmp3/FELSEN_SNARE_V1.mp3");
  kapelle = loadSound("/soundsmp3/KAPELLE_V1.mp3");
  linach = loadSound("/soundsmp3/LINACHTALSPERRE_V1.mp3");
  tanne = loadSound("/soundsmp3/TANNE_KICK_V1.mp3");

  bregMoshed = loadImage("/Edwin/breg_moshed.gif");
  brendMoshed = loadImage("/Edwin/brend_moshed.gif");
  eisMoshed = loadImage("/Edwin/eis_moshed.gif");
  felsenMoshed = loadImage("/Edwin/felsen_moshed.gif");
  kapelleMoshed = loadImage("/Edwin/kapelle_moshed.gif");
  linachtalMoshed = loadImage("/Edwin/linachtalsperre_moshed.gif");
  // tanneMoshed = loadImage("/Edwin/tanne_moshed.gif");
  tanneGif1 = loadImage("/GIFS/Tanne1Cut.gif");
  // tanneGif2 = loadImage("/GIFS/Tanne2Cut.gif");

  // brendVisual = loadImage("Brend.png");
  // brendGif1 = loadImage("/GIFS/Brend1Cut.gif");
  // brendGif2 = loadImage("/GIFS/Brend2Cut.gif");
  // brendGif3 = loadImage("/GIFS/Brend3Cut.gif");
  // felsenGif = loadImage("/GIFS/Felsen3.gif");
  // kapelleGif1 = loadImage("/GIFS/Kapelle1Cut.gif");
  // kapelleGif2 = loadImage("/GIFS/Kapelle2Cut.gif")
  // kapelleGif3 = loadImage("/GIFS/Kapelle3Cut.gif")
  // kapelleGif3 = loadImage("/GIFS/Kapelle3Cut.gif");
  // linachGif1 = loadImage("/GIFS/Linach1Cut.gif");
  // linachGif2 = loadImage("/GIFS/Linach2Cut.gif");  
}

function keyReleased() {
  switch (keyCode) {
    case 32:
      fadeAudio(breg);
      bregPressed = false;
      break;
    // case 83:
    //   fadeAudio(brendArp);
    //   brendPressed = false;
    //   break;
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
    case 75:
      fadeAudio(tanne);
      tannePressed = false;
      break;
  }
}

function keyTyped() {

  console.log(keyCode);

  switch (keyCode) {
    case 32:
      playAudio(breg);
      bregPressed = true;
      break;
    // case 83:
    //   playAudio(brendArp);
    //   brendPressed = true;
    //   break;
    case 68:
      playAudio(brendBass);
      brendPressed = true;
      break;
    case 70:
      playAudio(eis);
      eisPressed = true;
      break;
    case 71:
      playAudio(felsen);
      felsenPressed = true;
      break;
    case 72:
      playAudio(kapelle);
      kapellePressed = true;
      break;
    case 74:
      playAudio(linach);
      linachPressed = true;
      break;
    case 75:
      playAudio(tanne);
      tannePressed = true;
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
  //createCanvas(640, 480);
  createCanvas(1280, 720);
  //amp = new p5.Amplitude()
}

function drawImage(_image) {
  // console.log("image drawn");
  // image(_image, 10, 10);
}

function draw() {
  background(0);
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


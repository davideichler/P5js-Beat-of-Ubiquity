var breg;
var brendArp;
var brendBass;
var eis;
var felsen;
var kapelle;
var linach;
var tanne;
var brendVisual;
var brendGif1;
var brendGif2
var brendGif3
var felsenGif;
var kapelleGif1;
var kapelleGif2;
var kapelleGif3;
var linachGif1;
var linachGif2;
var tanneGif1;
var tanneGif2;  

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
  brendGif1 = loadImage("/GIFS/Brend1Cut.gif");
  brendGif2 = loadImage("/GIFS/Brend2Cut.gif");
  brendGif3 = loadImage("/GIFS/Brend3Cut.gif");
  felsenGif = loadImage("/GIFS/Felsen3.gif");
  kapelleGif1 = loadImage("/GIFS/Kapelle1Cut.gif");
  kapelleGif2 = loadImage("/GIFS/Kapelle2Cut.gif")
  kapelleGif3 = loadImage("/GIFS/Kapelle3Cut.gif")
  kapelleGif3 = loadImage("/GIFS/Kapelle3Cut.gif");
  linachGif1 = loadImage("/GIFS/Linach1Cut.gif");
  linachGif2 = loadImage("/GIFS/Linach2Cut.gif");
  tanneGif1 = loadImage("/GIFS/Tanne1Cut.gif");
  tanneGif2 = loadImage("/GIFS/Tanne2Cut.gif");
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
  // yPos = yPos - 1; 
  // if (yPos < 0) {
  //   yPos = height;
  // }
  // image(brendVisual, 10, yPos, 248, 350);

  image(brendGif3, 100, 10);
  image(kapelleGif3, 500, 10);
  image(kapelleGif2, 300, 400);
  image(linachGif1, 800, 10);
  image(tanneGif1, 100, 400);
  image(felsenGif, 600, 330);
  

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


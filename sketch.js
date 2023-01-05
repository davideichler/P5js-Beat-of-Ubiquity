var breg;
var brendArp;
var brendBass;
var eis;
var felsen;
var kapelle;
var linach;
var tanne;

var env;

function preload() {
  breg = loadSound ("BREG_V2.wav", loaded);
  brendArp = loadSound ("BREND_ARP_V1.wav", loaded);
  brendBass = loadSound ("BREND_BASS_V1.wav", loaded);
  eis = loadSound ("EIS_V1.wav", loaded);
  felsen = loadSound ("FELSEN_SNARE_V1.wav", loaded);
  kapelle = loadSound ("KAPELLE_V1.wav", loaded);
  linach = loadSound ("LINACHTALSPERRE_V1.wav", loaded);
  tanne = loadSound ("TANNE_KICK_V1.wav", loaded);
}

function loaded() {
  keyTyped();
}

function keyTyped() {
  console.log(keyCode);
  if(keyCode == 65) {
    breg.play();
  }
  if(keyCode == 83) {
    brendArp.play();
  }
  if(keyCode == 68) {
    brendBass.play();
  }
  if(keyCode == 70) {
    eis.play();
  }
  if(keyCode == 71) {
    felsen.play();
  }
  if(keyCode == 72) {
    kapelle.play();
  }
  if(keyCode == 74) {
    linach.play();
  }
  if(keyCode == 75) {
    tanne.play();
  }
}

function setup() {
  createCanvas(640, 480);
  
  
}


function draw() {
  background(220);
}

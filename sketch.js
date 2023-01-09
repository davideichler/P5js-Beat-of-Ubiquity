
var breg;
var brendArp;
var brendBass;
var eis;
var felsen;
var kapelle;
var linach;
var tanne;
var brendVisual;

/* var ampBreg;
var volHistoryBreg = []; */
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

  brendVisual = loadImage ("Brend.png", loaded);
  linachVisual = loadImage ("Linachtalsperre.png", loaded);
  kapelleVisual = loadImage ("Kapelle.png", loaded);
  tanneVisual = loadImage ("tintenbaum.png", loaded);
}

function loaded() {
  keyTyped();
  //keyReleased();
}


function keyTyped() {
  console.log(keyCode);
  /* let bregChk = key (65);
  if (bregChk == true) {
    breg.play();
  } breg.stop(); */
  
  //console.log(bregChk);

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

  if(keyCode != 65) {
    breg.stop();
  }
  if(keyCode != 83) {
    brendArp.stop();
  }
  if(keyCode != 68) {
    brendBass.stop();
  }
  if(keyCode != 70) {
    eis.stop();
  }
  if(keyCode != 71) {
    felsen.stop();
  }
  if(keyCode != 72) {
    kapelle.stop();
  }
  if(keyCode != 74) {
    linach.stop();
  }
  if(keyCode != 75) {
    tanne.stop();
  } 

};

function setup() {
  createCanvas(640, 480);
  amp = new p5.Amplitude()
  
}


function draw() {
  background(220);
  image(brendVisual, 10, 10, 248, 350);
  image(kapelleVisual, 300, 10, 350, 248);
  image(linachVisual, 270, 250, 350, 248);
  image(tanneVisual, 220, 70, 248, 351);
  /* var vol = ampBreg.getLevel();
  volHistoryBreg.push(vol);
  stroke(255);
  for (let index = 0; index < volHistoryBreg.length; index++) {
    var y = map(volHistoryBreg[index], 0, 1, height, 0)
    point(index, volHistoryBreg[index]);
  } */
  
}


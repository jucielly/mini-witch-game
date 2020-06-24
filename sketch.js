const hipstaHeight = 135

let backgroundImage;
let characterImage;
let cenario;
let gameMusic;
let character;

function preload() {
  backgroundImage = loadImage('imagens/cenario/floresta.png')
  characterImage = loadImage("imagens/personagem/correndo.png")
  gameMusic = loadSound("sons/trilha_jogo.mp3")
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(backgroundImage, 2)
  character = new Character(characterImage)
  gameMusic.loop()

}

function draw() {
  cenario.show();
  character.show();
  cenario.move();
}


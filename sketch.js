const hipstaHeight = 135

let backgroundImage;
let characterImage;
let cenario;
let gameMusic;
let character;
let enemyImage;
let enemy;

const enemyMatriz = [
  [0, 0],
  [105, 0],
  [210, 0],
  [315, 0],
  [0, 104],
  [105, 104],
  [210, 104],
  [315, 104],
  [0, 208],
  [105, 208],
  [210, 208],
  [315, 208],
  [0, 312],
  [105, 312],
  [210, 312],
  [315, 312],
  [0, 409],
  [105, 409],
  [210, 409],
  [315, 409],
  [0, 503],
  [105, 503],
  [210, 503],
  [315, 503],
  [0, 609],
  [105, 609],
  [210, 609],
  [315, 609],
]

function preload() {
  backgroundImage = loadImage('imagens/cenario/floresta.png')
  characterImage = loadImage("imagens/personagem/correndo.png")
  enemyImage = loadImage("imagens/inimigos/gotinha.png")
  gameMusic = loadSound("sons/trilha_jogo.mp3")

}


function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(backgroundImage, 2)
  character = new Character(characterImage)
  enemy = new Enemy(enemyMatriz, enemyImage, width -52,52, 52, 104, 104)
  frameRate(30)
  gameMusic.loop()

}

function draw() {
  cenario.show();
  character.show();
  enemy.show()
  enemy.move()
  cenario.move();
}


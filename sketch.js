const hipstaHeight = 135

let backgroundImage;
let characterImage;
let cenario;
let gameMusic;
let jumpMusic;
let character;
let enemyImage;
let enemy;
let gameOverImage;
let gameOverMusic;

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

const characterMatriz = [
  [0, 0],
  [220, 0],
  [440, 0],
  [660, 0],
  [0, 270],
  [220, 270],
  [440, 270],
  [660, 270],
  [0, 540],
  [220, 540],
  [440, 540],
  [660, 540],
  [0, 810],
  [220, 810],
  [440, 810],
  [660, 810],
]

function preload() {
  backgroundImage = loadImage('imagens/cenario/floresta.png')
  characterImage = loadImage("imagens/personagem/correndo.png")
  enemyImage = loadImage("imagens/inimigos/gotinha.png")
  gameOverImage = loadImage("imagens/assets/game-over.png")
  gameMusic = loadSound("sons/MAZE.mp3")
  jumpMusic = loadSound("sons/jump.wav")
  gameOverMusic = loadSound("sons/game_over.mp3")


}


function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(backgroundImage, 2)
  character = new Character(characterMatriz, characterImage, 10, 110, hipstaHeight, 220, 270)
  enemy = new Enemy(enemyMatriz, enemyImage, width - 52, 52, 52, 104, 104)
  frameRate(30)
  gameMusic.loop()

}

function keyPressed() {
  if (key === "ArrowUp") {
    character.jump()
    jumpMusic.play()
  }
}

function draw() {
  cenario.show();
  character.show();
  character.applyPhysics()
  enemy.show()
  enemy.move()
  cenario.move();


  if(character.isCrashing(enemy)){
    console.log("bateu")
    const gameOverX =  (windowWidth /2 ) - (gameOverImage.width / 2)
    const gameOverY = (windowHeight/ 2) - (gameOverImage.height / 2)
    image(gameOverImage, gameOverX, gameOverY )
    console.log(gameOverImage)
    gameMusic.stop()
    gameOverMusic.play()
    noLoop()
    
  }

}


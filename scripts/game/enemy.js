class Enemy extends Animation {
    constructor(matriz, image, x,width, height, spriteWidth, spriteHeight) {
        super(matriz, image, x,width, height, spriteWidth, spriteHeight) 

        this.speed = 10
    }

    move() {
        this.x = this.x - this.speed

        if(this.x < -this.width) {
            this.x = width
        }
    }
}
class Character extends Animation {
    constructor(matriz, image, x, width, Height, spriteWidth, spriteHeight) {
        super(matriz, image, x, width, Height, spriteWidth, spriteHeight)

        this.baseY = height - this.Height
        this.y = this.baseY
        this.physics = 3
        this.jumpSpeed = 0

    }

    jump() {
        this.jumpSpeed = -50 
    }


    applyPhysics() {
        this.y = this.y + this.jumpSpeed
        this.jumpSpeed = this.jumpSpeed + this.physics

        if (this.y > this.baseY) {
           this.y = this.baseY
        }
    }

}
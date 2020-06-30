class Character extends Animation {
    constructor(matriz, image, x, Width, Height, spriteWidth, spriteHeight) {
        super(matriz, image, x, Width, Height, spriteWidth, spriteHeight)

        this.baseY = height - this.Height
        this.y = this.baseY
        this.physics = 3
        this.jumpSpeed = 0

    }

    jump() {
        console.log(this.y)
        if( this.y > windowHeight / 3) {
            this.jumpSpeed = -40
        }
    }


    applyPhysics() {
        this.y = this.y + this.jumpSpeed
        this.jumpSpeed = this.jumpSpeed + this.physics

        if (this.y > this.baseY) {
            this.y = this.baseY
        }
    }

    isCrashing(enemy) {
        const precision = .7
        const collide = collideRectRect(
            //rect(this.x, this.y, this.width, this.Height),
            //rect(enemy.x, enemy.y, enemy.width, enemy.Height),
            this.x,
            this.y,
            this.width * precision,
            this.Height * precision,
            enemy.x,
            enemy.y,
            enemy.width * precision,
            enemy.Height * precision,

        )
        return collide
    }

}
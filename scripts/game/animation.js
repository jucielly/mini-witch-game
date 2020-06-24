class Animation {
    constructor(matriz, image, x,width, height, spriteWidth, spriteHeight) {
        this.matriz = matriz
        this.image = image
        this.width = width
        this.height = height
        this.x = x
        this.y = height - this.height
        this.spriteHeight = this.spriteHeight
        this.spriteWidth = this.spriteWidth

        this.ActualFrame = 0
    }

    show() {
        image(this.image, this.x, this.height, this.width, this.height, this.matriz[this.ActualFrame][0], this.matriz[this.ActualFrame][1], this.spriteWidth, this.spriteHeight)
        this.animation()
    }

    animation() {
        this.ActualFrame++

        if (this.ActualFrame >= this.matriz.length - 1) {
            this.ActualFrame = 0
        }
    }
}
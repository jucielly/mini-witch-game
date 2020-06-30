class Animation {
    constructor(matriz, image, x, width, Height, spriteWidth, spriteHeight) {
        this.matriz = matriz
        this.image = image
        this.width = width
        this.Height = Height
        this.x = x
        this.y = height - this.Height
        this.spriteHeight = spriteHeight
        this.spriteWidth = spriteWidth


        this.ActualFrame = 0
    }

    show() {
        image(this.image, this.x, this.y, this.width, this.Height, this.matriz[this.ActualFrame][0], this.matriz[this.ActualFrame][1], this.spriteWidth, this.spriteHeight)
        this.animation()
    }

    animation() {
        this.ActualFrame++

        if (this.ActualFrame >= this.matriz.length - 1) {
            this.ActualFrame = 0
        }
    }
}
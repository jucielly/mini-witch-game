class Character  extends Animation{
    constructor(matriz, image, x,width, height, spriteWidth, spriteHeight) {
        super(matriz, image, x,width, height, spriteWidth, spriteHeight) 

        this.image = image
     
        this.ActualFrame = 0

    
    }

    
   

    show() {
        image(this.image, 0, height - hipstaHeight, 110, hipstaHeight, this.matriz[this.ActualFrame][0], this.matriz[this.ActualFrame][1], 220, 270)
        this.animation()
    }

}
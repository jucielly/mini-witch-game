class Character {
    constructor(image) {
        this.image = image
        this.matriz = [
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
    }

    show() {
        image(this.image, 0, height - hipstaHeight, 110, hipstaHeight, 0, 0, 220, 270)
    }

    animation() {

    }
}
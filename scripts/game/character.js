class Character {
    constructor(image) {
        this.image = image
    }

    show() {
        image(this.image, 0, height - hipstaHeight, 110, hipstaHeight, 0, 0, 220, 270)
    }

    animation() {

    }
}
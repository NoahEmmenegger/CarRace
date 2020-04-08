class CarRace extends Phaser.Scene {
    constructor() {
        super({key:"CarRace"});
    }

    preload() {
        this.load.image('land', './assets/land.png')
        this.load.image('street', './assets/street.png')
    }

    create() {
        this.land = this.add.image(480, 270, 'land')
        this.land.setScale(0.5)

        this.street = this.add.image(480, 270, 'street')
        this.street.setScale(0.5)
    }

    update(delta) {
        
    }
}
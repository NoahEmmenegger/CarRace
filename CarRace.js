class CarRace extends Phaser.Scene {
    constructor() {
        super({key:"CarRace"});
    }

    preload() {
        this.load.image('land', './assets/land.png')
        this.load.image('street', './assets/street.png')
        this.load.image('car_1', './assets/car_1.png')
        this.load.image('car_2', './assets/car_2.png')
    }

    create() {
        this.land = this.add.image(480, 270, 'land')
        this.land.setScale(0.5)

        this.street = this.add.image(480, 270, 'street')
        this.street.setScale(0.5)

        this.car_1 = this.add.image(200, 300, 'car_1')
        this.car_1.setScale(0.5)

        this.car_2 = this.add.image(300, 300, 'car_2')
        this.car_2.setScale(0.5)
    }

    update(delta) {
        
    }
}
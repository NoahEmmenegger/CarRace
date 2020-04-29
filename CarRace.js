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
        this.land = this.physics.add.sprite(480, 270, 'land');
        this.land.setScale(0.5)

        this.street = this.add.image(480, 270, 'street')
        this.street.setScale(0.5)

        this.car_1 = this.physics.add.sprite(200, 300, 'car_1')
        this.car_1.setScale(0.5)
        var car_1Physic = this.physics.add.overlap(this.land, this.car_1, (land, car) => this.checkCollision(land, car, car_1Physic), null, this);


        this.car_2 = this.physics.add.sprite(300, 300, 'car_2')
        this.car_2.setScale(0.5)
        var car_2Physic = this.physics.add.overlap(this.land, this.car_2, (land, car) => this.checkCollision(land, car, car_2Physic), null, this);
    }

    update(delta) {
        
    }


    checkCollision(land, car, physic) {
        console.log(car)
    }
}
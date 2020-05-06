class CarRace extends Phaser.Scene {
    constructor() {
        super({key:"CarRace"});
    }

    preload() {
        this.load.image('land', './assets/carrace back.png')
        this.load.image('street', './assets/street.png')
        this.load.image('car_1', './assets/car_1.png')
        this.load.image('car_2', './assets/car_2.png')
        this.cursors = this.input.keyboard.createCursorKeys();
        this.wasdCursors = this.input.keyboard.addKeys('W,S,A,D');
    }

    create() {
        this.carSpeed = 150;
        this.speedCar_1 = 0;
        this.speedCar_2 = 0;
        this.staticFriction = 1;

        this.land = this.physics.add.sprite(480, 270, 'land');
        this.land.setScale(0.5)

        this.street = this.add.image(480, 270, 'street')
        this.street.setScale(0.5)

        this.car_1 = this.physics.add.image(200, 300, 'car_1');
        this.car_1.setScale(0.5)
        var car_1Physic = this.physics.add.overlap(this.land, this.car_1, (land, car) => this.checkCollision(land, car, car_1Physic), null, this);


        this.car_2 = this.physics.add.sprite(300, 300, 'car_2')
        this.car_2.setScale(0.5)
        var car_2Physic = this.physics.add.overlap(this.land, this.car_2, (land, car) => this.checkCollision(land, car, car_2Physic), null, this);
    }

    update(delta) {
        this.CarDriveCheck();
    }

    CarDriveCheck()
    {
        if (this.cursors.left.isDown) {
            this.car_1.rotation -= 0.1;
        }   
        if (this.cursors.right.isDown) {
            this.car_1.rotation += 0.1;
        }

        if(this.cursors.up.isDown)
        {
            this.speedCar_1 = this.carSpeed; 
        }
        else if(this.cursors.down.isDown){
            this.speedCar_1 = -this.carSpeed;
        }
        else{
            this.speedCar_1 = 0;
        }

        if (this.wasdCursors.A.isDown) {
            this.car_2.rotation -= 0.1;
        }   
        if (this.wasdCursors.D.isDown) {
            this.car_2.rotation += 0.1;
        }

        if(this.wasdCursors.W.isDown)
        {
            this.speedCar_2 = this.carSpeed; 
        }
        else if(this.wasdCursors.S.isDown){
            this.speedCar_2 = -this.carSpeed;
        }
        else{
            this.speedCar_2 = 0;
        }

        this.car_1.setVelocityX(Math.sin(this.car_1.rotation)*this.speedCar_1);
        this.car_1.setVelocityY(-Math.cos(this.car_1.rotation)*this.speedCar_1);

        this.car_2.setVelocityX(Math.sin(this.car_2.rotation)*this.speedCar_2);
        this.car_2.setVelocityY(-Math.cos(this.car_2.rotation)*this.speedCar_2);
    }


    checkCollision(land, car, physic) {
        console.log(car)
    }
}
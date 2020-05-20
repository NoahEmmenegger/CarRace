class CarRace extends Phaser.Scene {
    constructor() {
        super({key:"CarRace"});
    }

    preload() {
        this.load.image('land', './assets/land.png')
        this.load.image('street', './assets/street.png')
        this.load.image('car_1', './assets/car_1.png')
        this.load.image('car_2', './assets/car_2.png')
        this.cursors = this.input.keyboard.createCursorKeys();
        this.wasdCursors = this.input.keyboard.addKeys('W,S,A,D');
    }

    create() {
        this.carSpeed = 50;
        this.carRotation = 0.1;

        this.speedCar_1 = 0;
        this.speedCar_2 = 0;
        this.staticFriction = 1;

        this.land = this.physics.add.sprite(480, 270, 'land');
        this.land.setScale(0.5)

        this.street = this.add.image(480, 270, 'street')
        this.street.setScale(0.5)

        this.car_1 = this.physics.add.image(230, 300, 'car_1');
        this.car_1.setScale(0.25)
        //var car_1Physic = this.physics.add.overlap(this.land, this.car_1, (land, car) => this.checkCollision(land, car, car_1Physic), null, this);


        this.car_2 = this.physics.add.sprite(245, 300, 'car_2')
        this.car_2.setScale(0.25)
        //var car_2Physic = this.physics.add.overlap(this.land, this.car_2, (land, car) => this.checkCollision(land, car, car_2Physic), null, this);

        var r1 = this.add.rectangle(375, 317, 241, 233, 0x6666ff);
        r1.setVisible(false)
        this.physics.add.existing(r1);
        var car_1Physic = this.physics.add.overlap(r1, [this.car_1, this.car_2], (land, car) => this.checkCollision(land, car, car_1Physic), null, this);

        var r2 = this.add.rectangle(577, 152, 188, 195, 0x6666ff);
        r2.setVisible(false)
        this.physics.add.existing(r2);
        var car_1Physic = this.physics.add.overlap(r2, [this.car_1, this.car_2], (land, car) => this.checkCollision(land, car, car_1Physic), null, this);

        var r3 = this.add.rectangle(550, 399, 148, 69, 0x6666ff);
        r3.setVisible(false)
        this.physics.add.existing(r3);
        var car_1Physic = this.physics.add.overlap(r3, [this.car_1, this.car_2], (land, car) => this.checkCollision(land, car, car_1Physic), null, this);

        var r4 = this.add.rectangle(233, 90, 430, 153, 0x6666ff);
        r4.setVisible(false)
        this.physics.add.existing(r4);
        var car_1Physic = this.physics.add.overlap(r4, [this.car_1, this.car_2], (land, car) => this.checkCollision(land, car, car_1Physic), null, this);

        var r5 = this.add.rectangle(119, 320, 200, 400, 0x6666ff);
        r5.setVisible(false)
        this.physics.add.existing(r5);
        var car_1Physic = this.physics.add.overlap(r5, [this.car_1, this.car_2], (land, car) => this.checkCollision(land, car, car_1Physic), null, this);

        var r6 = this.add.rectangle(580, 9, 300, 20, 0x6666ff);
        r6.setVisible(false)
        this.physics.add.existing(r6);
        var car_1Physic = this.physics.add.overlap(r6, [this.car_1, this.car_2], (land, car) => this.checkCollision(land, car, car_1Physic), null, this);

        var r7 = this.add.rectangle(756, 150, 100, 300, 0x6666ff);
        r7.setVisible(false)
        this.physics.add.existing(r7);
        var car_1Physic = this.physics.add.overlap(r7, [this.car_1, this.car_2], (land, car) => this.checkCollision(land, car, car_1Physic), null, this);

        var r8 = this.add.rectangle(630, 307, 200, 47, 0x6666ff);
        r8.setVisible(false)
        this.physics.add.existing(r8);
        var car_1Physic = this.physics.add.overlap(r8, [this.car_1, this.car_2], (land, car) => this.checkCollision(land, car, car_1Physic), null, this);

        var r9 = this.add.rectangle(708, 400, 100, 200, 0x6666ff);
        r9.setVisible(false)
        this.physics.add.existing(r9);
        var car_1Physic = this.physics.add.overlap(r9, [this.car_1, this.car_2], (land, car) => this.checkCollision(land, car, car_1Physic), null, this);

        var r10 = this.add.rectangle(450, 493, 500, 50, 0x6666ff);
        r10.setVisible(false)
        this.physics.add.existing(r10);
        var car_1Physic = this.physics.add.overlap(r10, [this.car_1, this.car_2], (land, car) => this.checkCollision(land, car, car_1Physic), null, this);
    }

    update(delta) {
        this.CarDriveCheck();
    }

    CarDriveCheck()
    {
        if (this.cursors.left.isDown) {
            this.car_1.rotation -= this.carRotation;
        }   
        if (this.cursors.right.isDown) {
            this.car_1.rotation += this.carRotation;
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
            this.car_2.rotation -= this.carRotation;
        }   
        if (this.wasdCursors.D.isDown) {
            this.car_2.rotation += this.carRotation;
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
        car.setPosition(238, 300)
        car.setRotation(0)
    }
}
var config = {
    type: Phaser.AUTO,
    width:960,
    height:540,
    backgroundColor: '#ffffff',
    scale: {
        autoCenter: true
    },
    physics: {
        default:'arcade'
    },
    scene: [ CarRace]
};

var game = new Phaser.Game(config);
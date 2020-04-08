var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: 0x000000,
  scene: [dextgameWelcomeScreen, dextgamePlayScreen, dextgamePauseScreen, dextgameLevelOne]
};

var text;
var graphics;
var timeoutID;
var touchCounter;

var game = new Phaser.Game(config);
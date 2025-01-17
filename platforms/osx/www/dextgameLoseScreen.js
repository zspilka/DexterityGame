class dextgameLoseScreen extends Phaser.Scene{
  constructor(){
    super({key:"loseScreen"});
  }

  preload(){

  }

  create(){
    var loseText = this.add.text(323, 200, 'Whoops, you took a finger off and lost the game! Would you like to try again?');
    continueButton = this.add.text(400,450, "Click me to Try Again", {fill: '#0f0'}).setInteractive()
    .on('pointerdown', ()=>this.actionOnClick())
    .on('pointerup', ()=>this.actionOnRelease());
  }

  actionOnClick(){
    continueButton.setStyle({ color: '#ff0'});
  }

  actionOnRelease(){
    this.scene.start("welcomeScreen");
  }


  update(){

  }

}

/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2018 - 2019 digitsensitive
 * @license      Digitsensitive
 */

export class MainScene extends Phaser.Scene {
  private phaserSprite: Phaser.GameObjects.Sprite;

  constructor() {
    super({
      key: "MainScene"
    });
  }

  preload(): void {
    this.load.image("logo", "./src/boilerplate/assets/phaser.png");
  }

  create(): void {
    // 受重力和反弹
    let logo = this.physics.add.image(400,100,"logo")
    logo.setVelocity(100,200);
    logo.setBounce(1,1);
    logo.setCollideWorldBounds(true);
  }
}

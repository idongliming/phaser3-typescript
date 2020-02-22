/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2018 - 2019 digitsensitive
 * @description  Space Invaders: Menu Scene
 * @license      Digitsensitive
 */

export class MenuScene extends Phaser.Scene {
  private startKey: Phaser.Input.Keyboard.Key;
  private bitmapTexts: Phaser.GameObjects.BitmapText[] = [];

  constructor() {
    super({
      key: "MenuScene"
    });
  }

  init(): void {
    this.startKey = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.S
    );
    this.startKey.isDown = false;
    this.initRegistry();
  }

  create(): void {
    this.bitmapTexts.push(
      this.add.bitmapText(
        this.sys.canvas.width / 2 - 65,
        this.sys.canvas.height / 2,
        "font",
        "PRESS S TO PLAY",
        8
      )
    );

    this.bitmapTexts.push(
      this.add.bitmapText(
        this.sys.canvas.width / 2 - 60,
        this.sys.canvas.height / 2 - 40,
        "font",
        "SPACE INVADERS",
        8
      )
    );
  }

  update(): void {
    if (this.startKey.isDown) {
      this.scene.start("HUDScene");
      this.scene.start("GameScene");
      this.scene.bringToTop("HUDScene");
    }
  }

  /**
   * 内置全局游戏数据管理器，在场景之间交换数据.
   * 这里我们用一个键来初始化变量。
   */
  private initRegistry(): void {
    this.registry.set("points", 0);
    this.registry.set("lives", 3);
    this.registry.set("level", 1);
  }
}

/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2018 - 2019 digitsensitive
 * @description  Space Invaders: HUD Scene
 * @license      Digitsensitive
 */

export class HUDScene extends Phaser.Scene {
  private bitmapTexts: Phaser.GameObjects.BitmapText[];

  constructor() {
    super({
      key: "HUDScene"
    });
  }

  init(): void {
    this.bitmapTexts = [];
  }

  create(): void {
    // 创建位图文本
    this.bitmapTexts.push(
      this.add.bitmapText(
        10,
        this.scene.systems.canvas.height - 20,
        "font",
        `Lives: ${this.registry.get("lives")}`,
        8
      )
    );
    this.bitmapTexts.push(
      this.add.bitmapText(
        10,
        10,
        "font",
        `Points: ${this.registry.get("points")}`,
        8
      )
    );

    // 创建事件
    const level = this.scene.get("GameScene");
    level.events.on("pointsChanged", this.updatePoints, this);
    level.events.on("livesChanged", this.updateLives, this);
  }

  private updatePoints() {
    this.bitmapTexts[1].setText(`Points: ${this.registry.get("points")}`);
  }

  private updateLives() {
    this.bitmapTexts[0].setText(`Lives: ${this.registry.get("lives")}`);
  }
}

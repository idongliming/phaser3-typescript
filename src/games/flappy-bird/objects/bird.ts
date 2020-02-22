/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2018 - 2019 digitsensitive
 * @description  Flappy Bird: Bird
 * @license      Digitsensitive
 */

export class Bird extends Phaser.GameObjects.Image {
  private jumpKey: Phaser.Input.Keyboard.Key;
  private isDead: boolean;
  private isFlapping: boolean;

  public getDead(): boolean {
    return this.isDead;
  }

  public setDead(dead: boolean): void {
    this.isDead = dead;
  }

  constructor(params) {
    super(params.scene, params.x, params.y, params.key, params.frame);

    // 图片
    this.setScale(3);
    this.setOrigin(0, 0);

    // 变量
    this.isDead = false;
    this.isFlapping = false;

    // 物理
    this.scene.physics.world.enable(this);
    this.body.setGravityY(1000);
    this.body.setSize(17, 12);

    // 输入
    this.jumpKey = this.scene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );

    this.scene.add.existing(this);
  }

  update(): void {
    //处理角变化
    if (this.angle < 30) {
      this.angle += 2;
    }

    // 处理输入
    if (this.jumpKey.isDown && !this.isFlapping) {
      this.isFlapping = true;
      this.body.setVelocityY(-350);
      this.scene.tweens.add({
        targets: this,
        props: { angle: -20 },
        duration: 150,
        ease: "Power0"
      });
    } else if (this.jumpKey.isUp && this.isFlapping) {
      this.isFlapping = false;
    }

    // 检查是否离开屏幕
    if (this.y + this.height > this.scene.sys.canvas.height) {
      this.isDead = true;
    }
  }
}

/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2018 - 2019 digitsensitive
 * @description  Flappy Bird: Boot Scene
 * @license      Digitsensitive
 */

export class BootScene extends Phaser.Scene {
  private loadingBar: Phaser.GameObjects.Graphics;
  private progressBar: Phaser.GameObjects.Graphics;

  constructor() {
    super({
      key: "BootScene"
    });
  }

  preload(): void {
    //设置背景并创建加载栏
    this.cameras.main.setBackgroundColor(0x98d687);
    this.createLoadingbar();

    // 传递值以更改加载栏的填充
    this.load.on(
      "progress",
      function(value) {
        this.progressBar.clear();
        this.progressBar.fillStyle(0xfff6d3, 1);
        this.progressBar.fillRect(
          this.cameras.main.width / 4,
          this.cameras.main.height / 2 - 16,
          (this.cameras.main.width / 2) * value,
          16
        );
      },
      this
    );

    // 删除栏图形，当加载完成
    this.load.on(
      "complete",
      function() {
        this.progressBar.destroy();
        this.loadingBar.destroy();
      },
      this
    );

    //加载了包
    this.load.pack(
      "preload",
      "./src/games/flappy-bird/assets/pack.json",
      "preload"
    );
  }

  update(): void {
    this.scene.start("MainMenuScene");
  }

  private createLoadingbar(): void {
    this.loadingBar = this.add.graphics();
    this.loadingBar.fillStyle(0x5dae47, 1);
    this.loadingBar.fillRect(
      this.cameras.main.width / 4 - 2,
      this.cameras.main.height / 2 - 18,
      this.cameras.main.width / 2 + 4,
      20
    );
    this.progressBar = this.add.graphics();
  }
}

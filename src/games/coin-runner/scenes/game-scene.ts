/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2018 - 2019 digitsensitive
 * @description  Coin Runner: Game Scene
 * @license      Digitsensitive
 */

import { Coin } from "../objects/coin";
import { Player } from "../objects/player";

export class GameScene extends Phaser.Scene {
  private background: Phaser.GameObjects.Image;
  private coin: Coin;
  private coinsCollectedText: Phaser.GameObjects.Text;
  private collectedCoins: number;
  private player: Player;

  constructor() {
    super({
      key: "GameScene"
    });
  }

  preload(): void {
    this.load.image(
      "background",
      "./src/games/coin-runner/assets/background.png"
    );
    this.load.image("player", "./src/games/coin-runner/assets/player.png");
    this.load.image("coin", "./src/games/coin-runner/assets/coin.png");
  }

  init(): void {
    this.collectedCoins = 0;
  }

  create(): void {
    // 创建背景
    this.background = this.add.image(0, 0, "background");
    // 设置原点
    this.background.setOrigin(0, 0);

    // 创建游戏对象
    // 随机产生金币
    this.coin = new Coin({
      scene: this,
      x: Phaser.Math.RND.integerInRange(100, 700),
      y: Phaser.Math.RND.integerInRange(100, 500),
      key: "coin"
    });
    // 创建游戏角色
    this.player = new Player({
      scene: this,
      x: this.sys.canvas.width / 2,
      y: this.sys.canvas.height / 2,
      key: "player"
    });

    // 创建文本，用来显示吃到的金币数
    this.coinsCollectedText = this.add.text(
      this.sys.canvas.width / 2,
      this.sys.canvas.height - 50,
      this.collectedCoins + "",
      {
        fontFamily: "Connection",
        fontSize: 38,
        stroke: "#fff",
        strokeThickness: 6,
        fill: "#000000"
      }
    );
  }

  update(): void {
    // 更新游戏对象，角色和金币
    this.player.update();
    this.coin.update();

    // 碰撞检测
    if (
      // 矩形和矩形几何相交
      Phaser.Geom.Intersects.RectangleToRectangle(
        this.player.getBounds(),
        this.coin.getBounds()
      )
    ) {
      this.updateCoinStatus();
    }
  }

  // 更新金币状态
  // 收集到的金币数量加一，更新显示的文本，改变金币的位置
  private updateCoinStatus(): void {
    this.collectedCoins++;
    this.coinsCollectedText.setText(this.collectedCoins + "");
    this.coin.changePosition();
  }
}

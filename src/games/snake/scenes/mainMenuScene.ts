/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2018 - 2019 digitsensitive
 * @description  Snake: Main Menu Scene
 * @license      Digitsensitive
 */

import { CONST } from "../const/const";

export class MainMenuScene extends Phaser.Scene {
  private startKey: Phaser.Input.Keyboard.Key;
  private bitmapTexts: Phaser.GameObjects.BitmapText[] = [];

  constructor() {
    super({
      key: "MainMenuScene"
    });
  }

  init(): void {
    // 监听S键
    this.startKey = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.S
    );

    // 如果当前分数超过最高分则更新最高分
    if (CONST.SCORE > CONST.HIGHSCORE) {
      CONST.HIGHSCORE = CONST.SCORE;
    }
    CONST.SCORE = 0;
  }

  preload(): void {
    this.load.bitmapFont(
      "snakeFont",
      "./src/games/snake/assets/font/snakeFont.png",
      "./src/games/snake/assets/font/snakeFont.fnt"
    );
  }

  create(): void {
    // 使用位图字体写文字，提示用户如何开始游戏
    this.bitmapTexts.push(
      this.add.bitmapText(
        this.sys.canvas.width / 2 - 28,
        this.sys.canvas.height / 2 - 10,
        "snakeFont",
        "S: PLAY",
        8
      )
    );

    // 使用位图字体写文字，提示用户如何控制🐍
    this.bitmapTexts.push(
      this.add.bitmapText(
        this.sys.canvas.width / 2 - 70,
        this.sys.canvas.height / 2 - 60,
        "snakeFont",
        "S N A K E",
        16
      )
    );

    //显示最高分
    this.bitmapTexts.push(
      this.add.bitmapText(
        this.sys.canvas.width / 2 - 45,
        this.sys.canvas.height / 2 + 30,
        "snakeFont",
        "HIGHSCORE: " + CONST.HIGHSCORE,
        8
      )
    );
  }

  update(): void {
    if (this.startKey.isDown) {
      this.scene.start("GameScene");
    }
  }
}

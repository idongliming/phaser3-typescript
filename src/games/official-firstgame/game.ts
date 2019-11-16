/**
 * @author       idonglimig <idongliming@qq.com>
 * @copyright    2019 - 2020 idongliming
 * @license      idongliming
 */

import "phaser";
import { MainScene } from "./scenes/mainScene";

// 主要（全局）游戏配置
const config: Phaser.Types.Core.GameConfig = {
  width: 800,
  height: 600,
  type: Phaser.AUTO,
  parent: "game",
  scene: MainScene,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 20 }
    }
  }
};

// 游戏类
export class Game extends Phaser.Game {
  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config);
  }
}

// 当游戏加载，创建我们的游戏实例
window.addEventListener("load", () => {
  var game = new Game(config);
});

# 贪吃蛇 ![Difficulty](https://img.shields.io/badge/Difficulty-Beginner-green.svg)

![Snake](assets/github/snake.png)

## 描述

1976年10月，Gremlin发行了一款名为Blockade的2人迷宫游戏。后来变成了家喻户晓的贪吃蛇

我们将做一个简单的单人贪吃蛇的复刻

## 如何运行

像这样更改 `webpack.config.js` 文件:
> `entry: './src/games/snake/game.ts'`

## 用到的phaser技术

* [Phaser.Game](https://github.com/idongliming/phaser3-typescript/blob/master/cheatsheets/boot/game.md)
* [Phaser.Config](https://github.com/idongliming/phaser3-typescript/blob/master/cheatsheets/boot/config.md)
* [Phaser.Scenes.ScenePlugin](https://github.com/idongliming/phaser3-typescript/blob/master/cheatsheets/scene/plugins/scene-plugin.md)
* Create two classes (player and apple) in two separate files
* Phaser.GameObjects.Graphics
* Basic collision detection
* Setup player input (Keyboard)
* Phaser.GameObjects.BitmapText
* Phaser.Math.RandomDataGenerator

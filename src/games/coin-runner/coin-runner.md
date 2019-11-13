# 收集金币 ![Difficulty](https://img.shields.io/badge/Difficulty-Beginner-green.svg)

![Coin Runner](assets/github/coinRunner.png)

## 描述

用来学习 Phaser 3 的一个简单游戏，键盘移动游戏角色吃金币

## 学习 objectives

你会学习如何创建和实例化 Phaser 的核心类 Phaser.Game 如果想深入学习可以学习 GameConfig 对象 ，
查看扩展阅读了解所有的配置信息

接下来你会创建第一个 Phaser.Scene 并且从一个独立的文件加载游戏对象. 这个游戏中的所有游戏对象都是 Phaser.GameObjects.Image 类型，即图片
你将学习Phaser.GameObjects.Image和设置一些变量。

最后但并非最不重要的是，你将设置游戏角色的输入，使用TimerEvent，Text 和一个矩形碰撞检测

## 如何运行

像这样更改 `webpack.config.js` 文件:
```
entry: './src/games/coin-runner/game.ts'
```

## 扩展阅读

* [Phaser.Game](https://github.com/digitsensitive/phaser3-typescript/blob/master/cheatsheets/boot/game.md)

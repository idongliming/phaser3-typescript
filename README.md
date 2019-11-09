<p align="center">
  <img width=60% src="assets/github/phaser3-typescript.png">
</p>

<p align="center">
  用TypeScript语言和Phaser 3 框架开发的简单游戏 
</p>

<div align="center">

  ![Dependencies](https://img.shields.io/david/idongliming/phaser3-typescript.svg)
  ![GitHub issues](https://img.shields.io/github/issues/idongliming/phaser3-typescript.svg)
  ![GitHub stars](https://img.shields.io/github/stars/idongliming/phaser3-typescript.svg)
  ![Contributions welcome](https://img.shields.io/badge/contributions-welcome-orange.svg)
  ![Code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)
  ![GitHub licence](https://img.shields.io/github/license/idongliming/phaser3-typescript.svg)

</div>

<p align="center">
  <sub>
    Examples made with ❤︎ by <a href="https://github.com/digitsensitive">digitsensitive</a></br>
    Framework created by <a href="https://github.com/photonstorm">Photonstorm</a>
  </sub>
</p>

# Phaser 3 and TypeScript

[Phaser](https://github.com/photonstorm/phaser) 是一个优秀, 快速 并且开源面给的 HTML5 游戏框架。
这里你会找到使用TypeScript和Phaser 3开发的游戏，愉快的开发和玩游戏

<div align="center">
<a href="https://www.buymeacoffee.com/JZDVjsT26" target="blank">
<img src="https://www.buymeacoffee.com/assets/img/custom_images/black_img.png" alt="Buy Me A Coffee" style="height: auto !important; width: auto !important;"></a>
</div>

## 快速开始

### 前提

```
在 https://nodejs.org/en 下载安装Node.js 
```

### 安装

选择一个文件夹使用这条命令克隆这个仓库:

```
git clone https://github.com/idongliming/phaser3-typescript.git
```

使用这条命令安装依赖:

```
npm install
```

### 构建、运行

执行构建 (bundle.js) 并且启动本地服务器:

```
npm run dev
```

## 游戏示例

![Beginner](https://img.shields.io/badge/Difficulty-Beginner-green.svg)

<p float="left">
  <a href="src/games/coin-runner/coin-runner.md"><img src="src/games/coin-runner/assets/github/coinRunner.png"></a>
  <a href="src/games/alpha-adjust/alpha-adjust.md"><img src="src/games/alpha-adjust/assets/github/alphaAdjust.png"></a>
</p>
<p float="left">
  <a href="src/games/snake/snake.md"><img src="src/games/snake/assets/github/snake.png"></a>
  <a href="src/games/blockade/blockade.md"><img src="src/games/blockade/assets/github/blockade.png"></a>
</p>
<p float="left">
  <a href="src/games/asteroid/asteroid.md"><img src="src/games/asteroid/assets/github/asteroid.png"></a>
  <a href="src/games/flappy-bird/flappy-bird.md"><img src="src/games/flappy-bird/assets/github/flappyBird.png"></a>
</p>

![Intermediate](https://img.shields.io/badge/Difficulty-Intermediate-blue.svg)

<p float="left">
  <a href="src/games/space-invaders/space-invaders.md"><img src="src/games/space-invaders/assets/github/spaceInvaders.png"></a>
  <a href="src/games/tank/tank.md"><img src="src/games/tank/assets/github/tank.png"></a>
</p>
<p float="left">
  <a href="src/games/super-mario-land/super-mario-land.md"><img src="src/games/super-mario-land/assets/github/super-mario-land.png"></a>
</p>


## 备忘录

- [查看备忘录](https://github.com/idongliming/phaser3-typescript/blob/master/cheatsheets)


## 外部资源

- [Phaser 3 Framework](https://github.com/photonstorm/phaser)
- [Phaser 3 Docs with TypeScript Definition File](https://github.com/photonstorm/phaser3-docs)
- [Phaser 3 Online Docs](https://photonstorm.github.io/phaser3-docs/index.html)
- [Phaser 3 Official Examples](https://github.com/photonstorm/phaser3-examples)
- [Phaser 3 Discourse](https://phaser.discourse.group)

## 有用的工具

- [Leshy SpriteSheet Tool](https://www.leshylabs.com/apps/sstool)
- [Tiled](https://www.mapeditor.org)
- [Littera](http://kvazars.com/littera)
- [Tile Extruder](https://github.com/sporadic-labs/tile-extruder)

## TypeScript 配置

### tsconfig.json

The following `Compiler Options` have been set in the `tsconfig.json` file:

| Option | Value     |
| :------------- | :------------- |
| target       | ES2016 |
| module       | CommonJS |
| sourceMap    | true |
| noImplicitAny| true [WIP] |
| strict       | true [WIP] |

You can see the complete list of the available options at [here](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).
Interesting read about [setting up a nodejs-project](https://codeburst.io/tips-for-setting-up-a-typescript-nodejs-project-5d1c48dc1a2d).


## 协议

这个项目使用 MIT 协议 -  [LICENSE.md](https://github.com/digitsensitive/phaser3-typescript/blob/master/LICENSE).

> forked from [digitsensitive](https://github.com/digitsensitive/phaser3-typescript)
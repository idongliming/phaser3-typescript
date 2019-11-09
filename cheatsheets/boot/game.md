## Phaser.Game

有任何疑问访问 [官方源代码](https://github.com/photonstorm/phaser) 。

### 介绍

 `Phaser.Game` 实例化游戏。
配置方式请阅读 [configuration values](https://github.com/idongliming/phaser3-typescript/blob/master/cheatsheets/boot/config.md),
处理启动过程，创建渲染器，
建立全局 [phaser systems](https://github.com/idongliming/phaser3-typescript/blob/master/cheatsheets/scene/systems.md),
场景管理和游戏主循环

> 通常，应该避免访问由Game创建的任何系统，而是使用通过Phaser.Scene类提供的方法访问

### 公共的方法（函数）

#### resize
调用此函数以更新游戏的宽度和高度。
它将调整渲染器和输入管理器比例的大小。

一种可能的用法是按如下方式调用该函数： `game.ts`:

```
window.addEventListener('resize', () => {
  game.resize(window.innerWidth, window.innerHeight);
});
```


#### getFrame
获取当前帧

#### getTime
获取当前游戏时间

#### destroy
将会在下一帧销毁游戏实例

> 设置 `noReturn` 为 `true` 如果您不想再次运行Phaser，则它将释放
Phaser使用的内存。

> 设置 `removeCanvas` 为 `true` 从DOM中移除phaser的父 canvas 实体（DOM标签）

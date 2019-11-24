import { Physics } from "phaser";

/**
 * @author       idonglimig <idongliming@qq.com>
 * @copyright    2019 - 2020 idongliming
 * @license      idongliming
 */

export class MainScene extends Phaser.Scene {
  private sky: Phaser.GameObjects.Image;
  private gound: Phaser.GameObjects.Sprite;
  private star: Phaser.GameObjects.Sprite;
  private stars: Phaser.GameObjects.Group;
  private platforms: Phaser.GameObjects.Group;
  private player: Phaser.Physics.Arcade.Sprite;
  private cursorKeys: Phaser.Types.Input.Keyboard.CursorKeys;
  constructor() {
    super({
      key: "MainScene"
    });
  }

  preload(): void {
    // 加载图片资源
    this.load.image('sky', './src/games/official-firstgame/assets/sky.png');
    this.load.image('ground', './src/games/official-firstgame/assets/platform.png');
    this.load.image('star', './src/games/official-firstgame/assets/star.png');
    // 加载一组图片
    this.load.spritesheet('dude', './src/games/official-firstgame/assets/dude.png', { frameWidth: 32, frameHeight: 48 });
  }

  create(): void {
    // 创建天空
    this.sky = this.add.image(400,300,"sky")
    // 创建游戏角色
    this.player = this.physics.add.sprite(100,450, "dude")
    // 给游戏角色加动画
    this.anims.create({
      key: "left",
      frames:this.anims.generateFrameNumbers('dude',{start:0, end: 3}),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: "right",
      frames:this.anims.generateFrameNumbers('dude',{start:5, end: 8}),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: "center",
      frames:this.anims.generateFrameNumbers('dude',{start: 4,end: 4}),
      frameRate: 10,
      repeat: -1
    });
    // 创建组
    this.platforms = this.physics.add.staticGroup();
    // 向组里添加元素
    this.platforms.create(400,560,"ground").setScale(2).refreshBody();
    this.platforms.create(600, 400, 'ground');
    this.platforms.create(50, 250, 'ground');

    this.stars = this.physics.add.group();
    for (let index = 1; index < 13; index++) {
      this.star=this.stars.create(index * 60, 0, 'star')
      this.star.body.bounce.y = 0.7 + Math.random() * 0.2;
    }
    // 设置游戏角色的弹性
    this.player.setBounce(0.2);
    // 和游戏边缘，平台 都有碰撞检测
    this.player.setCollideWorldBounds(true)
    this.physics.add.collider(this.player, this.platforms);
    // this.physics.add.collider(this.player,this.stars);
    this.physics.add.overlap(this.player,this.stars,this.collectStar,null,null);
    this.physics.add.collider(this.stars,this.platforms);
    this.cursorKeys = this.input.keyboard.createCursorKeys();
  }

  update(){
    if (this.cursorKeys.left.isDown) {
      this.player.play("left", true);
      this.player.setVelocityX(-150);
    } else if (this.cursorKeys.right.isDown) {
      this.player.play("right",true)
      this.player.setVelocityX(150)
    } else if (this.cursorKeys.up.isDown && this.player.body.touching.down) {
      this.player.setVelocityY(-350)
      this.player.play("center",true)
    } else {
      this.player.setVelocityX(0);
      this.player.play("center",true)
    }
  }

  collectStar(player, star:Phaser.GameObjects.Sprite) {
    star.setVisible(false)
  }
}

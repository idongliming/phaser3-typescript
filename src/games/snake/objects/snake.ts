/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2018 - 2019 digitsensitive
 * @description  Snake: Snake
 * @license      Digitsensitive
 */

export class Snake {
  private dotSize: number;
  private snakeLength: number;
  private direction: string;
  private cursors: any;
  private dead: boolean;
  private snakeBody: Phaser.GameObjects.Graphics[];

  public isDead(): boolean {
    return this.dead;
  }
  public setDead(_dead): void {
    this.dead = _dead;
  }
  public getSnakeBody(): Phaser.GameObjects.Graphics[] {
    return this.snakeBody;
  }
  public getHead(): Phaser.GameObjects.Graphics {
    return this.snakeBody[0];
  }
  public getSnakeLength(): number {
    return this.snakeLength;
  }

  constructor(scene) {
    /**
     * 设置初始值
     * 身体长度为0，只有头，方向向右，活着
     */
    this.dotSize = scene.fieldSize;
    this.snakeLength = 0;
    this.direction = "right";
    this.dead = false;
    this.snakeBody = [];

    // 输入，监听四个方向键
    this.cursors = scene.input.keyboard.createCursorKeys();

    // 画蛇
    this.buildSnake(scene);
  }

  // 画蛇，通过透明度区分蛇头和身体
  private buildSnake(scene): void {
    let currentAlpha = 0;
    for (let i = 0; i <= this.snakeLength; i++) {
      if (i === 0) {
        currentAlpha = 1;
      } else {
        currentAlpha = 0.8;
      }

      this.snakeBody[i] = scene.add
        .graphics({
          x: 16 - i * this.dotSize,
          y: 16,
          fillStyle: { color: "0x61e85b", alpha: currentAlpha }
        })
        .fillRect(this.dotSize, this.dotSize, this.dotSize, this.dotSize);
    }
  }

  // 蛇向前移动
  public move(): void {
    // 移动身体，倒序遍历，赋值为前一个身体的位置，实现整体移动
    for (let i = this.snakeLength; i > 0; i--) {
      this.snakeBody[i].x = this.snakeBody[i - 1].x;
      this.snakeBody[i].y = this.snakeBody[i - 1].y;
    }

    // 移动头部，根据头的方向一次移动一个蛇头的距离
    if (this.direction === "left") {
      this.snakeBody[0].x -= this.dotSize;
    } else if (this.direction === "right") {
      this.snakeBody[0].x += this.dotSize;
    } else if (this.direction === "up") {
      this.snakeBody[0].y -= this.dotSize;
    } else if (this.direction === "down") {
      this.snakeBody[0].y += this.dotSize;
    }
  }

  // 根据方向键按下情况改变蛇头方向值
  public handleInput(): void {
    if (this.cursors.up.isDown && this.direction != "down") {
      this.direction = "up";
    } else if (this.cursors.down.isDown && this.direction != "up") {
      this.direction = "down";
    } else if (this.cursors.right.isDown && this.direction != "left") {
      this.direction = "right";
    } else if (this.cursors.left.isDown && this.direction != "right") {
      this.direction = "left";
    }
  }

  // 成长，长度+1，蛇身体数组添加一个新值
  public growSnake(scene): void {
    this.snakeLength++;
    this.snakeBody[this.snakeBody.length] = scene.add
      .graphics({
        x: this.snakeBody[this.snakeBody.length - 1].x,
        y: this.snakeBody[this.snakeBody.length - 1].y,
        fillStyle: { color: "0x61e85b", alpha: 0.8 }
      })
      .fillRect(this.dotSize, this.dotSize, this.dotSize, this.dotSize);
  }

  // 检查有没有吃到自己，如果吃到了，蛇死掉
  public checkSnakeSnakeCollision(): void {
    for (let i = this.snakeLength; i > 0; i--) {
      if (
        this.snakeLength > 1 &&
        this.snakeBody[0].x === this.snakeBody[i].x &&
        this.snakeBody[0].y === this.snakeBody[i].y
      ) {
        this.dead = true;
      }
    }
  }
}

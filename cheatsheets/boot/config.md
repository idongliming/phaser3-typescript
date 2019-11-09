## Phaser.Config

有任何疑问访问 [官方源代码](https://github.com/photonstorm/phaser) 。

### 介绍

Phaser游戏实例的配置对象。
使用此配置对象，可以设置游戏的许多参数。

### 栗子🌰

为了完整起见，此示例显示了所有参数。
一般无需设置大多数参数。

> 被注释的参数不适用于当前的TS Def文件（custom.d.ts）

``` typescript
const config: GameConfig = {
  title: "",
  url: "https://phaser.io",
  version: "",
  width: 1024,
  height: 768,
  zoom: 1,
  resolution: 1,
  parent: null,
  scale: {
    width: 1024,
    height: 768,
    zoom: 1,
    resolution: 1,
    parent: null,
    mode: Phaser.Scale.NONE,
    expandParent: true,
    autoRound: false,
    autoCenter: Phaser.Scale.Center.NO_CENTER,
    resizeInterval: 500,
    fullscreenTarget: null,
    min: {
      width: 0,
      height: 0
    },
    max: {
      width: 0,
      height: 0
    }
  },
  type: Phaser.AUTO,
  canvas: null,
  context: null,
  canvasStyle: null,
  // customEnvironment: false,
  scene: [BootScene, MenuScene, GameScene, HUDScene],
  seed: null,
  autoFocus: true,
  dom: {
    createContainer: false,
    behindCanvas: false
  },
  input: {
    keyboard: {
      target: window,
      capture: []
    },
    mouse: {
      target: null,
      capture: true
    },
    touch: {
      target: null,
      capture: true
    },
    activePointers: 1,
    // smoothFactor: 0,
    gamepad: {
      target: window
    }
  },
  disableContextMenu: false,
  // audio: {
  //  disableWebAudio: false,
  //   context: AudioContext,
  //   noAudio: false
  // },
  banner: {
    hidePhaser: false,
    text: "#ffffff",
    background: ["#ff0000", "#ffff00", "#00ff00", "#00ffff", "#000000"]
  },
  fps: {
    min: 5,
    target: 60,
    forceSetTimeOut: false,
    deltaHistory: 10,
    panicMax: 120
  },
  render: {
    antialias: true,
    pixelArt: false,
    roundPixels: false,
    transparent: false,
    clearBeforeRender: true,
    premultipliedAlpha: true,
    failIfMajorPerformanceCaveat: false,
    powerPreference: "default",
    batchSize: 2000,
    maxLights: 10  
  },
  backgroundColor: 0,
  callbacks: {
    preBoot: function() {},
    postBoot: function() {}
  },
  physics: {
    default: "arcade",
    arcade: {
      fps: 60,
      timeScale: 1,
      gravity: { x: 0, y: 0 },
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      checkCollision: {
        up: true,
        down: true,
        left: true,
        right: true
      },
      overlapBias: 4,
      tileBias: 16,
      forceX: false,
      isPaused: false,
      debug: false,
      debugShowBody: true,
      debugShowStaticBody: true,
      debugShowVelocity: true,
      debugBodyColor: 0xff00ff,
      debugStaticBodyColor: 0x0000ff,
      debugVelocityColor: 0x00ff00,
      maxEntries: 16,
      useTree: true
    },
    impact: {
      gravity: 0,
      cellSize: 64,
      timeScale: 1,
      maxStep: 0.05,
      debug: false,
      maxVelocity: 100,
      debugShowBody: true,
      debugShowVelocity: true,
      debugBodyColor: 0xff00ff,
      debugVelocityColor: 0x00ff00,
      maxVelocityX: 100,
      maxVelocityY: 100,
      minBounceVelocity: 40,
      gravityFactor: 1,
      bounciness: 0,
      setBounds: {
        x: 0,
        y: 0,
        width: undefined,
        height: undefined,
        thickness: 64,
        left: true,
        right: true,
        top: true,
        bottom: true
      }
    },
    matter: {}
  },
  loader: {
    baseURL: "",
    path: "",
    maxParallelDownloads: 32,
    crossOrigin: undefined,
    responseType: "",
    async: true,
    user: "",
    password: "",
    timeout: 0
  },
  plugins: {
    global: [
      {
        key: "TestPlugin",
        plugin: "",
        start: true,
        data: { msg: "The plugin is alive" }
      }
    ],
    scene: [
      {
        key: "WireFramePlugin",
        plugin: "",
        systemKey: "wireFramePlugin",
        sceneKey: "wireframe"
      }
    ],
    default: [],
    defaultMerge: ["ModPlayer"]
  },
  images: {
    default: "data:image/png;base64...",
    missing: "data:image/png;base64..."
  }
};

var game = new Game(config);
```

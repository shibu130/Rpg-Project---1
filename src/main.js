import Phaser from "./lib/phaser.js" // need to mention file name , refernce to Phaser object in window
import { BattleScene } from "./scenes/battle-scene.js";
import { PreloadScene } from "./scenes/preload-scene.js";
import { SCENE_KEYS } from "./scenes/scene-keys.js";

// game instance
const game = new Phaser.Game({
    type: Phaser.CANVAS,
    pixelArt: false,
    // parent:"game-container",
    // width:1024,
    // height:576,
    scale:{
        parent:"game-container",
        width:1024,
        height:576,
        mode: Phaser.Scale.FIT,
        autoCenter:Phaser.Scale.CENTER_BOTH
    },
    backgroundColor:"#ffffff"
   // scene:[PreloadScene]
});

// rather than running below we can specify which scene to load in the game obj , we can specify active in below line as well
game.scene.add(SCENE_KEYS.PRELOAD_SCENE, PreloadScene);
game.scene.add(SCENE_KEYS.BATTLE_SCENE, BattleScene);
// if above scene was configured as being active no need to run below line
game.scene.start(SCENE_KEYS.PRELOAD_SCENE);
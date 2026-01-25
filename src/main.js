import Phaser from "./lib/phaser.js" // need to mention file name , refernce to Phaser object in window
import { PreloadScene } from "./scenes/preload-scene.js";
import { SCENE_KEYS } from "./scenes/scene-keys.js";

// game instance
const game = new Phaser.Game({
    parent:"gamne-container",
   // scene:[PreloadScene]
});

// rather than running below we can specify which scene to load in the game obj , we can specify active in below line as well
game.scene.add(SCENE_KEYS.PRELOAD_SCENE, PreloadScene)
// if above scene was configured as being active no need to run below line
//game.scene.start(SCENE_KEYS.PRELOAD_SCENE);
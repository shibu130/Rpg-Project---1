import Phaser from "../lib/phaser.js"
import { SCENE_KEYS } from "./scene-keys.js"
import { BATTLE_BACKGROUND_ASSETS } from "../assets/asset-key.js";


export class BattleScene extends Phaser.Scene{

    constructor(){
        super({
            key: SCENE_KEYS.BATTLE_SCENE
        });
    }

    // initialize
    init(){

    }

    // load assets
    preload(){

    }

    // draw stuff here
    create(){
        console.log("battle scene loaded")
        this.add.image(0,0, BATTLE_BACKGROUND_ASSETS.FOREST).setOrigin(0,0)
    }

}
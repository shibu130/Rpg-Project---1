import Phaser from "../lib/phaser.js";
import { SCENE_KEYS } from "./scene-keys.js";


export class PreloadScene extends Phaser.Scene{
    constructor(){
        super({
            key: SCENE_KEYS.PRELOAD_SCENE,
           // active: true // by doing this we manually fire the scene without the need for calling start
        })};

    init(){
        console.log("init")
    }

    preload(){
        console.log("preload")
    }

    create(){
        console.log("create")
    }

    update(){
        console.log("update")
    }
}
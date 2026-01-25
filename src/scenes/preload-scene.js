import { BATTLE_BACKGROUND_ASSETS, HEALTH_BAR_ASSET_KEYS, BATTLE_ASSET_KEYS, MONSTER_ASSET_KEYS} from "../assets/asset-key.js";
import Phaser from "../lib/phaser.js";
import { SCENE_KEYS } from "./scene-keys.js";



export class PreloadScene extends Phaser.Scene{
    constructor(){
        super({
            key: SCENE_KEYS.PRELOAD_SCENE,
           // active: true // by doing this we manually fire the scene without the need for calling start
        })};

    /* life cycle => 1.init 2.preload 3.create */
    init(){
        console.log("init")
    }

    // preload engine stays in the state until all assets are loaded
    preload(){
        // prefixes to path
        const monsterTamer = "assets/monster-tamer";
        const kenny = "assets/kenneys-assets";

        // loading backgrounds
        this.load.image(BATTLE_BACKGROUND_ASSETS.FOREST,`${monsterTamer}/battle-backgrounds/forest-background.png`);
        this.load.image(BATTLE_ASSET_KEYS.HEALTH_BAR_BACKGROUND,`${kenny}/ui-space-expansion/custom-ui.png`);

        // health bars
        this.load.image(HEALTH_BAR_ASSET_KEYS.LEFT_CAP,`${kenny}/ui-space-expansion/barHorizontal_green_left.png`);
        this.load.image(HEALTH_BAR_ASSET_KEYS.RIGHT_CAP,`${kenny}/ui-space-expansion/barHorizontal_green_right.png`);
        this.load.image(HEALTH_BAR_ASSET_KEYS.MIDDLE,`${kenny}/ui-space-expansion/barHorizontal_green_mid.png`);

        // monsters
        this.load.image(MONSTER_ASSET_KEYS.CARNODUSK,`${monsterTamer}/monsters/carnodusk.png`);
        this.load.image(MONSTER_ASSET_KEYS.IGUANIGNITE, `${monsterTamer}/monsters/iguanignite.png`);


        console.log("preload")
    }

    // this state loads after
    create(){
        this.add.image(0,0,BATTLE_BACKGROUND_ASSETS.FOREST)
        console.log("create")
    }

    // update(){
    //     console.log("update")
    // }
}
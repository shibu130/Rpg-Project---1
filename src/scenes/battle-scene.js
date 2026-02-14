import Phaser from "../lib/phaser.js"
import { SCENE_KEYS } from "./scene-keys.js"
import {BATTLE_ASSET_KEYS, BATTLE_BACKGROUND_ASSETS, HEALTH_BAR_ASSET_KEYS, MONSTER_ASSET_KEYS } from "../assets/asset-key.js";


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

        // setDepth

        // one animal
        this.add.image(768,144, MONSTER_ASSET_KEYS.CARNODUSK, 0);
        // second animal
        this.add.image(256, 316, MONSTER_ASSET_KEYS.IGUANIGNITE, 0).setFlipX(true);


        //const playerName = "shibu";
        const playerTextBox = this.add.text(30,30, MONSTER_ASSET_KEYS.IGUANIGNITE, {
           fontSize:"25px",
            align:"center"
        })

        // prevent overlap, to position the player level after the player name
        const level = this.add.text(playerTextBox.width + 30,30, "L5",{
            fontSize:"25px",
            color:"#a83232"
        })

        // hp placeholder
        const hpPlaceHolder =  this.add.text(20,68, "HP",{
            fontSize:"25px",
            color:"#a83232",
            
        })

        // turns 
        const turnsPlaceholder = this.add.text(400,100,"25/25",{
            fontSize:"15px",
            color:"black"
        })

        // right player 
        this.add.container(468,300, [ this.add.image(0,0, BATTLE_ASSET_KEYS.HEALTH_BAR_BACKGROUND).setOrigin(0,0),  playerTextBox, level, this.#createHealthBar(34,40), hpPlaceHolder, turnsPlaceholder], );


       // left player 
        const enemyPlayerTextBox = this.add.text(30,30, MONSTER_ASSET_KEYS.CARNODUSK, {
           fontSize:"25px",
            align:"center"
        })

        // prevent overlap, to position the player level after the player name
        const enemyLevel = this.add.text(enemyPlayerTextBox.width + 30,30, "L5",{
            fontSize:"25px",
            color:"#a83232"
        })  

        // hp placeholder
        const enemyHpPlaceHolder =  this.add.text(20,68, "HP",{
            fontSize:"25px",
            color:"#a83232",
            
        })

        // turns 
        const enemyTurnsPlaceholder = this.add.text(400,100,"25/25",{
            fontSize:"15px",
            color:"black"
        })

        // right player 
        this.add.container(10,10, [ this.add.image(0,0, BATTLE_ASSET_KEYS.HEALTH_BAR_BACKGROUND).setOrigin(0,0),  enemyPlayerTextBox, enemyLevel, this.#createHealthBar(34,40), enemyHpPlaceHolder, enemyTurnsPlaceholder], );

        // seems like you can reusue variables , once variable contains this.add , if we use the same 
    

        // create a rectangle pane

        this.#createMainInfoPane()
    }

    #createHealthBar(x,y){
        const left = this.add.image(x,y, HEALTH_BAR_ASSET_KEYS.LEFT_CAP).setOrigin(0,0.5);
       const middle = this.add.image(left.x + left.width,y, HEALTH_BAR_ASSET_KEYS.MIDDLE).setOrigin(0, 0.5);
       middle.displayWidth = 350
       const right = this.add.image(middle.x + middle.displayWidth,y, HEALTH_BAR_ASSET_KEYS.RIGHT_CAP).setOrigin(0, 0.5);

       // scale the bar if needed
        
        return this.add.container(x,y, [left, middle, right])
    }

    #createMainInfoPane(){

        const padding = 4
        const reduce = 128
        // first half
        this.add.rectangle(0, this.scale.height - reduce - padding, this.scale.width/2,reduce,0xede4f3,1)
        .setOrigin(0,0)
        .setStrokeStyle(2,0xe4434a,1)

        // move horizontally to display second half
        this.add.rectangle(this.scale.width/2, this.scale.height - reduce - padding, this.scale.width/2,reduce,0xede4f3,1)
        .setOrigin(0,0)
        .setStrokeStyle(2,0xe4434a,1)


    }

}
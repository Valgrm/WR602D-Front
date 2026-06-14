import * as THREE from "three"
import Sizes from "./Utils/Sizes"
import Time from "./Utils/Time"
import Camera from "./Camera"
import Renderer from "./Renderer"
import World from './World/World'
import Ressources from "./Utils/Ressources"
import sources from "./sources"
import Physics from './Physics'

let instance = null

export default class Game {

    constructor(canvas) {

        if(instance){
            return instance
        }

        instance = this

        // Options
        this.canvas = canvas

        // Setup
        this.sizes = new Sizes()
        this.time = new Time()
        this.scene = new THREE.Scene()
        this.ressources = new Ressources(sources)
        this.physics = new Physics()
        this.camera = new Camera()
        this.renderer = new Renderer()
        this.world = new World()

        // Sizes resize event
        this.sizes.on('resize', () => {
            this.resize()
        })

        // Time tick event
        this.time.on('tick', () => {
            this.update()
        })
    }

    resize(){
        this.camera.resize()
        this.renderer.resize()
    }

    update(){
        this.physics.update()
        this.world.update()
        this.camera.update()
        this.renderer.update()
    }
}
import CANNON from 'cannon'
import Game from './Game.js'

export default class Physics {
    constructor() {
        this.game = new Game()
        this.time = this.game.time

        this.world = new CANNON.World()
        this.world.gravity.set(0, -9.82, 0)
        this.world.broadphase = new CANNON.SAPBroadphase(this.world)
        this.world.allowSleep = true

        this.world.defaultContactMaterial.friction    = 0
        this.world.defaultContactMaterial.restitution = 0.2
    }

    update() {
        this.world.step(this.time.delta / 1000)
    }
}

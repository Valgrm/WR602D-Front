import * as THREE from 'three'
import Game from './Game'

export default class Camera {

    constructor() {
        this.game  = new Game()
        this.sizes = this.game.sizes
        this.scene = this.game.scene

        this.offset = new THREE.Vector3(20, 15.5, 24)

        this.setInstance()
    }

    setInstance() {
        this.instance = new THREE.PerspectiveCamera(35, this.sizes.width / this.sizes.height, 0.1, 100)
        this.instance.position.copy(this.offset)
        this.scene.add(this.instance)
    }

    resize() {
        this.instance.aspect = this.sizes.width / this.sizes.height
        this.instance.updateProjectionMatrix()
    }

    update() {
        const car = this.game.world?.car
        if(!car) return

        this.instance.position.copy(car.position).add(this.offset)
        this.instance.lookAt(car.position)
    }
}

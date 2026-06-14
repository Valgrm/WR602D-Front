import * as THREE from 'three'
import Game from '../Game.js'

export default class Environment {
    constructor() {
        const scene = new Game().scene
        scene.background = new THREE.Color(0x87ceeb)
        scene.fog = null
    }
}

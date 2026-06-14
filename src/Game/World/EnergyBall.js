import * as THREE from 'three'
import Game from '../Game.js'
import SoundManager from '../Utils/SoundManager.js'

const COLLECT_DIST = 1.5

export default class EnergyBall {
    constructor(position, points = 50) {
        this.game      = new Game()
        this.scene     = this.game.scene
        this.time      = this.game.time
        this.points    = points
        this.collected = false
        this.baseY     = position.y

        this._build(position)
    }

    _build(pos) {
        this.group = new THREE.Group()
        this.group.position.set(pos.x, pos.y, pos.z)

        this.coreMesh = new THREE.Mesh(
            new THREE.SphereGeometry(0.35, 16, 16),
            new THREE.MeshBasicMaterial({ color: 0x00ffff })
        )

        const innerGlow = new THREE.Mesh(
            new THREE.SphereGeometry(0.52, 16, 16),
            new THREE.MeshBasicMaterial({ color: 0x66eeff, transparent: true, opacity: 0.45, side: THREE.BackSide })
        )

        const outerGlow = new THREE.Mesh(
            new THREE.SphereGeometry(0.82, 16, 16),
            new THREE.MeshBasicMaterial({ color: 0x0044ff, transparent: true, opacity: 0.12, side: THREE.BackSide })
        )

        this.orbit = new THREE.Mesh(
            new THREE.TorusGeometry(0.58, 0.03, 8, 32),
            new THREE.MeshBasicMaterial({ color: 0x00ffff })
        )

        this.group.add(this.coreMesh, innerGlow, outerGlow, this.orbit)
        this.scene.add(this.group)
    }

    update() {
        if (this.collected) return
        const car = this.game.world.car
        if (!car) return

        if (this.group.position.distanceTo(car.position) < COLLECT_DIST) {
            this._collect()
            return
        }

        const t = this.time.elapsed * 0.001
        this.group.position.y   = this.baseY + Math.sin(t * 2.4) * 0.18
        this.group.rotation.y   = t * 0.9
        this.orbit.rotation.x   = t * 1.8
        this.coreMesh.scale.setScalar(1 + Math.sin(t * 5.5) * 0.08)
    }

    destroy() {
        this.collected = true
        this.scene.remove(this.group)
    }

    _collect() {
        this.collected = true
        this.scene.remove(this.group)
        this.game.world.scoreManager?.add(this.points)
        this.game.world.objectiveManager?.complete('balls')
        new SoundManager().playCollect()
    }
}

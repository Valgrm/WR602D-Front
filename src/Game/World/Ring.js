import * as THREE from 'three'
import Game from '../Game.js'
import SoundManager from '../Utils/SoundManager.js'

export default class Ring {
    constructor(position, normal = new THREE.Vector3(0, 0, 1), radius = 2.5, points = 100) {
        this.game      = new Game()
        this.scene     = this.game.scene
        this.time      = this.game.time
        this.center    = position.clone()
        this.normal    = normal.clone().normalize()
        this.radius    = radius
        this.points    = points
        this.triggered = false
        this.prevPerp  = null

        this._build()
    }

    _build() {
        this.group = new THREE.Group()
        this.group.position.copy(this.center)
        this.group.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), this.normal)

        this.ringMat = new THREE.MeshBasicMaterial({ color: 0xffa200 })
        this.ringMesh = new THREE.Mesh(
            new THREE.TorusGeometry(this.radius, 0.14, 14, 80),
            this.ringMat
        )

        this.diskMat = new THREE.MeshBasicMaterial({
            color: 0xffaa00, transparent: true, opacity: 0.10,
            side: THREE.DoubleSide, depthWrite: false,
        })
        this.diskMesh = new THREE.Mesh(
            new THREE.CircleGeometry(this.radius - 0.14, 80),
            this.diskMat
        )

        this.innerMat = new THREE.MeshBasicMaterial({ color: 0xffee88, transparent: true, opacity: 0.55 })
        this.innerMesh = new THREE.Mesh(
            new THREE.TorusGeometry(this.radius * 0.78, 0.05, 8, 80),
            this.innerMat
        )

        this.group.add(this.ringMesh, this.diskMesh, this.innerMesh)
        this.scene.add(this.group)
    }

    update() {
        const car = this.game.world.car
        if (!car || this.triggered) return

        const tocar   = new THREE.Vector3().subVectors(car.position, this.center)
        const perp    = tocar.dot(this.normal)
        const inPlane = tocar.clone().addScaledVector(this.normal, -perp)
        inPlane.y = 0  // la voiture conduit au sol, on ignore la différence de hauteur
        const radial  = inPlane.length()

        if (
            radial < this.radius &&
            this.prevPerp !== null &&
            perp !== 0 &&
            Math.sign(perp) !== Math.sign(this.prevPerp)
        ) {
            this._trigger()
        }
        this.prevPerp = perp

        const t = this.time.elapsed * 0.001
        this.ringMesh.scale.setScalar(1 + Math.sin(t * 2.8) * 0.04)
        this.innerMesh.rotation.z = t * 0.6
        this.diskMat.opacity = 0.08 + Math.sin(t * 3.5) * 0.04
    }

    destroy() {
        this.triggered = true
        this.scene.remove(this.group)
    }

    _trigger() {
        this.triggered = true
        this.game.world.scoreManager?.add(this.points)
        this.game.world.objectiveManager?.complete('rings')
        new SoundManager().playCollect()
        this.ringMat.color.set(0xffffff)
        this.innerMat.color.set(0xffffff)
        this.diskMat.opacity = 0.55
        setTimeout(() => this.scene.remove(this.group), 600)
    }
}

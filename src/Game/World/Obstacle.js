import * as THREE from 'three'
import CANNON from 'cannon'
import Game from '../Game.js'

const SPHERE_R = 0.6
const SPIKE_H  = 0.75
const SPIKE_R  = 0.09
const SPIKES   = 20

export default class Obstacle {
    constructor(position) {
        this.game    = new Game()
        this.scene   = this.game.scene
        this.physics = this.game.physics

        this.mat = new THREE.MeshStandardMaterial({
            color:             0xcc1111,
            emissive:          0xff0000,
            emissiveIntensity: 0.4,
            roughness:         0.3,
            metalness:         0.6,
        })

        this.group = new THREE.Group()

        // Sphère centrale
        this.group.add(new THREE.Mesh(
            new THREE.SphereGeometry(SPHERE_R, 14, 10),
            this.mat
        ))

        // Piques
        const coneGeo = new THREE.ConeGeometry(SPIKE_R, SPIKE_H, 6)
        const up = new THREE.Vector3(0, 1, 0)
        for (let i = 0; i < SPIKES; i++) {
            const phi   = Math.acos(1 - 2 * (i + 0.5) / SPIKES)
            const theta = Math.PI * (1 + Math.sqrt(5)) * i
            const dir   = new THREE.Vector3(
                Math.sin(phi) * Math.cos(theta),
                Math.cos(phi),
                Math.sin(phi) * Math.sin(theta)
            )
            const spike = new THREE.Mesh(coneGeo, this.mat)
            spike.position.copy(dir).multiplyScalar(SPHERE_R + SPIKE_H * 0.5)
            spike.quaternion.setFromUnitVectors(up, dir)
            this.group.add(spike)
        }

        this.group.position.set(position.x, SPHERE_R, position.z)
        this.scene.add(this.group)

        // Corps physique sphérique statique
        this.body = new CANNON.Body({ mass: 0 })
        this.body.addShape(new CANNON.Sphere(SPHERE_R + SPIKE_H * 0.45))
        this.body.position.set(position.x, SPHERE_R, position.z)
        this.body.isObstacle = true
        this.physics.world.addBody(this.body)

        this._t = Math.random() * Math.PI * 2
    }

    update() {
        this._t += 0.022
        this.group.rotation.y += 0.007
        this.group.rotation.x += 0.004
    }

    destroy() {
        this.scene.remove(this.group)
        this.physics.world.remove(this.body)
        this.mat.dispose()
    }
}

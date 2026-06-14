import * as THREE from 'three'
import CANNON from 'cannon'
import Game from '../Game.js'

const BOX       = 1.0
const GAP       = 0.05
const THRESHOLD = 0.55
const PTS_BOX   = 15

export default class RockStructure {
    constructor(position) {
        this.game    = new Game()
        this.scene   = this.game.scene
        this.physics = this.game.physics
        this.time    = this.game.time
        this.origin  = position.clone()
        this.blocks  = []
        this._structureCompleted = false

        const mat = new THREE.MeshMatcapMaterial({
            matcap: this.game.ressources.items.rockColorTexture
        })

        // 3 wide × 2 tall wall layout
        for (let row = 0; row < 2; row++) {
            for (let col = 0; col < 3; col++) {
                const localX = (col - 1) * (BOX + GAP)
                const localY = row * (BOX + GAP) + BOX / 2
                const wx = this.origin.x + localX
                const wy = this.origin.y + localY
                const wz = this.origin.z

                const mesh = new THREE.Mesh(new THREE.BoxGeometry(BOX, BOX, BOX), mat)
                mesh.position.set(wx, wy, wz)
                this.scene.add(mesh)

                const body = new CANNON.Body({ mass: 3 })
                body.addShape(new CANNON.Box(new CANNON.Vec3(BOX / 2, BOX / 2, BOX / 2)))
                body.position.set(wx, wy, wz)
                body.linearDamping  = 0.3
                body.angularDamping = 0.4
                this.physics.world.addBody(body)

                this.blocks.push({ mesh, body, ix: wx, iy: wy, iz: wz, fallen: false })
            }
        }
    }

    destroy() {
        for (const b of this.blocks) {
            this.scene.remove(b.mesh)
            this.physics.world.remove(b.body)
        }
        this.blocks = []
    }

    update() {
        for (const b of this.blocks) {
            b.mesh.position.copy(b.body.position)
            b.mesh.quaternion.copy(b.body.quaternion)

            if (!b.fallen) {
                const dx = b.body.position.x - b.ix
                const dy = b.body.position.y - b.iy
                const dz = b.body.position.z - b.iz
                if (Math.sqrt(dx * dx + dy * dy + dz * dz) > THRESHOLD) {
                    b.fallen = true
                    this.game.world.scoreManager?.add(PTS_BOX)
                }
            }
        }

        if (!this._structureCompleted && this.blocks.every(b => b.fallen)) {
            this._structureCompleted = true
            this.game.world.objectiveManager?.complete('rocks')
        }
    }
}

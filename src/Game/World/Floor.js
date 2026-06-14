import * as THREE from 'three'
import Game from '../Game'
import CANNON from 'cannon'

export default class Floor {
    constructor(){
        this.Game = new Game()
        this.scene = this.Game.scene
        this.ressources = this.Game.ressources

        this.physics = this.Game.physics

        this.setGeometry()
        this.setMaterial()
        this.setMesh()
        this.setPhysicsBody()
    }

    setGeometry(){
        this.geometry = new THREE.CircleGeometry(40, 68)
    }

    setMaterial(){
        this.material = new THREE.MeshMatcapMaterial({
            matcap: this.ressources.items.grassColorTexture
        })
        this.material.matcap.colorSpace = THREE.SRGBColorSpace

    }

    setMesh(){
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.rotation.x = - Math.PI * 0.5
        this.scene.add(this.mesh)
    }

    setPhysicsBody(){
        const shape = new CANNON.Plane()
        this.body = new CANNON.Body({ mass: 0 })
        this.body.addShape(shape)
        this.body.quaternion.setFromAxisAngle(new CANNON.Vec3(-1, 0, 0), Math.PI * 0.5)
        this.physics.world.addBody(this.body)
    }
}
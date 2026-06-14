import * as THREE from 'three'
import CANNON from 'cannon'
import Game from '../Game.js'

const RADIUS       = 40
const WALL_HEIGHT  = 4
const PHYSICS_SEGS = 24

export default class MapBorder {
    constructor() {
        this.game    = new Game()
        this.scene   = this.game.scene
        this.physics = this.game.physics

        this._buildVisual()
        this._buildPhysics()
    }

    _buildVisual() {
        const geo = new THREE.CylinderGeometry(RADIUS, RADIUS, WALL_HEIGHT, 64, 6, true)

        const mat = new THREE.ShaderMaterial({
            uniforms: {
                uColor:  { value: new THREE.Color(0x44aaff) },
                uHeight: { value: WALL_HEIGHT },
            },
            vertexShader: `
                varying float vY;
                void main() {
                    vY = position.y;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform vec3  uColor;
                uniform float uHeight;
                varying float vY;
                void main() {
                    // vY va de -uHeight/2 (bas) à +uHeight/2 (haut)
                    float t     = 1.0 - (vY + uHeight * 0.5) / uHeight; // 1 en bas, 0 en haut
                    float alpha = t * 0.72;
                    gl_FragColor = vec4(uColor, alpha);
                }
            `,
            transparent: true,
            side:        THREE.DoubleSide,
            depthWrite:  false,
        })

        const wall = new THREE.Mesh(geo, mat)
        wall.position.y = WALL_HEIGHT / 2
        this.scene.add(wall)
    }

    _buildPhysics() {
        for (let i = 0; i < PHYSICS_SEGS; i++) {
            const theta  = (i / PHYSICS_SEGS) * Math.PI * 2
            const inward = new THREE.Vector3(-Math.cos(theta), 0, -Math.sin(theta))
            const q      = new THREE.Quaternion().setFromUnitVectors(
                new THREE.Vector3(0, 0, 1), inward
            )
            const body = new CANNON.Body({ mass: 0 })
            body.addShape(new CANNON.Plane())
            body.position.set(Math.cos(theta) * RADIUS, 0, Math.sin(theta) * RADIUS)
            body.quaternion.set(q.x, q.y, q.z, q.w)
            this.physics.world.addBody(body)
        }
    }
}

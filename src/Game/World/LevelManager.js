import * as THREE from 'three'

const MAP_RADIUS      = 36
const MIN_FROM_CENTER = 6
const MIN_BETWEEN     = 5 

export default class LevelManager {

    getConfig(level) {
        const balls       = Math.min(2 + level, 7)
        const rings       = Math.min(level, 4)
        const rocks       = Math.max(0, level - 2)
        const obstacles   = Math.min((3 + Math.floor((level - 1) / 2)) * 3, 21)
        const timeSeconds = Math.max(12, 22 - (level - 1) * 2)
        return { balls, rings, rocks, obstacles, timeSeconds }
    }

    generatePositions({ balls, rings, rocks, obstacles = 3 }) {
        const placed = []

        const ballPositions = Array.from({ length: balls }, () => {
            const p = this._randomPoint(placed)
            placed.push(p)
            return new THREE.Vector3(p.x, 1, p.z)
        })

        const ringData = Array.from({ length: rings }, () => {
            const p     = this._randomPoint(placed)
            placed.push(p)
            const angle  = Math.random() * Math.PI
            const normal = new THREE.Vector3(Math.sin(angle), 0, Math.cos(angle))
            return { pos: new THREE.Vector3(p.x, 3.9, p.z), normal, points: 100 }
        })

        const rockPositions = Array.from({ length: rocks }, () => {
            const p = this._randomPoint(placed)
            placed.push(p)
            return new THREE.Vector3(p.x, 0, p.z)
        })

        const obstaclePositions = Array.from({ length: obstacles }, () => {
            const p = this._randomPoint(placed)
            placed.push(p)
            return new THREE.Vector3(p.x, 0, p.z)
        })

        return { ballPositions, ringData, rockPositions, obstaclePositions }
    }

    _randomPoint(placed = []) {
        for (let attempt = 0; attempt < 150; attempt++) {
            const angle = Math.random() * Math.PI * 2
            const r     = Math.sqrt(Math.random()) * (MAP_RADIUS - MIN_FROM_CENTER) + MIN_FROM_CENTER
            const x     = Math.cos(angle) * r
            const z     = Math.sin(angle) * r

            const tooClose = placed.some(p => Math.hypot(p.x - x, p.z - z) < MIN_BETWEEN)
            if (!tooClose) return { x, z }
        }
        
        const angle = (placed.length / 8) * Math.PI * 2
        return { x: Math.cos(angle) * 12, z: Math.sin(angle) * 12 }
    }
}

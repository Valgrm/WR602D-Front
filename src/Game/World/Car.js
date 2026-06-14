import * as THREE from 'three'
import CANNON from 'cannon'
import GUI from 'lil-gui'
import Game from '../Game'
import Controls from '../Utils/Controls'

export default class Car
{
    constructor()
    {
        this.game      = new Game()
        this.scene     = this.game.scene
        this.resources = this.game.ressources
        this.physics   = this.game.physics
        this.time      = this.game.time

        this.options = {
            chassisMass:                       40,

            wheelRadius:                       0.25,
            wheelSuspensionStiffness:          50,
            wheelSuspensionRestLength:         0.1,
            wheelFrictionSlip:                 10,
            wheelDampingRelaxation:            1.8,
            wheelDampingCompression:           1.5,
            wheelMaxSuspensionForce:           100000,
            wheelRollInfluence:                0.01,
            wheelMaxSuspensionTravel:          0.3,
            wheelCustomSlidingRotationalSpeed: -30,

            steeringSpeed: 0.005 * 3,
            steeringMax:   Math.PI * 0.17,

            acceleratingSpeed:      16 * 17,
            acceleratingSpeedBoost: 28 * 17,

            maxSpeed:      0.055 * 3 / 17,
            maxSpeedBoost: 0.11  * 3 / 17,

            brakeStrength: 1.35,
        }

        // État
        this.steering     = 0
        this.speed        = 0
        this.goingForward = true
        this.position     = new THREE.Vector3()
        this._oldPosition = new THREE.Vector3()

        this.movement = {
            speed:             new THREE.Vector3(),
            localSpeed:        new THREE.Vector3(),
            acceleration:      new THREE.Vector3(),
            localAcceleration: new THREE.Vector3(),
        }

        this.controls = new Controls()
        this.wheels   = []

        this.setModel()
        this.setPhysics()
        this.setMovement()
        this.setAntena()
/*         this.setDebug() */
    }

    setModel()
    {
        this.model = this.resources.items.carModel.scene

        this.carMat = new THREE.MeshMatcapMaterial({ matcap: this.resources.items.matcapTexture })
        this.carMat.matcap.colorSpace = THREE.SRGBColorSpace
        this.carMeshes = []
        this.model.traverse(child =>
        {
            if(child.isMesh) {
                child.material = this.carMat
                this.carMeshes.push(child)
            }
        })

        this.group = new THREE.Group()
        this.group.add(this.model)
        this.scene.add(this.group)

        const wheelDefs = [
            { name: 'wheel_fl', steering: true  },
            { name: 'wheel_fr', steering: true  },
            { name: 'wheel_bl', steering: false },
            { name: 'wheel_br', steering: false },
        ]
        for(const { name, steering } of wheelDefs)
        {
            const mesh = this.model.getObjectByName(name)
            if(mesh)
            {
                this.wheels.push({
                    mesh,
                    steering,
                    worldPos: mesh.getWorldPosition(new THREE.Vector3()),
                })
            }
        }

        this.wheels.forEach(w => this.scene.attach(w.mesh))
    }

    setPhysics()
    {
        // Châssis
        this.chassisBody = new CANNON.Body({ mass: this.options.chassisMass })
        this.chassisBody.allowSleep = false

        let hasCollision = false
        this.model.traverse(child =>
        {
            if(child.userData?.data === 'collision' && child.userData?.shape === 'box')
            {
                child.visible = false
                hasCollision  = true
                this.chassisBody.addShape(
                    new CANNON.Box(new CANNON.Vec3(child.scale.x, child.scale.y, child.scale.z)),
                    new CANNON.Vec3(child.position.x, child.position.y, child.position.z)
                )
            }
        })

        if(!hasCollision)
        {
            const bbox   = new THREE.Box3().setFromObject(this.model)
            const center = new THREE.Vector3()
            const size   = new THREE.Vector3()
            bbox.getCenter(center)
            bbox.getSize(size)
            this.chassisBody.addShape(
                new CANNON.Box(new CANNON.Vec3(size.x / 2, size.y / 3, size.z / 2)),
                new CANNON.Vec3(center.x, center.y, center.z)
            )
        }

        const restLength  = this.options.wheelSuspensionRestLength
        const wheelRadius = this.options.wheelRadius
        const connY = this.wheels.length > 0 ? this.wheels[0].worldPos.y + 0.2 : 0
        this.chassisBody.position.set(0, restLength + wheelRadius - connY + 0.2, 0)

        // RaycastVehicle
        this.vehicle = new CANNON.RaycastVehicle({
            chassisBody:      this.chassisBody,
            indexRightAxis:   0,
            indexUpAxis:      1,
            indexForwardAxis: 2,
        })

        const opts = this.options
        this.wheels.forEach(w =>
        {
            this.vehicle.addWheel({
                radius:                          opts.wheelRadius,
                suspensionStiffness:             opts.wheelSuspensionStiffness,
                suspensionRestLength:            opts.wheelSuspensionRestLength,
                frictionSlip:                    opts.wheelFrictionSlip,
                dampingRelaxation:               opts.wheelDampingRelaxation,
                dampingCompression:              opts.wheelDampingCompression,
                maxSuspensionForce:              opts.wheelMaxSuspensionForce,
                rollInfluence:                   opts.wheelRollInfluence,
                maxSuspensionTravel:             opts.wheelMaxSuspensionTravel,
                customSlidingRotationalSpeed:    opts.wheelCustomSlidingRotationalSpeed,
                useCustomSlidingRotationalSpeed: true,
                directionLocal:                  new CANNON.Vec3(0, -1,  0),
                axleLocal:                       new CANNON.Vec3(-1,  0,  0),
                chassisConnectionPointLocal:     new CANNON.Vec3(w.worldPos.x, w.worldPos.y + 0.2, w.worldPos.z),
            })
            w.index = this.vehicle.wheelInfos.length - 1
        })

        this.vehicle.addToWorld(this.physics.world)
    }

    setMovement()
    {
        this.time.on('tick', () =>
        {
            const movementSpeed = new THREE.Vector3()
            movementSpeed.copy(this.group.position).sub(this._oldPosition)
            movementSpeed.multiplyScalar(1 / this.time.delta * 17)

            this.movement.acceleration = movementSpeed.clone().sub(this.movement.speed)
            this.movement.speed.copy(movementSpeed)

            const yaw = this.group.rotation.y
            this.movement.localSpeed        = this.movement.speed.clone().applyAxisAngle(new THREE.Vector3(0, 1, 0), -yaw)
            this.movement.localAcceleration = this.movement.acceleration.clone().applyAxisAngle(new THREE.Vector3(0, 1, 0), -yaw)
        })
    }

    setAntena()
    {
        const antenaMesh = this.model.getObjectByName('antena')
        if(!antenaMesh) return

        this.antena = {
            object:           antenaMesh,
            speedStrength:    10,
            damping:          0.035,
            pullBackStrength: 0.02,
            speed:            new THREE.Vector2(),
            absolutePosition: new THREE.Vector2(),
            localPosition:    new THREE.Vector2(),
        }

        this.time.on('tick', () =>
        {
            const max  = 1
            const accX = Math.min(Math.max(this.movement.acceleration.x, -max), max)
            const accZ = Math.min(Math.max(this.movement.acceleration.z, -max), max)

            this.antena.speed.x -= accX * this.antena.speedStrength
            this.antena.speed.y -= accZ * this.antena.speedStrength

            const pos     = this.antena.absolutePosition.clone()
            const pullBack = pos.negate().multiplyScalar(pos.length() * this.antena.pullBackStrength)
            this.antena.speed.add(pullBack)

            this.antena.speed.x *= 1 - this.antena.damping
            this.antena.speed.y *= 1 - this.antena.damping

            this.antena.absolutePosition.add(this.antena.speed)

            this.antena.localPosition.copy(this.antena.absolutePosition)
            this.antena.localPosition.rotateAround(new THREE.Vector2(), -this.group.rotation.y)

            this.antena.object.rotation.z = this.antena.localPosition.x * 0.1
            this.antena.object.rotation.x = this.antena.localPosition.y * 0.1
        })
    }

/*     setDebug()
    {
        const gui = new GUI({ title: 'Car debug' })

        const moteur = gui.addFolder('Moteur')
        moteur.add(this.options, 'acceleratingSpeed',      100, 1000, 10).name('Force moteur')
        moteur.add(this.options, 'acceleratingSpeedBoost', 100, 2000, 10).name('Force boost')
        moteur.add(this.options, 'maxSpeed',      0.001, 0.05, 0.001).name('Vit. max (units/ms)')
        moteur.add(this.options, 'maxSpeedBoost', 0.001, 0.05, 0.001).name('Vit. max boost')

        const direction = gui.addFolder('Direction')
        direction.add(this.options, 'steeringSpeed', 0.001, 0.05, 0.001).name('Vitesse virage')
        direction.add(this.options, 'steeringMax',   0.1,   0.8,  0.01 ).name('Angle max (rad)')

        const applyOpts  = () => this._applyWheelOptions()
        const suspension = gui.addFolder('Suspension')
        suspension.add(this.options, 'wheelSuspensionStiffness',  1,   100, 1   ).name('Raideur').onChange(applyOpts)
        suspension.add(this.options, 'wheelSuspensionRestLength', 0.01, 1,  0.01).name('Longueur repos').onChange(applyOpts)
        suspension.add(this.options, 'wheelMaxSuspensionTravel',  0.1,  2,  0.05).name('Débattement max').onChange(applyOpts)
        suspension.add(this.options, 'wheelDampingRelaxation',    0.1,  10, 0.1 ).name('Amort. extension').onChange(applyOpts)
        suspension.add(this.options, 'wheelDampingCompression',   0.1,  10, 0.1 ).name('Amort. compression').onChange(applyOpts)

        const roues = gui.addFolder('Roues')
        roues.add(this.options, 'wheelFrictionSlip',  0.1, 20,  0.1 ).name('Friction slip').onChange(applyOpts)
        roues.add(this.options, 'wheelRollInfluence', 0,   1,   0.01).name('Roll influence').onChange(applyOpts)
        roues.add(this.options, 'wheelRadius',        0.1, 1,   0.01).name('Rayon').onChange(applyOpts)

        const freinage = gui.addFolder('Freinage')
        freinage.add(this.options, 'brakeStrength', 0, 5, 0.05).name('Force frein')
    } */

    _applyWheelOptions()
    {
        for(const info of this.vehicle.wheelInfos)
        {
            info.radius               = this.options.wheelRadius
            info.suspensionStiffness  = this.options.wheelSuspensionStiffness
            info.suspensionRestLength = this.options.wheelSuspensionRestLength
            info.maxSuspensionTravel  = this.options.wheelMaxSuspensionTravel
            info.frictionSlip         = this.options.wheelFrictionSlip
            info.dampingRelaxation    = this.options.wheelDampingRelaxation
            info.dampingCompression   = this.options.wheelDampingCompression
            info.rollInfluence        = this.options.wheelRollInfluence
        }
    }

    resetPosition()
    {
        this.chassisBody.position.set(0, 1, 0)
        this.chassisBody.velocity.set(0, 0, 0)
        this.chassisBody.angularVelocity.set(0, 0, 0)
        this.chassisBody.quaternion.set(0, 0, 0, 1)
    }

    flashRed()
    {
        const redMat = new THREE.MeshBasicMaterial({ color: 0xff2020 })
        let step = 0
        const interval = setInterval(() =>
        {
            const useRed = step % 2 === 0
            this.carMeshes?.forEach(m => m.material = useRed ? redMat : this.carMat)
            step++
            if (step >= 10)
            {
                clearInterval(interval)
                this.carMeshes?.forEach(m => m.material = this.carMat)
            }
        }, 130)
    }

    knockback(fromPos)
    {
        if (this.isInvincible) return false
        this.isInvincible = true

        const carPos = this.chassisBody.position
        const dx     = carPos.x - fromPos.x
        const dz     = carPos.z - fromPos.z
        const len    = Math.sqrt(dx * dx + dz * dz) || 1
        const speed  = 18

        this.chassisBody.velocity.set(
            (dx / len) * speed,
            3,
            (dz / len) * speed
        )
        this.chassisBody.angularVelocity.set(0, 0, 0)

        this.flashRed()
        setTimeout(() => { this.isInvincible = false }, 2000)
        return true
    }

    update()
    {
        // Sauvegarde position
        this._oldPosition.copy(this.group.position)

        const disabled = this.controls.disabled ?? false
        const { up, down, left, right, brake, boost } = disabled
            ? { up: false, down: false, left: false, right: false, brake: true, boost: false }
            : this.controls.actions
        const vel = this.chassisBody.velocity

        // Vitesse et direction
        this.speed = Math.hypot(vel.x, vel.y, vel.z) / 1000  // units/ms

        const quat = new THREE.Quaternion(
            this.chassisBody.quaternion.x, this.chassisBody.quaternion.y,
            this.chassisBody.quaternion.z, this.chassisBody.quaternion.w
        )
        // Axe avant du châssis en espace monde
        const worldFwd = new THREE.Vector3(0, 0, -1).applyQuaternion(quat)
        const velVec   = new THREE.Vector3(vel.x, vel.y, vel.z)
        this.goingForward = velVec.dot(worldFwd) > 0

        const steerStrength = this.time.delta * this.options.steeringSpeed
        if(right)      this.steering += steerStrength
        else if(left)  this.steering -= steerStrength
        else
        {
            if(Math.abs(this.steering) > steerStrength)
                this.steering -= steerStrength * Math.sign(this.steering)
            else
                this.steering = 0
        }
        this.steering = Math.max(-this.options.steeringMax, Math.min(this.options.steeringMax, this.steering))

        this.wheels.forEach(w =>
        {
            if(w.steering)
                this.vehicle.setSteeringValue(-this.steering, w.index)
        })

        // Force moteur
        const accSpeed = boost ? this.options.acceleratingSpeedBoost : this.options.acceleratingSpeed
        const maxSpd   = boost ? this.options.maxSpeedBoost          : this.options.maxSpeed

        let accelerating = 0
        if(up)   accelerating =  (this.speed < maxSpd || !this.goingForward) ?  accSpeed : 0
        if(down) accelerating =  (this.speed < maxSpd ||  this.goingForward) ? -accSpeed : 0

        this.wheels.forEach(w =>
        {
            if(!w.steering)
                this.vehicle.applyEngineForce(-accelerating, w.index)
            else
                this.vehicle.applyEngineForce(0, w.index)
        })

        // Décélération passive
        if(!up && !down)
        {
            const slowDown = new CANNON.Vec3(
                -vel.x * 0.1,
                0,
                -vel.z * 0.1
            )
            this.chassisBody.applyImpulse(slowDown, this.chassisBody.position)
        }

        // Freinage sur les 4 roues
        const brakeValue = brake ? this.options.brakeStrength : 0
        this.wheels.forEach(w => this.vehicle.setBrake(brakeValue, w.index))

        // Sync visuel châssis
        this.group.position.copy(this.chassisBody.position)
        this.group.quaternion.copy(this.chassisBody.quaternion)
        this.position.copy(this.group.position)

        // Sync visuel roues
        for(let i = 0; i < this.vehicle.wheelInfos.length; i++)
        {
            this.vehicle.updateWheelTransform(i)
            const t = this.vehicle.wheelInfos[i].worldTransform
            const w = this.wheels[i]
            if(!w?.mesh) continue
            w.mesh.position.set(t.position.x, t.position.y, t.position.z)
            w.mesh.quaternion.set(t.quaternion.x, t.quaternion.y, t.quaternion.z, t.quaternion.w)
        }
    }
}

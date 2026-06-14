import Game from '../Game.js'
import Floor from './Floor.js'
import Car from './Car.js'
import Environment from './Environment.js'
import MapBorder from './MapBorder.js'
import ScoreManager from './ScoreManager.js'
import ObjectiveManager from './ObjectiveManager.js'
import LevelManager from './LevelManager.js'
import EnergyBall from './EnergyBall.js'
import Ring from './Ring.js'
import RockStructure from './RockStructure.js'
import LifeManager from './LifeManager.js'
import Obstacle from './Obstacle.js'
import AuthModal from '../Auth/AuthModal.js'
import AuthService from '../Auth/AuthService.js'
import Leaderboard from './Leaderboard.js'
import SoundManager from '../Utils/SoundManager.js'

export default class World {

    constructor() {
        this.game         = new Game()
        this.scene        = this.game.scene
        this.ressources   = this.game.ressources

        this.level        = 1
        this.environment  = new Environment()
        this.mapBorder    = new MapBorder()
        this.scoreManager = new ScoreManager()
        this.levelManager = new LevelManager()
        this.lifeManager  = new LifeManager()
        this.authService  = new AuthService()

        this._authPending     = true
        this._pendingLevelLoad = false

        this.ressources.on('ready', () => {
            this.floor = new Floor()
            this.car   = new Car()
            if (this.car?.controls) this.car.controls.disabled = true
            this._setupObstacleCollision()

            if (this._authPending) {
                this._pendingLevelLoad = true
            } else {
                this._loadLevel()
            }
        })

        const modal = new AuthModal()
        modal.promise.then(result => {
            this._authPending = false
            this.authUser  = result?.user  || null
            this.authToken = result?.token || null

            if (this.authUser) {
                this.lifeManager.setUsername(this.authUser.username)
            }

            this.leaderboard = new Leaderboard()
            this._showStartScreen()
        })
    }

    // Gestion des niveaux

    _startObjectiveManager() {
        const config = this.levelManager.getConfig(this.level)
        this.objectiveManager = new ObjectiveManager({ ...config, level: this.level })
        this.objectiveManager.on('levelComplete', () => this._onLevelComplete())
        this.objectiveManager.on('levelFailed',   () => this._onLevelFailed())
    }

    _loadLevel() {
        const config = this.levelManager.getConfig(this.level)
        const { ballPositions, ringData, rockPositions, obstaclePositions } = this.levelManager.generatePositions(config)

        this.energyBalls    = ballPositions.map(pos => new EnergyBall(pos))
        this.rings          = ringData.map(({ pos, normal, points }) => new Ring(pos, normal, 3.9, points))
        this.rockStructures = rockPositions.map(pos => new RockStructure(pos))
        this.obstacles      = obstaclePositions.map(pos => new Obstacle(pos))
    }

    _clearObjectives() {
        for (const b of (this.energyBalls    ?? [])) b.destroy()
        for (const r of (this.rings          ?? [])) r.destroy()
        for (const r of (this.rockStructures ?? [])) r.destroy()
        for (const o of (this.obstacles      ?? [])) o.destroy()
        this.energyBalls    = []
        this.rings          = []
        this.rockStructures = []
        this.obstacles      = []
    }

    _setupObstacleCollision() {
        this.car.chassisBody.addEventListener('collide', (event) => {
            const hit = this.obstacles?.find(o => o.body === event.body)
            if (!hit) return

            const wasHit = this.car.knockback(hit.body.position)
            if (!wasHit) return

            new SoundManager().playDamage()
            const gameOver = this.lifeManager.loseLife()
            if (gameOver) this._onLifeOut()
        })
    }

    _nextLevel() {
        this.level++
        this._clearObjectives()
        this.objectiveManager.destroy()
        this._startObjectiveManager()
        this.car?.resetPosition()
        this._loadLevel()
    }

    // Callbacks ObjectiveManager 

    _onLevelComplete() {
        this._showLevelComplete()
    }

    _onLevelFailed() {
        if (this.car?.controls) {
            Object.keys(this.car.controls.actions).forEach(k => this.car.controls.actions[k] = false)
            this.car.controls.disabled = true
        }
        this._showGameOver('Temps écoulé')
    }

    _onLifeOut() {
        if (this.car?.controls) {
            Object.keys(this.car.controls.actions).forEach(k => this.car.controls.actions[k] = false)
            this.car.controls.disabled = true
        }
        this.game.world.objectiveManager?.finished === false && (this.game.world.objectiveManager.finished = true)
        this._showGameOver('Vies épuisées')
    }

    // Écrans UI

    _showStartScreen() {
        const overlay = document.createElement('div')
        overlay.style.cssText = `
            position: fixed; inset: 0;
            background: rgba(0,0,0,0.65);
            display: flex; flex-direction: column;
            align-items: center; justify-content: center;
            z-index: 500; cursor: pointer;
            font-family: 'Inter', sans-serif;
            animation: fadeIn 0.4s ease forwards;
        `
        overlay.innerHTML = `
            <style>
                @keyframes fadeIn { from{opacity:0} to{opacity:1} }
                @keyframes pulse  { 0%,100%{opacity:1} 50%{opacity:0.4} }
            </style>
            <div style="font-size:13px; letter-spacing:5px; color:rgba(255,255,255,0.9);
                        text-transform:uppercase; animation: pulse 2s ease-in-out infinite;">
                Cliquer pour commencer
            </div>
        `
        overlay.addEventListener('click', () => {
            overlay.remove()
            new SoundManager().playMusic()
            if (this.car?.controls) this.car.controls.disabled = false
            this._startObjectiveManager()
            if (this._pendingLevelLoad) {
                this._pendingLevelLoad = false
                this._loadLevel()
            }
        })
        document.body.appendChild(overlay)
    }

    _showLevelComplete() {
        const overlay = document.createElement('div')
        overlay.style.cssText = `
            position: fixed; inset: 0;
            background: rgba(0,0,0,0.65);
            display: flex; flex-direction: column;
            align-items: center; justify-content: center;
            z-index: 500; pointer-events: none;
            font-family: 'Inter', sans-serif;
            animation: fadeIn 0.4s ease forwards;
        `
        overlay.innerHTML = `
            <style>@keyframes fadeIn { from{opacity:0} to{opacity:1} }</style>
            <div style="font-size:16px; letter-spacing:4px; color:rgba(255,255,255,0.5);
                        margin-bottom:8px; text-transform:uppercase;">
                Niveau ${this.level - 1}
            </div>
            <div style="font-size:64px; font-weight:900; color:#44ff88;
                        letter-spacing:4px; margin-bottom:40px;">
                TERMINÉ !
            </div>
            <div style="font-size:48px; font-weight:900; color:#fff;
                        letter-spacing:3px;">
                ${this.scoreManager.score} PTS
            </div>
        `
        document.body.appendChild(overlay)

        let countdown = 3
        const label = document.createElement('div')
        label.style.cssText = `margin-top:48px; font-size:15px; letter-spacing:3px;
            color:rgba(255,255,255,0.4); text-transform:uppercase;`
        label.textContent = `Niveau suivant dans ${countdown}…`
        overlay.appendChild(label)

        const tick = setInterval(() => {
            countdown--
            if (countdown > 0) {
                label.textContent = `Niveau suivant dans ${countdown}…`
            } else {
                clearInterval(tick)
                overlay.remove()
                this._nextLevel()
            }
        }, 1000)
    }

    _showGameOver(subtitle = 'Temps écoulé') {
        const overlay = document.createElement('div')
        overlay.style.cssText = `
            position: fixed; inset: 0;
            background: rgba(0,0,0,0.75);
            display: flex; flex-direction: column;
            align-items: center; justify-content: center;
            z-index: 500;
            font-family: 'Inter', sans-serif;
            animation: fadeIn 0.6s ease forwards;
        `

        const savedBadge = this.authUser
            ? `<div id="go-save-status" style="font-size:12px; letter-spacing:2px; color:rgba(255,255,255,0.3);
                    margin-bottom:40px; text-transform:uppercase;">Sauvegarde en cours…</div>`
            : '<div style="margin-bottom:40px;"></div>'

        overlay.innerHTML = `
            <style>
                @keyframes fadeIn { from{opacity:0} to{opacity:1} }
                .go-btn:hover { background:#ff2222 !important; transform:scale(1.05); }
            </style>
            <div style="font-size:14px; letter-spacing:4px; color:rgba(255,255,255,0.4);
                        margin-bottom:8px; text-transform:uppercase;">
                Niveau ${this.level}
            </div>
            <div style="font-size:72px; font-weight:900; color:#ff4444;
                        letter-spacing:6px; margin-bottom:12px;">
                GAME OVER
            </div>
            <div style="font-size:16px; letter-spacing:3px; color:rgba(255,255,255,0.5);
                        margin-bottom:8px; text-transform:uppercase;">
                Score final
            </div>
            <div style="font-size:56px; font-weight:900; color:#fff;
                        letter-spacing:3px; margin-bottom:20px;">
                ${this.scoreManager.score} PTS
            </div>
            ${savedBadge}
            <button class="go-btn" style="
                background:#cc0000; border:none;
                color:#fff; font-family:'Inter', sans-serif;
                font-size:18px; font-weight:900; letter-spacing:3px;
                padding:16px 48px; cursor:pointer; text-transform:uppercase;
                transition:background 0.2s, transform 0.15s;">
                Rejouer
            </button>
        `
        new SoundManager().stopMusic()
        overlay.querySelector('.go-btn').addEventListener('click', () => window.location.reload())
        document.body.appendChild(overlay)

        if (this.authUser) {
            this.authService.pushScore(this.scoreManager.score).then(ok => {
                const badge = overlay.querySelector('#go-save-status')
                if (!badge) return
                if (ok) {
                    badge.textContent = '✓ Score sauvegardé'
                    badge.style.color = '#44ff88'
                    this.leaderboard?.refresh()
                } else {
                    badge.textContent = 'Score non sauvegardé'
                    badge.style.color = 'rgba(255,100,100,0.6)'
                }
            })
        }
    }

    // Boucle

    update() {
        if (this.car)            this.car.update()
        if (this.energyBalls)    for (const b of this.energyBalls)    b.update()
        if (this.rings)          for (const r of this.rings)          r.update()
        if (this.rockStructures) for (const r of this.rockStructures) r.update()
        if (this.obstacles)      for (const o of this.obstacles)      o.update()
    }
}

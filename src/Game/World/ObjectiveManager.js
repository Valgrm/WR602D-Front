import EventEmitter from '../Utils/EventEmitter.js'
import Game from '../Game.js'

export default class ObjectiveManager extends EventEmitter {
    constructor({ balls = 0, rings = 0, rocks = 0, timeSeconds = 30, level = 1 } = {}) {
        super()
        this.game      = new Game()
        this.timeLeft  = timeSeconds
        this.totalTime = timeSeconds
        this.finished  = false

        this.level = level
        this._defs = []
        if (balls > 0) this._defs.push({ key: 'balls', label: 'Boules d\'énergie', total: balls, done: 0 })
        if (rings > 0) this._defs.push({ key: 'rings', label: 'Anneaux',           total: rings, done: 0 })
        if (rocks > 0) this._defs.push({ key: 'rocks', label: 'Structures',        total: rocks, done: 0 })

        this._injectStyles()
        this._buildTimerBar()
        this._buildObjectivesPanel()
        this._buildTimerHUD()

        this.game.time.on('tick', () => this._tick())
    }

    // Logique

    _tick() {
        if (this.finished) return
        this.timeLeft -= this.game.time.delta / 1000
        if (this.timeLeft <= 0) {
            this.timeLeft = 0
            this.finished = true
            this._updateTimer()
            this.trigger('levelFailed')
            return
        }
        this._updateTimer()
    }

    complete(key) {
        if (this.finished) return
        const def = this._defs.find(d => d.key === key)
        if (!def || def.done >= def.total) return
        def.done++
        this._updateObjectiveRow(def)
        if (this._allDone()) {
            this.finished = true
            this.trigger('levelComplete')
        }
    }

    _allDone() {
        return this._defs.every(d => d.done >= d.total)
    }

    destroy() {
        this.finished = true
        this._barEl?.remove()
        this._panelEl?.remove()
        this._timerEl?.remove()
    }

    // UI : panel objectifs

    _buildObjectivesPanel() {
        this._panelEl = document.createElement('div')
        this._panelEl.className = 'obj-panel'

        const title = document.createElement('div')
        title.className = 'obj-title'
        title.textContent = `Niveau ${this.level} — Objectifs`
        this._panelEl.appendChild(title)

        this._rowEls = {}
        for (const def of this._defs) {
            const row   = document.createElement('div')
            row.className = 'obj-row'

            const check = document.createElement('div')
            check.className = 'obj-check'

            const label = document.createElement('div')
            label.className = 'obj-label'
            label.textContent = def.label

            const count = document.createElement('div')
            count.className = 'obj-count'
            count.textContent = `0 / ${def.total}`

            row.append(check, label, count)
            this._panelEl.appendChild(row)
            this._rowEls[def.key] = { row, check, count }
        }

        document.body.appendChild(this._panelEl)
    }

    _updateObjectiveRow(def) {
        const els = this._rowEls[def.key]
        els.count.textContent = `${def.done} / ${def.total}`
        if (def.done >= def.total) {
            els.row.classList.add('done')
        }
    }

    // UI : barre de timer

    _buildTimerBar() {
        this._barEl = document.createElement('div')
        this._barEl.className = 'timer-bar-bg'

        this._barFillEl = document.createElement('div')
        this._barFillEl.className = 'timer-bar-fill'
        this._barFillEl.style.width = '100%'

        this._barEl.appendChild(this._barFillEl)
        document.body.appendChild(this._barEl)
    }

    _updateTimerBar() {
        const ratio = Math.max(0, this.timeLeft / this.totalTime)
        const color = this._barColor(ratio)
        this._barFillEl.style.width      = `${ratio * 100}%`
        this._barFillEl.style.background = color
        this._barFillEl.style.boxShadow  = `0 0 8px ${color}`
    }

    _barColor(ratio) {
        if (ratio > 0.5) {
            const t = (ratio - 0.5) * 2 
            return `rgb(255, 255, ${Math.round(255 * t)})`
        } else {
            const t = ratio * 2
            return `rgb(255, ${Math.round(255 * t)}, 0)`
        }
    }

    // UI : timer

    _buildTimerHUD() {
        this._timerEl = document.createElement('div')
        this._timerEl.className = 'timer-hud'

        const label = document.createElement('div')
        label.className = 'timer-label'
        label.textContent = 'TEMPS'

        this._timerValue = document.createElement('div')
        this._timerValue.textContent = `${Math.ceil(this.timeLeft)}s`

        this._timerEl.append(label, this._timerValue)
        document.body.appendChild(this._timerEl)
    }

    _updateTimer() {
        const secs = Math.ceil(this.timeLeft)
        this._timerValue.textContent = `${secs}s`
        if (this.timeLeft <= 10 && !this._timerEl.classList.contains('urgent')) {
            this._timerEl.classList.add('urgent')
        }
        this._updateTimerBar()
    }

    // UI : bannière victoire/défaite

    _showBanner(text, color) {
        const el = document.createElement('div')
        el.className = 'obj-banner'
        el.textContent = text
        el.style.color = color
        el.style.textShadow = `0 0 30px ${color}`
        document.body.appendChild(el)
        setTimeout(() => el.remove(), 3000)
    }

    // Styles

    _injectStyles() {
        if (document.getElementById('obj-manager-styles')) return
        const style = document.createElement('style')
        style.id = 'obj-manager-styles'
        style.textContent = `
            @keyframes timerPulse {
                0%, 100% { transform: scale(1); }
                50%       { transform: scale(1.1); }
            }
            @keyframes bannerIn {
                0%   { opacity: 0; transform: translate(-50%, -50%) scale(0.7); }
                20%  { opacity: 1; transform: translate(-50%, -50%) scale(1.05); }
                80%  { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                100% { opacity: 0; transform: translate(-50%, -50%) scale(0.95); }
            }

            .timer-bar-bg {
                position: fixed; top: 0; left: 0; right: 0;
                height: 6px;
                background: rgba(0, 0, 0, 0.35);
                z-index: 200; pointer-events: none;
            }
            .timer-bar-fill {
                position: absolute; right: 0; top: 0; bottom: 0;
                background: #fff;
                transition: width 0.1s linear;
            }

            .obj-panel {
                position: fixed; top: 20px; left: 20px;
                background: rgba(0, 0, 0, 0.55);
                padding: 14px 18px;
                font-family: 'Inter', sans-serif;
                pointer-events: none; z-index: 100;
                min-width: 210px;
            }
            .obj-title {
                font-size: 10px; font-weight: 900; letter-spacing: 3px;
                color: rgba(255, 255, 255, 0.4); text-transform: uppercase;
                margin-bottom: 12px;
            }
            .obj-row {
                display: flex; align-items: center; gap: 10px;
                margin-bottom: 8px; transition: opacity 0.4s;
            }
            .obj-row.done { opacity: 0.4; }
            .obj-check {
                width: 18px; height: 18px; flex-shrink: 0;
                border: 2px solid rgba(255, 255, 255, 0.35);
                border-radius: 50%;
                display: flex; align-items: center; justify-content: center;
                font-size: 11px; font-weight: 900; color: #000;
                transition: background 0.3s, border-color 0.3s;
            }
            .obj-row.done .obj-check {
                background: #44ff88; border-color: #44ff88;
            }
            .obj-label {
                flex: 1; font-size: 13px; font-weight: 700;
                color: #fff; letter-spacing: 0.5px;
            }
            .obj-count {
                font-size: 13px; font-weight: 700;
                color: rgba(255, 255, 255, 0.5);
            }
            .obj-row.done .obj-count { color: #44ff88; }

            .timer-hud {
                position: fixed; top: 20px; right: 20px;
                font-family: 'Inter', sans-serif;
                pointer-events: none; z-index: 100;
                text-align: right;
            }
            .timer-label {
                font-size: 10px; font-weight: 900; letter-spacing: 3px;
                color: rgba(255, 255, 255, 0.4); text-transform: uppercase;
                margin-bottom: 2px;
            }
            .timer-hud > div:last-child {
                font-size: 44px; font-weight: 900; color: #fff;
                text-shadow: 0 0 20px rgba(68, 204, 255, 0.5), 2px 2px 6px #000;
                letter-spacing: 2px; line-height: 1;
            }
            .timer-hud.urgent > div:last-child {
                color: #ff4444;
                text-shadow: 0 0 24px rgba(255, 68, 68, 0.8), 2px 2px 6px #000;
                animation: timerPulse 0.5s ease-in-out infinite;
            }

            .obj-banner {
                position: fixed; top: 50%; left: 50%;
                transform: translate(-50%, -50%);
                font-family: 'Inter', sans-serif;
                font-size: 48px; font-weight: 900; letter-spacing: 4px;
                pointer-events: none; z-index: 300;
                animation: bannerIn 3s ease-in-out forwards;
                white-space: nowrap;
            }
        `
        document.head.appendChild(style)
    }
}

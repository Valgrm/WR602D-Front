export default class ScoreManager {
    constructor() {
        this.score = 0
        this._injectStyles()
        this._createHUD()
    }

    _injectStyles() {
        const style = document.createElement('style')
        style.textContent = `
            @keyframes scoreFloat {
                0%   { opacity: 1; transform: translate(-50%, 0) scale(1.3); }
                100% { opacity: 0; transform: translate(-50%, -90px) scale(0.9); }
            }
            .score-popup {
                position: fixed;
                left: 50%;
                top: 38%;
                font-family: 'Inter', sans-serif;
                font-size: 26px;
                font-weight: 900;
                color: #ffffff;
                text-shadow: 2px 2px 5px #000;
                text-align: center;
                pointer-events: none;
                z-index: 200;
                animation: scoreFloat 1.8s ease-out forwards;
            }
        `
        document.head.appendChild(style)
    }

    _createHUD() {
        this.hudEl = document.createElement('div')
        this.hudEl.style.cssText = `
            position: fixed; top: 20px; left: 50%;
            transform: translateX(-50%);
            font-family: 'Inter', sans-serif;
            font-size: 34px; font-weight: 900; color: #fff;
            text-shadow: 2px 2px 6px #000;
            pointer-events: none; z-index: 100; letter-spacing: 3px;
        `
        this.hudEl.textContent = '0 PTS'
        document.body.appendChild(this.hudEl)
    }

    add(points, label = '') {
        this.score += points
        this.hudEl.textContent = `${this.score} PTS`

        const popup = document.createElement('div')
        popup.className = 'score-popup'
        popup.textContent = label ? `${label}\n+${points} pts` : `+${points} pts`
        document.body.appendChild(popup)
        setTimeout(() => popup.remove(), 1800)
    }
}

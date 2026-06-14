export default class LifeManager {
    constructor() {
        this.lives    = 3
        this.maxLives = 3
        this._injectStyles()
        this._createHUD()
    }

    _injectStyles() {
        if (document.getElementById('life-manager-styles')) return
        const style = document.createElement('style')
        style.id = 'life-manager-styles'
        style.textContent = `
            @keyframes heartLost {
                0%   { transform: scale(1); }
                30%  { transform: scale(1.5); }
                60%  { transform: scale(0.6); }
                100% { transform: scale(1); }
            }
            .life-heart {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                transition: color 0.3s, filter 0.3s, opacity 0.3s;
                user-select: none;
                filter: drop-shadow(0 0 6px rgba(255, 255, 255, 0.82)) drop-shadow(2px 2px 3px #000);
            }
            .life-heart.lost {
                animation: heartLost 0.4s ease-out forwards;
            }
        `
        document.head.appendChild(style)
    }

    _createHUD() {
        this.wrapper = document.createElement('div')
        this.wrapper.style.cssText = `
            position: fixed; bottom: 24px; left: 50%;
            transform: translateX(-50%);
            display: flex; flex-direction: column; align-items: center; gap: 6px;
            pointer-events: none; z-index: 100;
        `

        this.usernameEl = document.createElement('div')
        this.usernameEl.style.cssText = `
            font-family: 'Inter', sans-serif;
            font-size: 11px; font-weight: 700;
            letter-spacing: 3px; text-transform: uppercase;
            color: rgba(255,255,255,0.55);
            text-shadow: 1px 1px 4px #000;
            display: none;
        `
        this.wrapper.appendChild(this.usernameEl)

        this.container = document.createElement('div')
        this.container.style.cssText = `display: flex; gap: 12px; align-items: center;`
        this.wrapper.appendChild(this.container)

        this.hearts = []
        for (let i = 0; i < this.maxLives; i++) {
            const heart = document.createElement('div')
            heart.className = 'life-heart'
            heart.innerHTML = `<svg width="34" height="34" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.03553 1C1.80677 1 0 2.80677 0 5.03553C0 6.10582 0.42517 7.13228 1.18198 7.88909L7.14645 13.8536C7.34171 14.0488 7.65829 14.0488 7.85355 13.8536L13.818 7.88909C14.5748 7.13228 15 6.10582 15 5.03553C15 2.80677 13.1932 1 10.9645 1C9.89418 1 8.86772 1.42517 8.11091 2.18198L7.5 2.79289L6.88909 2.18198C6.13228 1.42517 5.10582 1 4.03553 1Z" fill="currentColor"/>
</svg>`
            heart.style.color = '#fff'
            this.container.appendChild(heart)
            this.hearts.push(heart)
        }
        document.body.appendChild(this.wrapper)
    }

    setUsername(name) {
        if (!name) return
        this.usernameEl.textContent = name
        this.usernameEl.style.display = 'block'
    }

    loseLife() {
        if (this.lives <= 0) return true

        this.lives--
        const lost = this.hearts[this.lives]
        lost.classList.add('lost')
        lost.style.color   = 'rgba(80,80,80,0.4)'
        lost.style.filter  = 'none'
        lost.style.opacity = '0.35'
        setTimeout(() => lost.classList.remove('lost'), 400)

        return this.lives <= 0
    }

    destroy() {
        this.wrapper?.remove()
    }
}

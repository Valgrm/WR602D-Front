import AuthService from '../Auth/AuthService.js'

const BASE_URL = 'http://symfony.mmi-troyes.fr:8319'

export default class Leaderboard {
    constructor() {
        this.authService = new AuthService()
        this._createHUD()
        this.refresh()
    }

    _createHUD() {
        this.el = document.createElement('div')
        this.el.style.cssText = `
            position: fixed; bottom: 24px; left: 20px;
            background: rgba(0, 0, 0, 0.55);
            padding: 14px 18px;
            font-family: 'Inter', sans-serif;
            pointer-events: none; z-index: 100;
            min-width: 180px;
        `
        document.body.appendChild(this.el)
        this._render([])
    }

    async refresh() {
        if (!this.authService.token) {
            this._render([])
            return
        }

        try {
            const gamesRes = await fetch(`${BASE_URL}/api/games`, {
                headers: { 'Authorization': `Bearer ${this.authService.token}` },
            })
            if (!gamesRes.ok) return

            const games = await gamesRes.json()
            const top5  = [...games].sort((a, b) => b.score - a.score).slice(0, 5)

            const userIds = [...new Set(top5.map(g => g.user.split('/').pop()))]
            const usernames = {}
            await Promise.all(userIds.map(async id => {
                const res = await fetch(`${BASE_URL}/api/users/${id}`, {
                    headers: { 'Authorization': `Bearer ${this.authService.token}` },
                })
                if (res.ok) {
                    const u = await res.json()
                    usernames[id] = u.username
                }
            }))

            const entries = top5.map(g => ({
                username: usernames[g.user.split('/').pop()] ?? '???',
                score:    g.score,
            }))

            this._render(entries)
        } catch {}
    }

    _render(entries) {
        this.el.innerHTML = `
            <div style="font-size:10px; font-weight:900; letter-spacing:3px;
                        color:rgba(255,255,255,0.4); text-transform:uppercase;
                        margin-bottom:12px;">
                Classement
            </div>
            ${entries.length === 0
                ? `<div style="font-size:12px; font-weight:700;
                               color:rgba(255,255,255,0.2); letter-spacing:1px;">—</div>`
                : entries.map((e, i) => `
                    <div style="display:flex; align-items:baseline; gap:10px; margin-bottom:6px;">
                        <span style="font-size:10px; font-weight:900;
                                     color:rgba(255,255,255,0.4); width:10px;
                                     text-align:right; letter-spacing:1px;">${i + 1}</span>
                        <span style="font-size:13px; font-weight:700; color:#fff;
                                     letter-spacing:0.5px; flex:1;">${e.username}</span>
                        <span style="font-size:13px; font-weight:700;
                                     color:rgba(255,255,255,0.5);">${e.score}</span>
                    </div>
                `).join('')
            }
        `
    }

    destroy() {
        this.el?.remove()
    }
}

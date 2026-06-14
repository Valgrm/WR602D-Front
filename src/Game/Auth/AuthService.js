const BASE_URL = 'http://45.155.169.226'

let instance = null

export default class AuthService {
    constructor() {
        if (instance) return instance
        instance = this
        this.token = null
        this.user  = null
    }

    get isLoggedIn() {
        return !!this.token && !!this.user
    }

    async login(username, password) {
        const loginRes = await fetch(`${BASE_URL}/api/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        })
        if (!loginRes.ok) throw new Error('Pseudo ou mot de passe incorrect')

        const { token } = await loginRes.json()
        this.token = token

        const meRes = await fetch(`${BASE_URL}/api/me`, {
            headers: { 'Authorization': `Bearer ${token}` },
        })
        if (!meRes.ok) throw new Error('Impossible de récupérer le profil')

        this.user = await meRes.json()
        return this.user
    }

    async register(email, username, plainPassword) {
        const res = await fetch(`${BASE_URL}/api/users`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, username, plainPassword }),
        })
        if (!res.ok) {
            let msg = 'Données invalides'
            try {
                const err = await res.json()
                if (err.violations?.length) msg = err.violations.map(v => v.message).join(' • ')
                else if (err.detail) msg = err.detail
            } catch {}
            throw new Error(msg)
        }
    }

    async pushScore(score) {
        if (!this.isLoggedIn) return false
        try {
            const res = await fetch(`${BASE_URL}/api/games`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.token}`,
                },
                body: JSON.stringify({ score, user: `/api/users/${this.user.id}` }),
            })
            return res.ok
        } catch {
            return false
        }
    }
}

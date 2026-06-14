import AuthService from './AuthService.js'

export default class AuthModal {
    constructor() {
        this.authService = new AuthService()
        this._resolve    = null
        this._activeTab  = 'login'
        this._loading    = false

        this.promise = new Promise(resolve => { this._resolve = resolve })

        this._injectStyles()
        this._render()
        this._show()
    }

    _injectStyles() {
        if (document.getElementById('auth-modal-styles')) return
        const style = document.createElement('style')
        style.id = 'auth-modal-styles'
        style.textContent = `
            @keyframes authFadeIn {
                from { opacity: 0; transform: translate(-50%, -48%) scale(0.96); }
                to   { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            }
            #auth-overlay {
                display: none;
                position: fixed; inset: 0;
                background: rgba(0, 0, 0, 0.88);
                z-index: 1000;
            }
            #auth-card {
                position: absolute;
                top: 50%; left: 50%;
                transform: translate(-50%, -50%);
                background: #111;
                border: 1px solid rgba(255,255,255,0.08);
                width: 360px;
                padding: 36px 32px 28px;
                font-family: 'Inter', sans-serif;
                color: #fff;
                animation: authFadeIn 0.3s ease forwards;
            }
            #auth-logo {
                text-align: center;
                font-size: 11px;
                letter-spacing: 5px;
                color: rgba(255,255,255,0.3);
                text-transform: uppercase;
                margin-bottom: 28px;
            }
            #auth-tabs {
                display: flex;
                gap: 0;
                margin-bottom: 28px;
                border-bottom: 1px solid rgba(255,255,255,0.1);
            }
            .auth-tab {
                flex: 1;
                background: none;
                border: none;
                padding: 10px 0;
                font-family: 'Inter', sans-serif;
                font-size: 13px;
                font-weight: 700;
                letter-spacing: 2px;
                text-transform: uppercase;
                cursor: pointer;
                color: rgba(255,255,255,0.3);
                transition: color 0.2s;
                border-bottom: 2px solid transparent;
                margin-bottom: -1px;
            }
            .auth-tab.active {
                color: #fff;
                border-bottom-color: #fff;
            }
            .auth-form { display: none; flex-direction: column; gap: 14px; }
            .auth-form.active { display: flex; }
            .auth-field {
                display: flex;
                flex-direction: column;
                gap: 6px;
            }
            .auth-field label {
                font-size: 10px;
                letter-spacing: 2px;
                text-transform: uppercase;
                color: rgba(255,255,255,0.4);
            }
            .auth-field input {
                background: rgba(255,255,255,0.05);
                border: 1px solid rgba(255,255,255,0.12);
                color: #fff;
                font-family: 'Inter', sans-serif;
                font-size: 14px;
                padding: 11px 14px;
                outline: none;
                transition: border-color 0.2s;
            }
            .auth-field input:focus {
                border-color: rgba(255,255,255,0.4);
            }
            .auth-field input::placeholder { color: rgba(255,255,255,0.2); }
            #auth-error {
                font-size: 12px;
                color: #ff5555;
                letter-spacing: 0.5px;
                min-height: 18px;
                text-align: center;
            }
            .auth-submit {
                background: #fff;
                color: #000;
                border: none;
                font-family: 'Inter', sans-serif;
                font-size: 13px;
                font-weight: 900;
                letter-spacing: 3px;
                text-transform: uppercase;
                padding: 14px;
                cursor: pointer;
                margin-top: 4px;
                transition: background 0.2s, opacity 0.2s;
            }
            .auth-submit:hover { background: #e0e0e0; }
            .auth-submit:disabled { opacity: 0.4; cursor: not-allowed; }
            #auth-offline {
                display: block;
                background: none;
                border: none;
                font-family: 'Inter', sans-serif;
                font-size: 11px;
                letter-spacing: 2px;
                text-transform: uppercase;
                color: rgba(255,255,255,0.25);
                cursor: pointer;
                text-align: center;
                width: 100%;
                margin-top: 18px;
                padding: 6px;
                transition: color 0.2s;
            }
            #auth-offline:hover { color: rgba(255,255,255,0.55); }
            .auth-hint {
                font-size: 10px;
                color: rgba(255,255,255,0.2);
                letter-spacing: 0.5px;
                margin-top: -6px;
            }
        `
        document.head.appendChild(style)
    }

    _render() {
        this.overlay = document.createElement('div')
        this.overlay.id = 'auth-overlay'

        this.overlay.innerHTML = `
            <div id="auth-card">
                <div id="auth-tabs">
                    <button class="auth-tab active" data-tab="login">Connexion</button>
                    <button class="auth-tab" data-tab="register">Inscription</button>
                </div>

                <!-- Login form -->
                <form class="auth-form active" id="form-login" autocomplete="on">
                    <div class="auth-field">
                        <label>Pseudo</label>
                        <input type="text" name="username" placeholder="MonPseudo" autocomplete="username" required />
                    </div>
                    <div class="auth-field">
                        <label>Mot de passe</label>
                        <input type="password" name="password" placeholder="••••••••" autocomplete="current-password" required />
                    </div>
                    <div id="auth-error"></div>
                    <button class="auth-submit" type="submit">Se connecter</button>
                </form>

                <!-- Register form -->
                <form class="auth-form" id="form-register" autocomplete="off">
                    <div class="auth-field">
                        <label>Email</label>
                        <input type="email" name="email" placeholder="you@example.com" required />
                    </div>
                    <div class="auth-field">
                        <label>Pseudo</label>
                        <input type="text" name="username" placeholder="MonPseudo" required />
                    </div>
                    <div class="auth-field">
                        <label>Mot de passe</label>
                        <input type="password" name="password" placeholder="Min. 4 car., 1 majuscule, 1 chiffre" required />
                        <span class="auth-hint">4–20 caractères · 1 majuscule · 1 chiffre</span>
                    </div>
                    <div id="auth-error-register"></div>
                    <button class="auth-submit" type="submit">Créer le compte</button>
                </form>

                <button id="auth-offline">Jouer hors ligne</button>
            </div>
        `

        document.body.appendChild(this.overlay)
        this._bindEvents()
    }

    _bindEvents() {
        // Tabs
        this.overlay.querySelectorAll('.auth-tab').forEach(tab => {
            tab.addEventListener('click', () => this._switchTab(tab.dataset.tab))
        })

        // Login form
        this.overlay.querySelector('#form-login').addEventListener('submit', async (e) => {
            e.preventDefault()
            await this._handleLogin(e.target)
        })

        // Register form
        this.overlay.querySelector('#form-register').addEventListener('submit', async (e) => {
            e.preventDefault()
            await this._handleRegister(e.target)
        })

        // Offline
        this.overlay.querySelector('#auth-offline').addEventListener('click', () => {
            this._close(null)
        })
    }

    _switchTab(tab) {
        this._activeTab = tab
        this.overlay.querySelectorAll('.auth-tab').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tab === tab)
        })
        this.overlay.querySelectorAll('.auth-form').forEach(form => {
            form.classList.toggle('active', form.id === `form-${tab}`)
        })
        this._setError('')
    }

    _setError(msg, formId = 'auth-error') {
        const el = this.overlay.querySelector(`#${formId}`) || this.overlay.querySelector('#auth-error')
        if (el) el.textContent = msg
    }

    _setLoading(loading) {
        this._loading = loading
        this.overlay.querySelectorAll('.auth-submit').forEach(btn => {
            btn.disabled = loading
            btn.textContent = loading
                ? '...'
                : (btn.closest('#form-login') ? 'Se connecter' : 'Créer le compte')
        })
    }

    async _handleLogin(form) {
        if (this._loading) return
        const username = form.username.value.trim()
        const password = form.password.value

        this._setError('', 'auth-error')
        this._setLoading(true)
        try {
            const user = await this.authService.login(username, password)
            this._close({ user, token: this.authService.token })
        } catch (err) {
            this._setError(err.message, 'auth-error')
        } finally {
            this._setLoading(false)
        }
    }

    async _handleRegister(form) {
        if (this._loading) return
        const email         = form.email.value.trim()
        const username      = form.username.value.trim()
        const plainPassword = form.password.value

        this._setError('', 'auth-error-register')
        this._setLoading(true)
        try {
            await this.authService.register(email, username, plainPassword)
            const user = await this.authService.login(username, plainPassword)
            this._close({ user, token: this.authService.token })
        } catch (err) {
            this._setError(err.message, 'auth-error-register')
        } finally {
            this._setLoading(false)
        }
    }

    _show() {
        this.overlay.style.display = 'block'
    }

    _close(result) {
        this.overlay.remove()
        this._resolve(result)
    }
}

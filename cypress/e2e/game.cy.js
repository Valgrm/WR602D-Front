const API = 'http://symfony.mmi-troyes.fr:8319'

const mockUser  = { id: 1, username: 'TestUser', email: 'test@example.com', roles: ['ROLE_USER'], games: [] }
const mockToken = 'eyJ.fake.token'

function interceptLogin() {
    cy.intercept('POST', `${API}/api/login`, { token: mockToken }).as('login')
    cy.intercept('GET',  `${API}/api/me`,    mockUser).as('me')
    cy.intercept('GET',  `${API}/api/games`, []).as('games')
}

function loginAs(username = 'TestUser', password = 'Password1') {
    cy.get('#form-login input[name="username"]').type(username)
    cy.get('#form-login input[name="password"]').type(password)
    cy.get('#form-login .auth-submit').click()
    cy.wait('@login')
    cy.wait('@me')
}

// ─── Modale d'authentification ──────────────────────────────────────────────

describe('Modale auth', () => {
    beforeEach(() => cy.visit('/'))

    it('apparaît au chargement', () => {
        cy.get('#auth-overlay').should('be.visible')
        cy.get('#auth-tabs').should('be.visible')
        cy.get('[data-tab="login"]').should('have.class', 'active')
    })

    it('affiche le formulaire de connexion par défaut', () => {
        cy.get('#form-login').should('be.visible')
        cy.get('#form-register').should('not.be.visible')
        cy.get('#form-login input[name="username"]').should('exist')
        cy.get('#form-login input[name="password"]').should('exist')
    })

    it('bascule sur le formulaire d\'inscription', () => {
        cy.get('[data-tab="register"]').click()
        cy.get('#form-register').should('be.visible')
        cy.get('#form-login').should('not.be.visible')
        cy.get('#form-register input[name="email"]').should('exist')
        cy.get('#form-register input[name="username"]').should('exist')
        cy.get('#form-register input[name="password"]').should('exist')
    })
})

// ─── Connexion ───────────────────────────────────────────────────────────────

describe('Connexion', () => {
    beforeEach(() => cy.visit('/'))

    it('affiche une erreur avec de mauvais identifiants', () => {
        cy.intercept('POST', `${API}/api/login`, { statusCode: 401 }).as('loginFail')

        cy.get('#form-login input[name="username"]').type('mauvaisuser')
        cy.get('#form-login input[name="password"]').type('mauvaismdp')
        cy.get('#form-login .auth-submit').click()
        cy.wait('@loginFail')

        cy.get('#auth-error').should('contain', 'Pseudo ou mot de passe incorrect')
        cy.get('#auth-overlay').should('be.visible')
    })

    it('connexion réussie ferme la modale et affiche l\'écran de démarrage', () => {
        interceptLogin()
        loginAs()

        cy.get('#auth-overlay').should('not.exist')
        cy.contains('Cliquer pour commencer').should('be.visible')
    })

    it('affiche le pseudo au-dessus des cœurs après connexion', () => {
        interceptLogin()
        loginAs()

        cy.contains('Cliquer pour commencer').click()
        cy.contains('TestUser').should('be.visible')
    })
})

// ─── Inscription ─────────────────────────────────────────────────────────────

describe('Inscription', () => {
    beforeEach(() => cy.visit('/'))

    it('crée le compte et connecte automatiquement', () => {
        const newUser = { id: 2, username: 'NouvelUser', email: 'nouveau@example.com', roles: ['ROLE_USER'], games: [] }
        cy.intercept('POST', `${API}/api/users`, newUser).as('register')
        cy.intercept('POST', `${API}/api/login`, { token: mockToken }).as('login')
        cy.intercept('GET',  `${API}/api/me`,    newUser).as('me')
        cy.intercept('GET',  `${API}/api/games`, []).as('games')

        cy.get('[data-tab="register"]').click()
        cy.get('#form-register input[name="email"]').type('nouveau@example.com')
        cy.get('#form-register input[name="username"]').type('NouvelUser')
        cy.get('#form-register input[name="password"]').type('Password1')
        cy.get('#form-register .auth-submit').click()
        cy.wait('@register')
        cy.wait('@login')
        cy.wait('@me')

        cy.get('#auth-overlay').should('not.exist')
        cy.contains('Cliquer pour commencer').should('be.visible')
    })

    it('affiche une erreur si les données sont invalides', () => {
        cy.intercept('POST', `${API}/api/users`, {
            statusCode: 422,
            body: { violations: [{ message: 'Ce pseudo est déjà utilisé.' }] },
        }).as('registerFail')

        cy.get('[data-tab="register"]').click()
        cy.get('#form-register input[name="email"]').type('existant@example.com')
        cy.get('#form-register input[name="username"]').type('UserExistant')
        cy.get('#form-register input[name="password"]').type('Password1')
        cy.get('#form-register .auth-submit').click()
        cy.wait('@registerFail')

        cy.get('#auth-error-register').should('contain', 'Ce pseudo est déjà utilisé.')
        cy.get('#auth-overlay').should('be.visible')
    })
})

// ─── Mode hors ligne ─────────────────────────────────────────────────────────

describe('Mode hors ligne', () => {
    beforeEach(() => cy.visit('/'))

    it('"Jouer hors ligne" ferme la modale', () => {
        cy.get('#auth-offline').click()
        cy.get('#auth-overlay').should('not.exist')
    })

    it('affiche l\'écran de démarrage après avoir choisi hors ligne', () => {
        cy.get('#auth-offline').click()
        cy.contains('Cliquer pour commencer').should('be.visible')
    })

    it('le clic sur l\'écran de démarrage lance la partie', () => {
        cy.get('#auth-offline').click()
        cy.contains('Cliquer pour commencer').click()
        cy.contains('Cliquer pour commencer').should('not.exist')
    })
})

// ─── Classement ──────────────────────────────────────────────────────────────

describe('Classement', () => {
    it('est visible en mode hors ligne avec un placeholder', () => {
        cy.visit('/')
        cy.get('#auth-offline').click()
        cy.contains('Classement').should('be.visible')
        cy.contains('—').should('be.visible')
    })

    it('affiche le top 5 après connexion', () => {
        cy.intercept('POST', `${API}/api/login`, { token: mockToken }).as('login')
        cy.intercept('GET',  `${API}/api/me`,    mockUser).as('me')
        cy.intercept('GET',  `${API}/api/games`, [
            { id: 1, score: 9000, user: `${API}/api/users/1` },
            { id: 2, score: 6000, user: `${API}/api/users/2` },
            { id: 3, score: 3000, user: `${API}/api/users/1` },
        ]).as('games')
        cy.intercept('GET', `${API}/api/users/1`, { id: 1, username: 'TestUser' }).as('user1')
        cy.intercept('GET', `${API}/api/users/2`, { id: 2, username: 'Adversaire' }).as('user2')

        cy.visit('/')
        loginAs()
        cy.wait('@games')

        cy.contains('Classement').should('be.visible')
        cy.contains('9000').should('be.visible')
        cy.contains('6000').should('be.visible')
        cy.contains('Adversaire').should('be.visible')
    })
})

// ─── Sauvegarde du score ──────────────────────────────────────────────────────

describe('Sauvegarde du score', () => {
    it('envoie POST /api/games au game over si connecté', () => {
        interceptLogin()
        cy.intercept('POST', `${API}/api/games`, { id: 99, score: 0, user: '/api/users/1' }).as('saveScore')

        cy.visit('/')
        loginAs()
        cy.contains('Cliquer pour commencer').click()

        // Déclenche le game over via la console (simulation)
        cy.window().then(win => {
            win.dispatchEvent(new CustomEvent('cypress:gameover'))
            const world = win.__game?.world
            if (world) world._showGameOver('Test')
        })

        cy.wait('@saveScore')
        cy.contains('Score sauvegardé').should('be.visible')
    })
})

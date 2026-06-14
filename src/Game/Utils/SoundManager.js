let instance = null

export default class SoundManager {
    constructor() {
        if (instance) return instance
        instance = this

        this.music   = new Audio('/sounds/musicgame.mp3')
        this.collect = new Audio('/sounds/collectsound.mp3')
        this.damage  = new Audio('/sounds/damagesound.mp3')

        this.music.loop   = true
        this.music.volume = 0.4
        this.collect.volume = 0.7
        this.damage.volume  = 0.8
    }

    playMusic() {
        this.music.currentTime = 0
        this.music.play().catch(() => {})
    }

    stopMusic() {
        this.music.pause()
        this.music.currentTime = 0
    }

    playCollect() {
        this.collect.currentTime = 0
        this.collect.play().catch(() => {})
    }

    playDamage() {
        this.damage.currentTime = 0
        this.damage.play().catch(() => {})
    }
}

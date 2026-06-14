import EventEmitter from './EventEmitter'

export default class Controls extends EventEmitter
{
    constructor()
    {
        super()

        this.setActions()
        this.setKeyboard()
    }

    setActions()
    {
        this.actions = {
            up:    false,
            right: false,
            down:  false,
            left:  false,
            brake: false,
            boost: false,
        }

        document.addEventListener('visibilitychange', () =>
        {
            if(!document.hidden)
            {
                this.actions.up    = false
                this.actions.right = false
                this.actions.down  = false
                this.actions.left  = false
                this.actions.brake = false
                this.actions.boost = false
            }
        })
    }

    setKeyboard()
    {
        this._onKeyDown = (_event) =>
        {
            switch(_event.code)
            {
                case 'ArrowUp':
                case 'KeyW':
                case 'KeyZ':
                    this.actions.up = true
                    break

                case 'ArrowRight':
                case 'KeyD':
                    this.actions.right = true
                    break

                case 'ArrowDown':
                case 'KeyS':
                    this.actions.down = true
                    break

                case 'ArrowLeft':
                case 'KeyA':
                case 'KeyQ':
                    this.actions.left = true
                    break

                case 'ControlLeft':
                case 'ControlRight':
                case 'Space':
                    this.actions.brake = true
                    break

                case 'ShiftLeft':
                case 'ShiftRight':
                    this.actions.boost = true
                    break
            }
        }

        this._onKeyUp = (_event) =>
        {
            switch(_event.code)
            {
                case 'ArrowUp':
                case 'KeyW':
                case 'KeyZ':
                    this.actions.up = false
                    break

                case 'ArrowRight':
                case 'KeyD':
                    this.actions.right = false
                    break

                case 'ArrowDown':
                case 'KeyS':
                    this.actions.down = false
                    break

                case 'ArrowLeft':
                case 'KeyA':
                case 'KeyQ':
                    this.actions.left = false
                    break

                case 'ControlLeft':
                case 'ControlRight':
                case 'Space':
                    this.actions.brake = false
                    break

                case 'ShiftLeft':
                case 'ShiftRight':
                    this.actions.boost = false
                    break
            }
        }

        document.addEventListener('keydown', this._onKeyDown)
        document.addEventListener('keyup',   this._onKeyUp)
    }
}

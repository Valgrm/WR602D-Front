import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import GUI from 'lil-gui'
import CANNON from 'cannon'
import { positionGeometry } from 'three/tsl'
import Game from './Game/Game.js'

const game = new Game(document.querySelector('canvas.webgl'))
window.__game = game
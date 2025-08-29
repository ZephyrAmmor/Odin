import './styles.css'
import { renderSideUI } from './renderUI.js'
import { getFromLocalStorage } from './workSpace.js'

getFromLocalStorage()
setTimeout(renderSideUI, 100)
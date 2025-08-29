import { genAddBoard, genAddProject, genAddTask, genEditBoard, genEditProject, genEditTask } from './genForms.js'
import { handleForm } from './genTodoFromForm.js'
import { renderSideUI, renderUI } from './renderUI.js'

const holder = document.querySelector('.holder')
const sidebar = document.querySelector('.sidebar')
const formHolder = document.querySelector('.formHolder')
const stateUI = {
    state : [workSpace,],

    getStateLength(){
        return this.state.length
    },
    getnMainState(){
        return this.state[0]
    },
    getActiveState(){
        return this.state.at(-1)
    },
    getPreviousState(){
        if(this.state.length > 2)
            return this.state.at(-2)
    },
    backState(){
        this.state.pop()
    }, 
    pushToState(obj){
        this.state.push(obj)
    },

    getIndexOfObj(obj){
        if(this.state.indexOf(obj) !== undefined)
            return this.state.indexOf(obj)
    }
}

holder.addEventListener('click', (e)=> {
    let id = ''
    const classOfbtn = e.target.classList[0]
    if(e.target.dataset.show)
        id = e.target.dataset.show
    evaluateStateAndCall(classOfbtn, stateUI)
})

sidebar.addEventListener('click', (e) =>{
    let id = '';
    const classOfbtn = e.target.classList[0]
    const main = stateUI.getnMainState()
    if(e.target.dataset.show)
        id = e.target.dataset.show
    
    if(classOfbtn === 'add'){
        const form = genAddBoard()
        const obj = handleForm(form, main, '', classOfbtn, 'main')
        stateUI.backState()
        stateUI.pushToState(obj)
        renderSideUI()
    }

    else if(classOfbtn === 'show'){
        stateUI.backState()
        const board = main.getBoardById(id)
        stateUI.pushToState(board)
        renderSideUI()
    }
})

function evaluateStateAndCall(classOfbtn,stateUI, id){
    let type;
    if(stateUI.getStateLength() === 2){
        type = 'board'
    }
    else if(stateUI.getStateLength() === 3){
        type = 'project'
    }
    else if(stateUI.getStateLength() === 4){
        type = 'task'
    }
    const parent = stateUI.getPreviousState()
    const activeObj = stateUI.getActiveState()

    if(classOfbtn){
        if(stateUI.getStateLength() === 2){
            if(classOfbtn === 'back'){
                stateUI.backState()
                setTimeout( renderUI, 1000)
            }
            else if(classOfbtn=== 'add'){
                const form = genAddProject()
                formHolder.appendChild(form)
                const obj = handleForm(form, parent, activeObj, classOfbtn, type)
                stateUI.pushToState(obj)
                setTimeout( renderUI, 1000)
            }
            else if(classOfbtn === 'edit'){
                const form = genEditBoard(activeObj)
                formHolder.appendChild(form)
                handleForm(form, parent, activeObj, classOfbtn, type)
                setTimeout( renderUI, 1000)
            }
            }
            else if(classOfbtn === 'clear'){
                parent.removeBoard(activeObj)
                stateUI.backState()
                setTimeout( renderSideUI, 1000)
            }
            else if(classOfbtn === 'show'){
                stateUI.backState()
                const project = activeObj.getProjectById(id)
                stateUI.pushToState(project)
                renderUI()
            }
        }
        else if(stateUI.getStateLength() === 3){
            if(classOfbtn === 'add'){
                const form = genAddTask()
                formHolder.appendChild(form)
                const obj = handleForm(form, parent, activeObj, classOfbtn, type)
                stateUI.pushToState(obj)
                setTimeout( renderUI, 1000)
            }
            else if(classOfbtn === 'edit'){
                const form = genEditProject(activeObj)
                formHolder.appendChild(form)
                handleForm(form, parent, activeObj, classOfbtn, type)
                setTimeout( renderUI, 1000)
            }
            else if(classOfbtn === 'clear'){
                parent.removeProject(activeObj)
                stateUI.backState()
                setTimeout( renderUI, 1000)
            }
            else if(classOfbtn === 'show'){
                stateUI.backState()
                const task = activeObj.getTaskById(id)
                stateUI.pushToState(task)
                renderUI()
            }
        }
        else if(stateUI.getStateLength() === 4){
            if(classOfbtn === 'edit'){
                const form = genEditTask(activeObj)
                formHolder.appendChild(form)
                handleForm(form, parent, activeObj, classOfbtn, type)
                setTimeout( renderUI, 1000)
            }
            else if(classOfbtn === 'clear'){
                parent.removeTask(activeObj)
                stateUI.backState()
                setTimeout( renderUI, 1000)
            }
        }

}

export {stateUI}
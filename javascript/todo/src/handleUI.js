import { genAddBoard, genAddProject, genAddTask, genEditBoard, genEditProject, genEditTask } from './genForms.js'
import { handleForm , cleanFormHolder} from './genTodoFromForm.js'
import { renderSideUI, renderUI } from './renderUI.js'
import { workSpace } from './workSpace.js'
const holder = document.querySelector('.holder')
const sidebar = document.querySelector('.sidebar')
const formHolder = document.querySelector('.formHolder')

const stateUI = {
    state : [workSpace],

    getStateLength(){
        return this.state.length
    },
    getMainState(){
        return this.state[0]
    },
    getActiveState(){
        console.log(this.state.at(-1))
        return this.state.at(-1)
    },
    getPreviousState(){
        if(this.state.length >= 2)
            return this.state.at(-2)
    },
    backState(){
        this.state.pop()
        console.log(this.state)
    }, 
    pushToState(obj){
        this.state.push(obj)
    },

    getIndexOfObj(obj){
        if(this.state.indexOf(obj) !== undefined)
            return this.state.indexOf(obj)
    },
    getGrandState(){
        if(this.state.length >=3){
            return this.state[1]
        }
    }
}

holder.addEventListener('click', (e)=> {
    let id = ''
    let classOfbtn;
    if(e.target.closest('.card.project')){
       id = e.target.closest('.card').dataset.show
       classOfbtn = e.target.closest('.card').classList[0]
    }
    else 
        classOfbtn= e.target.classList[0]
    evaluateStateAndCall(classOfbtn, stateUI, id)
})

sidebar.addEventListener('click', (e) =>{
    let id = '';
    const classOfbtn = e.target.classList[0]
    const main = stateUI.getMainState()
    if(e.target.closest('.card').dataset.show)
        id = e.target.closest('.card').dataset.show
    
    if(classOfbtn === 'add'){
        const form = genAddBoard()
        cleanFormHolder(formHolder)
        formHolder.appendChild(form)
        handleForm(form, main, '', '',classOfbtn, 'main')

    }

    else if(classOfbtn === 'card'){
        stateUI.backState()
        const board = main.getBoardById(id)
        stateUI.pushToState(board)
        setTimeout(renderSideUI, 100)
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
    const grand = stateUI.getGrandState()
        if(stateUI.getStateLength() === 2){
            if(classOfbtn=== 'add'){
                const form = genAddProject()
                cleanFormHolder(formHolder)
                formHolder.appendChild(form)
                handleForm(form, parent, activeObj, '',classOfbtn, type)

            }
            else if(classOfbtn === 'edit'){
                const form = genEditBoard(activeObj)
                cleanFormHolder(formHolder)
                formHolder.appendChild(form)
                handleForm(form, parent, activeObj, '',classOfbtn, type)
            }
            else if(classOfbtn === 'clear'){
                console.log('clear')
                parent.removeBoard(activeObj.id)
                console.table(workSpace)
                stateUI.backState()
                setTimeout( renderSideUI, 100)
            }
            else if(classOfbtn === 'card'){
                const project = activeObj.getProjectById(id)
                console.log(project)
                stateUI.pushToState(project)
                setTimeout(renderUI, 100)
            }
        }
        else if(stateUI.getStateLength() === 3){
            if(classOfbtn === 'back'){
                stateUI.backState()
                setTimeout( renderUI, 100)
            }
            if(classOfbtn === 'add'){
                console.log('addtask')
                const form = genAddTask()
                cleanFormHolder(formHolder)
                formHolder.appendChild(form)
                handleForm(form, parent, activeObj,grand, classOfbtn, type)
            }
            else if(classOfbtn === 'edit'){
                const form = genEditProject(activeObj)
                cleanFormHolder(formHolder)
                formHolder.appendChild(form)
                handleForm(form, parent, activeObj,'' ,classOfbtn, type)
                setTimeout( renderUI, 100)
            }
            else if(classOfbtn === 'clear'){
                parent.removeProject(activeObj.id)
                stateUI.backState()
                setTimeout( renderUI, 100)
            }
            else if(classOfbtn === 'card'){
                const task = activeObj.getTaskById(id)
                stateUI.pushToState(task)
                setTimeout(renderUI, 100)
            }
        }
        else if(stateUI.getStateLength() === 4){
            if(classOfbtn === 'back'){
                stateUI.backState()
                setTimeout( renderUI, 100)
            }
            else if(classOfbtn === 'edit'){
                const form = genEditTask(activeObj)
                cleanFormHolder(formHolder)
                formHolder.appendChild(form)
                handleForm(form, parent, activeObj, grand, classOfbtn, type)
                setTimeout( renderUI, 100)
            }
            else if(classOfbtn === 'clear'){
                parent.removeTask(activeObj.id)
                stateUI.backState()
                setTimeout( renderUI, 100)
            }
        }
    }
export {stateUI}
import { Task, Project, Board } from "./constructs"
import { stateUI } from "./handleUI"
import { renderSideUI,renderUI } from "./renderUI"
const formHolder = document.querySelector('.formHolder')

function createBoard(workSpace, boardData){
    const title = boardData.get('title')
    const description = boardData.get('description')
    const importance = boardData.get('importance')

    const board = new Board(title, description, importance)
    workSpace.addBoard(board)
    return board
}

function createProject(board, projectData){
    const title = projectData.get('title')
    const description = projectData.get('description')
    const importance = projectData.get('importance')
    const urgency = projectData.get('urgency')
    const startDate = projectData.get('startDate')
    const dueDate = projectData.get('dueDate')
    const note = projectData.get('note')

    const project = new Project(title, description, importance, urgency, startDate, dueDate, note)

    board.addProject(project)
    return project
}

function createTask(board, project, taskData){
    const title = taskData.get('title')
    const description = taskData.get('description')
    const importance = taskData.get('importance')
    const urgency = taskData.get('urgency')
    const dueDate = taskData.get('dueDate')
    const note = taskData.get('note')

    const task = new Task(title, description, importance, urgency, dueDate, note)

    project.addTask(task)
    project.update(board)
    return task
}

function editTask(board, project, task, taskData){
    task.title = taskData.get('title')
    task.description = taskData.get('description')
    task.importance = taskData.get('importance')
    task.urgency = taskData.get('urgency')
    task.dueDate  = taskData.get('dueDate')
    task.note = taskData.get('note')

    if(taskData.has('complete')){
        task.complete = true
    }
    else{
        task.complete = false
    }

    project.updateTask(task)
    project.update(board)
}

function editProject(board, project, projectData){
    project.title = projectData.get('title')
    project.description = projectData.get('description')
    project.importance = projectData.get('importance')
    project.urgency = projectData.get('urgency')
    project.startDate = projectData.get('startDate')
    project.dueDate = projectData.get('dueDate')
    project.note = projectData.get('note')

    if(projectData.has('complete')){
        project.complete = true
    }
    else
        project.complete = false

    board.updateProject(project)
}

function editBoard(workSpace, board, boardData){
    board.title = boardData.get('title')
    board.description = boardData.get('description')
    board.importance = boardData.get('importance')

    workSpace.update(board)
}

function handleForm(form,parent, activeObj,grand, classOfbtn, type){
    form.addEventListener('submit', (event) =>{
        event.preventDefault()
        const formData = new FormData(form)
        form.reset()
        if( type == 'main'){
            if(classOfbtn === 'add'){
                const objToReturn = createBoard(parent, formData)
                stateUI.backState()
                stateUI.pushToState(objToReturn)
                setTimeout(renderSideUI, 100)
            }
        }
        else if(type === 'board'){
            if(classOfbtn === 'add'){
                const objToReturn = createProject(activeObj, formData)
                stateUI.pushToState(objToReturn)
                setTimeout(renderUI, 100)
            }
            else if(classOfbtn === 'edit'){
                editBoard(parent, activeObj, formData)
                setTimeout(renderUI, 100)

            }
        }

        else if(type === 'project'){
            if(classOfbtn === 'add'){
                const objToReturn = createTask(grand, activeObj, formData)
                stateUI.pushToState(objToReturn)
                setTimeout(renderUI, 100)
            }
            else if(classOfbtn === 'edit'){
                editProject(parent, activeObj, formData)
                setTimeout(renderUI, 100)
            }
        }
        else if(type === 'task'){
            if(classOfbtn === 'edit'){
                editTask(grand, parent, activeObj, formData)
                setTimeout(renderUI, 100)
            }
        }
        cleanFormHolder(formHolder)
})
}

function cleanFormHolder(formHolder){
    while(formHolder.firstChild){
        formHolder.removeChild(formHolder.firstChild)
    }
}

export {handleForm, cleanFormHolder}
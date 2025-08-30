import {stateUI} from './handleUI.js'
import { workSpace } from './workSpace'

const content = document.querySelector('.holder')

const sidebar = document.querySelector('.sidebar')

function renderUI(){
    if(stateUI.getStateLength() === 1){
        const first = Object.values(workSpace.getBoards())[0]
        stateUI.pushToState(first)
    }

    if(stateUI.getStateLength() === 2){
         console.log(stateUI)
        const board = boardAsMain(stateUI.getActiveState())  
        while(content.firstChild){
            content.removeChild(content.firstChild)
        }
        content.classList.add('board')
        if(board)
            content.appendChild(board)
    }
    
    else if(stateUI.getStateLength() === 3){
        const project = projectAsMain(stateUI.getPreviousState(), stateUI.getActiveState())
        while(content.firstChild){
            content.removeChild(content.firstChild)
        }
        content.classList.add('project')
        content.appendChild(project)
    }

    else if(stateUI.getStateLength() === 4){
        const task = taskAsMain(stateUI.getPreviousState(), stateUI.getActiveState())
        while(content.firstChild){
            content.removeChild(content.firstChild)
        }
        content.classList.add('task')
        if(task)
            content.appendChild(task)
    }

}

function renderSideUI(){
    while(sidebar.firstChild){
        sidebar.removeChild(sidebar.firstChild)
    }
    sideBar(stateUI.getMainState(), sidebar)
    renderUI()
}

function boardAsMain(board){
    const boardHolder = document.createElement('div')
    boardHolder.classList.add('board')
    boardHolder.classList.add('main')
    if(!board)
        return
    console.log(board)
    const title = board.title
    const description = board.description
    const importance = board.importance
        
    const editButton = createButton('edit', 'board', board.id, 'Edit')
    const titleComp = createComponent('Title','title', title)
    const descriptionComp = createComponent('Description', 'description', description)
    const importanceComp = createComponent('Importance', 'importance', importance)
    const clearButton = createButton('clear', 'board', board.id, 'Clear')
    const addButton = createButton('add', 'project', board.id, 'Add')
    const header = document.createElement('div')
    const footer = document.createElement('div')
    header.classList.add('head')
    header.appendChild(titleComp)
    header.appendChild(editButton)
    footer.appendChild(clearButton)
    footer.appendChild(addButton)
    footer.classList.add('foot')
    const projectsHolder = createChildHolder(board.getProjects(), 'project')
    projectsHolder.classList.add('projectHolder')
    boardHolder.appendChild(header)
    boardHolder.appendChild(descriptionComp)
    boardHolder.appendChild(importanceComp)
    boardHolder.appendChild(projectsHolder)
    boardHolder.appendChild(footer)

    return boardHolder

}

function projectAsMain(board, project){
    const projectHolder = document.createElement('div')
    projectHolder.classList.add('project')
    projectHolder.classList.add('main')

    const title = project.title
    const description = project.description
    const importance = project.importance
    const urgency = project.urgency
    const startDate = project.startDate
    const dueDate = project.dueDate
    const note = project.note

    const backButton = createButton('back', 'project', board.id, 'back')
    const editButton = createButton('edit', 'project', project.id, 'Edit')
    const clearButton = createButton('clear', 'project', project.id, 'Clear')
    const addButton = createButton('add', 'task', project.id, 'Add')

    const titleComp = createComponent('Title', 'title', title)
    const descriptionComp = createComponent('Description', 'description', description)
    const importanceComp = createComponent('Importance', 'importance', importance)
    const urgencyComp = createComponent('Urgency', 'urgency', urgency)
    const startDateComp = createComponent('Start Date', 'startDate', startDate)
    const dueDateComp = createComponent('Due Date', 'dueDate', dueDate)
    const noteComp = createComponent('Note', 'note', note)

    const head = document.createElement('div')
    head.classList.add('head')
    head.appendChild(titleComp)
    head.appendChild(editButton)

    const side = document.createElement('div')
    const dates = document.createElement('div')
    dates.appendChild(startDateComp)
    dates.appendChild(dueDateComp)

    const priorities = document.createElement('div')
    priorities.appendChild(importanceComp)
    priorities.appendChild(urgencyComp)

    side.appendChild(dates)
    side.appendChild(priorities)
    
    const foot = document.createElement('div')
    foot.appendChild(clearButton)
    foot.appendChild(addButton)

    const tasksHolder = createChildHolder(project.getTasks(), 'task')
    foot.classList.add('foot')
    projectHolder.appendChild(backButton)
    projectHolder.appendChild(head)
    projectHolder.appendChild(descriptionComp)
    projectHolder.appendChild(side)
    projectHolder.appendChild(noteComp)
    projectHolder.appendChild(tasksHolder)
    projectHolder.appendChild(foot)

    return projectHolder
}

function sideBar (root, sidebar){
    const head = document.createElement('h2')
    head.textContent = 'WorkSpace' 

    const boardsHolder = createChildHolder(root.getBoards(), 'board')
    const addButton = createButton('add', 'board', root.id, 'Add')

    sidebar.appendChild(head)
    sidebar.appendChild(boardsHolder)
    sidebar.appendChild(addButton)
}

function taskAsMain(project, task){
    const taskHolder = document.createElement('div')
    taskHolder.classList.add('task')
    taskHolder.classList.add('main')
    if(!task || task.id === undefined)
        return false
    
    const backButton = createButton('back', 'project', project.id, 'Back')
    const editButton = createButton('edit', 'task', task.id, 'Edit')
    const clearButton = createButton('clear', 'task', task.id, 'Clear')

    const title = task.title
    const description = task.description
    const importance = task.importance
    const urgency = task.urgency
    const dueDate = task.dueDate
    const note = task.note

    const titleComp = createComponent('Title', 'title', title)
    const descriptionComp = createComponent('Description', 'description', description)
    const importanceComp = createComponent('Importance', 'importance', importance)
    const urgencyComp = createComponent('Urgency', 'urgency', urgency)
    const dueDateComp = createComponent('Due Date', 'dueDate', dueDate)
    const noteComp = createComponent('Note', 'note', note)

    
    const head = document.createElement('div')
    head.classList.add('head')
    head.appendChild(titleComp)
    head.appendChild(editButton)

    const priorities = document.createElement('div')
    priorities.appendChild(importanceComp)
    priorities.appendChild(urgencyComp)

    const side = document.createElement('div')
    side.classList.add('side')
    side.appendChild(dueDateComp)
    side.appendChild(priorities)

    const foot = document.createElement('div')
    foot.classList.add('foot')

    foot.appendChild(clearButton)
    foot.classList.add('foot')
    taskHolder.appendChild(backButton)
    taskHolder.appendChild(head)
    taskHolder.appendChild(descriptionComp)
    taskHolder.appendChild(side)
    taskHolder.appendChild(noteComp)
    taskHolder.appendChild(foot)

    return taskHolder

}

function createChildHolder(todos, type){
    const cardsHolder = document.createElement('div')
    
    for(let todo of Object.values(todos)){
        const title = todo.title
        const description = todo.description
        
        const card = createCard(title, type , description, todo.id)
        cardsHolder.appendChild(card)
    }

    return cardsHolder
}

function createComponent(title, classToAdd, text){
    const div = document.createElement('div')
    div.classList.add(classToAdd)

    const heading = document.createElement('h3')
    heading.textContent = title

    const para = document.createElement('p')
    para.textContent = text

    div.appendChild(heading)
    div.appendChild(para)

    return div
}

function createCard(title, classToAdd, description, id){
    const card = document.createElement('div')
    card.classList.add('card')
    card.classList.add(classToAdd)
    card.dataset.show = id

    const head = document.createElement('h5')
    head.textContent = title

    const para = document.createElement('p')
    para.textContent = description

    card.appendChild(head)
    card.appendChild(para)

    return card
}

function createButton(classToAdd, classToAdd2, id, text){
    const button = document.createElement('button')
    button.classList.add(classToAdd)
    button.classList.add(classToAdd2)
    button.id = id
    button.textContent = text
    return button
}

export {renderSideUI, renderUI}
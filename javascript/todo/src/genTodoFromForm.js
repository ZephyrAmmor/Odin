import { Task, Project, Board } from "./constructs"
function createBoard(workSpace, boardData, type){
    const title = boardData.get('title')
    const description = boardData.get('description')
    const importance = boardData.get('importance')

    const board = new Board(title, description, importance)
    if(type === 'add'){
        workSpace.addBoard(board)
        renderSideUI()
    }
    else if(type === 'edit'){
        workSpace.update(board)
        renderSideUI()
    }
}

function createProject(board, projectData, type){
    const title = projectData.get('title')
    const description = projectData.get('description')
    const importance = projectData.get('importance')
    const urgency = projectData.get('urgency')
    const startDate = projectData.get('startDate')
    const dueDate = projectData.get('dueDate')
    const note = projectData.get('note')

    const project = new Project(title, description, importance, urgency, startDate, dueDate, note)
    if(type === 'add'){
        board.addProject(project)
        renderUI()
    }
    else if(type === 'edit'){
        board.updateProject(project)
        renderUI()
    }
}

function createTask(project, taskData, type){
    const title = taskData.get('title')
    const description = taskData.get('description')
    const importance = taskData.get('importance')
    const urgency = taskData.get('urgency')
    const dueDate = taskData.get('dueDate')
    const note = taskData.get('note')

    const task = new Task(title, description, importance, urgency, dueDate, note)

    if(type === 'add'){
        project.addTask(task)
        renderUI()
    }
    else if(type === 'edit'){
        project.updateTask(task)
        renderUI()
    }
}
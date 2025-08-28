import { Task, Project, Board } from "./constructs"
function createBoard(workSpace, boardData){
    const title = boardData.get('title')
    const description = boardData.get('description')
    const importance = boardData.get('importance')

    const board = new Board(title, description, importance)
    workSpace.addBoard(board)
    renderSideUI()
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
    renderUI()
}

function createTask(project, taskData){
    const title = taskData.get('title')
    const description = taskData.get('description')
    const importance = taskData.get('importance')
    const urgency = taskData.get('urgency')
    const dueDate = taskData.get('dueDate')
    const note = taskData.get('note')

    const task = new Task(title, description, importance, urgency, dueDate, note)

    project.addTask(task)
    renderUI()
}
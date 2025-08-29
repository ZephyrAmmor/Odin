import {Board, Task, Project} from './constructs.js'
const workSpace = {
    // Hard Coded id to keep it same no matter what to make local data valid
    id : 'bace00bc-b0a3-46c5-85cb-840be7907ce9',
    boards : {},
    
    getBoards(){
        return this.boards
    },
    addBoard(board){
        if(board && typeof board === 'object'){
            board.id = crypto.randomUUID()
            board.complete = false
            board.parent = this.id
            this.boards[board.id] = board
            this.updateSelf()
        }
    },
    getBoardById(id){
        if(this.boards[id])
            return this.boards[id]
    }
    ,
    removeBoard(id){
        if(id && this.boards[id]){
            delete this.boards[id]
            this.updateSelf()
        }
    },

    update(board){
        if(board && this.boards[board.id]){
            this.boards[board.id] = board
            this.updateSelf()
        }
    },
    updateSelf(){
        addToLocalStorage(this.toJSON())
    },

    toJSON(){
        const boards = {}
        for(let [boardId, boardObj] of Object.entries(this.boards)){
            boards[boardId] = boardObj.toJSON()
        }
        return boards
    },

    fromJSON(boards){
        if(boards){
            for(let [boardId, boardObj] of Object.entries(boards)){
                this.boards[boardId] = Board.fromJSON(boardObj)
            }
        }
    }
}

function addToLocalStorage(jsonObj){
    localStorage.setItem('boards' , jsonObj)
}

function getFromLocalStorage(){
    const rawData = localStorage.getItem('boards')
    const boards = rawData ? JSON.parse(rawData) : getDummyData()
    workSpace.fromJSON(boards)
}

function getDummyData(){
    const task1 = new Task('Todo', 'A simple todo list webapp', 'Important', 'Very Urgent', '08/30/25', 'We have to learn what we are supposed to while doing this Task')
    const task2 = new Task('Tic Tac Toe', 'A front end based tic tac toe game', 'Important', 'Very Urgent', '08/24/25', 'Applying knowledge of objects, factories and IIFE')

    task2.complete = true

    const project = new Project('Odin JS', 'Goal is learing JS to good level by completing JS section of Odin project', 'Very Important', 'Trivial', '08/20/25', '09/15/2025', 'Learning is the goal not just completing it.')

    const board = new Board('Odin Board','A board for keeping all oding Projects in One place', 'Very Important')

    workSpace.addBoard(board)
    board.addProject(project)
    project.addTask(task1)
    project.addTask(task2)
    
}   
export {getFromLocalStorage, workSpace}
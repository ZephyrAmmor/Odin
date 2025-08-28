import {Board} from './constructs.js'
const workSpace = {
    // Hard Coded id to keep it same no matter what to make local data valid
    id : 'bace00bc-b0a3-46c5-85cb-840be7907ce9',
    boards : {},

    addBoard(board){
        if(board && typeof board === 'object'){
            board.id = crypto.randomUUID()
            board.complete = false
            board.parent = this.id
            this.boards[board.id] = board
            this.updateSelf()
        }
    },

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
        return jsonObj
    },

    fromJSON(boards){
        if(boards){
            for(let [boardId, boardObj] of Object.entries(boards)){
                this.boards[boardId] = Board.fromJSON(boardObj)
            }
        }
    }
}

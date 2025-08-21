let gameBoard = (function(){
    let board = []

    function addMove(index, symbol){
        const indexInt = parseInt(index)
        if(symbol!== 'X' && symbol !== 'O' || indexInt < 0 || indexInt > 8){
            console.log("Error")
            return null
        }
        board[indexInt] = symbol
    }
    function show(){
        return board
    }
    function reset(){
        board = []
    }

    return{addMove, show, reset}
})();
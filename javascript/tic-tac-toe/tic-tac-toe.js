let gameBoard = (function(){
    let board = ['X','O','X','O','O','X','X','O']

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

const players = {}

function creatPlayer(name, symbol){
    return {name, symbol}
}

players.one = creatPlayer('Ali', 'X')
players.two = creatPlayer('Arif', 'O')

function winner(){
    const winnerCombos = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ]

    const arr = gameBoard.show()
    for(let [a,b,c] of winnerCombos){
        if(arr[a] && arr[a] ===  arr[b] && arr[a] === arr[c])
            return players.one.symbol == arr[a] ? players.one.name : players.two.name
    }
}
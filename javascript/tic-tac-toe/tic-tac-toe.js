let gameBoard = (function(){
    let board = []
    let btnsPressed = []
    function addMove(index, symbol){
        const indexInt = parseInt(index)
        if(symbol!== 'X' && symbol !== 'O' || indexInt < 0 || indexInt > 8){
            console.log("Error")
            return null
        }
        board[indexInt] = symbol
        btnsPressed.push(index)
    }
    function show(){
        return board
    }
    function reset(){
        board = []
        btnsPressed = []
    }
    function isAvail(id){
        if(btnsPressed.includes(id))
            return false
        return true
    }
    function totalMoves(){
        return btnsPressed.length
    }
    return{addMove, show, reset, isAvail, totalMoves}
})();

let players = {}

function createPlayer(name, symbol){
    return {name, symbol}
}

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
    return false
}

function controlForm(){
    const form = document.querySelector('.dialog-form')
    form.addEventListener('submit', (event) =>{
        event.preventDefault()
        const formData = new FormData(form)
        const name1 = formData.get('name1')
        const name2 = formData.get('name2')
        players = {}
        players.one = createPlayer(name1, 'X')
        players.two = createPlayer(name2, 'O')
        dialog.close()
        console.log(JSON.parse(JSON.stringify(players))) // deep copy
        form.reset()
        resetCells()
        controlDisplay()
    })
}
function getSymbol(){
    const totalMoves = gameBoard.totalMoves()
    if(totalMoves % 2 === 0)
        return players.one.symbol
    else
        return players.two.symbol
}
function controlDisplay (){
    const board = document.querySelector('.board')
    board.addEventListener('click', (e) =>{
        const btn = e.target
        const symbol = getSymbol()
        if(gameBoard.isAvail(btn.id) && btn.classList.contains('cell')){
            gameBoard.addMove(btn.id, symbol)
            btn.textContent = symbol
            console.log(gameBoard.show(), gameBoard.totalMoves())
            checkWinner()
        }

    })
}
function isGameEnded(){
    if(gameBoard.totalMoves() < 5)
        return null
    else if(winner())
        return 'W'
    else if(gameBoard.totalMoves() >= 8)
        return 'D'
    else 
        return null
}
function checkWinner(){
    if(isGameEnded() == 'W')
        declareWinner('W')
    else if(isGameEnded() == 'D')
        declareWinner('D')

}

function declareWinner(char){
    const result = document.querySelector('#result')
    if(char === 'W'){
        result.textContent = winner()
        gameBoard.reset()
        resetCells()
        popUp.showModal()
    }
    else if(char == 'D'){
        result.textContent = "It's a Draw"
        gameBoard.reset()
        resetCells()
        popUp.showModal()
    }
}
const dialog = document.querySelector('#dialog')
const playBtn = document.querySelector('#play')

playBtn.addEventListener('click', () =>{
    dialog.show()
    controlForm()
    players = {}
})

const popUp = document.querySelector('#popUp')
popUp.addEventListener('click', () =>{
    popUp.close()
    players = {}
    dialog.show()
})
function resetCells (){
    const cells = document.querySelectorAll('.cell')
    cells.forEach(cell =>{
        cell.textContent = ''
    })
}
let gameBoard = (function(){
    let board = ['X','O','X','O','O','X','X','O']
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

const players = {}

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
}

function controlForm(){
    const form = document.querySelector('form')
    form.addEventListener('submit', (event) =>{
        event.preventDefault()
        const formData = new FormData(form)
        const name1 = formData.get('name1')
        const name2 = formData.get('name2')
        players.one = createPlayer(name1, 'X')
        players.two = createPlayer(name2, 'O')
        dialog.close()
        console.table(players)
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
        if(gameBoard.isAvail(btn.id)){
            gameBoard.addMove(btn.id, symbol)
            btn.textContent = symbol
        }

    })
}

const dialog = document.querySelector('dialog')
const playBtn = document.querySelector('#play')

playBtn.addEventListener('click', () =>{
    dialog.show()
    controlForm()
})
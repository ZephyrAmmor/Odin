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

function controlDisplay(){
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
    })
}

const dialog = document.querySelector('dialog')
const playBtn = document.querySelector('#play')

playBtn.addEventListener('click', () =>{
    dialog.show()
    controlDisplay()
})
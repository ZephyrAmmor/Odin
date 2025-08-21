let players = {} // Golabl Object to store players
// gameBoard Module containing board array which store moves, btnsPressed wihch att the btns already pressed to avoid multiple clicks 
// It returns functions to be used by other funcitons in factory controlGame and others
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

// Factory for creating users
function createPlayer(name, symbol){
    return {name, symbol}
}
//Factory that handels all the game logic , return one function controlForm to be used by other outer function
let controlGame = (function(){

    // Return winner name if there any or false
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

    //Handle form submission of player names
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
            const divOne = document.querySelector('.one')
            const divTwo = document.querySelector('.two')
            divOne.textContent = `${players.one.name}'s symbol is ${players.one.symbol}`
            divTwo.textContent = `${players.two.name}'s symbol is ${players.two.symbol}`
            dialog.close()
            form.reset()
            resetCells()
        })
    }

    // Return symbol in other terms return whose turn it is
    function getSymbol(){
        const totalMoves = gameBoard.totalMoves()
        if(totalMoves % 2 === 0)
            return players.one.symbol
        else
            return players.two.symbol
    }

    // Control the Display listening and showing text on cells
    function controlDisplay (){
        const board = document.querySelector('.board')
        board.addEventListener('click', (e) =>{
            const btn = e.target
            const symbol = getSymbol()
            if(gameBoard.isAvail(btn.id) && btn.classList.contains('cell')){
                gameBoard.addMove(btn.id, symbol)
                btn.textContent = symbol
                checkWinner()
            }

        })
    }
    controlDisplay()

    // Check the continuity of game, by returning 'D' Draw or 'W' someone won or null
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

    // Check if someone won the game and call declarewinner

    function checkWinner(){
        if(isGameEnded() == 'W')
            declareWinner('W')
        else if(isGameEnded() == 'D')
            declareWinner('D')

    }

    //Div which hold result, also used by other function to reset text
    const result = document.querySelector('#result')

    // Declare winner if any and reset everything
    function declareWinner(char){
        
        if(char === 'W'){
            result.textContent = `${winner()} Won the Game`
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

    return {controlForm}
})();

// Dialog and play btns listeners 
const dialog = document.querySelector('#dialog')
const playBtn = document.querySelector('#play')

playBtn.addEventListener('click', () =>{
    dialog.show()
    controlGame.controlForm()
    players = {}
})

// Restart the game handeling
const popUp = document.querySelector('#popUp')
popUp.addEventListener('click', () =>{
    result.textContent = ''
    gameBoard.reset()
    popUp.close()
    players = {}
    dialog.show()
})

// Set all cells textContent to empty strings ''
function resetCells (){
    const cells = document.querySelectorAll('.cell')
    cells.forEach(cell =>{
        cell.textContent = ''
    })
}
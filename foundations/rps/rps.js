const moves = document.querySelectorAll('.btn')
const roundResult = document.querySelector('.roundResult')
const roundPara = document.querySelector('#round')
const finalResult = document.querySelector('.finalResult')
const winner = document.querySelector('.winner')
const totalRounds = document.getElementById('totalRounds')

let totalRoundsToPlay = 5
let humanVictories = 0
let computerVictories = 0

totalRounds.addEventListener('submit', (event) =>{
    event.preventDefault();
    totalRoundsToPlay = document.querySelector('input').value || 5
    roundResult.textContent = ''
    roundPara.textContent = ''
    finalResult.textContent = ''
    winner.textContent = ''
})

let getComputerMove = () => {
        const legalMoves = ['rock', 'paper', 'scissors']
        let random = Math.floor(Math.random() * 3)
        return legalMoves[random]        
}

function playRound(humanMove){
    let computerMove = getComputerMove()
    if (humanMove == computerMove)
            roundResult.textContent = "It's a Draw"
    else if (humanMove === 'rock' && computerMove ==='paper'){
        roundResult.textContent = 'Computer Wins, Paper beats Rock!'
        computerVictories ++;
    }
    else if (humanMove === 'scissors' && computerMove === 'rock'){
        roundResult.textContent = 'Computer Wins, Rock beats Scissors!'
        computerVictories ++;
    }
    else if (humanMove === 'paper' && computerMove === 'scissors'){
        roundResult.textContent = 'Computer Wins, Scissors beats Paper!'
        computerVictories ++;
    }
    else if (humanMove === 'paper' && computerMove === 'rock'){
        roundResult.textContent = 'You win, paper beats rock'
        humanVictories ++;
    }
    else if (humanMove === 'scissors' && computerMove === 'paper'){
        roundResult.textContent = 'You win, Scissors bests Paper!'
        humanVictories ++;
    }
    else if (humanMove === 'rock' && computerMove === 'scissors'){
        roundResult.textContent = 'You win, Rock beats Scissors!'
        humanVictories ++;
    }
    else{
        roundResult.textContent = 'An Unknown Error'
    }
    roundPara.textContent = `Your Move:  ${humanMove} ' ||  Computer Move: ${computerMove}p`
}
function declareWinner (){
        finalResult.textContent = `Your victories: ${humanVictories} || Computer Victories  ${computerVictories}`
        if (humanVictories === computerVictories)
           winner.textContent = 'It\'s a Draw'
        else if (humanVictories > computerVictories)
            winner.textContent = 'You win'
        else if (humanVictories < computerVictories)
            winner.textContent = 'Computer Wins'
}
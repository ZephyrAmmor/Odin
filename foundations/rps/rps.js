document.addEventListener('DOMContentLoaded', function() {
    // Get computer's move via Math.random
    let humanVictories = 0
    let computerVictories = 0
    let getComputerMove = () => {
        let random = Math.floor(Math.random() * 3)
        switch (random){
            case 0:
                return 'rock';
            case 1:
                return 'paper';
            case 2:
                return 'scissors'
        }
    }
    // Get Human Move

    let getHumanMove = () =>{
        let humanMove = prompt('rock, paper, scissors\nYour Move?').toLowerCase().trim()
        if (humanMove !== 'rock' && humanMove !== 'paper' && humanMove !=='scissors'){
            console.log('Illegal Move')
            humanMove = prompt('rock, paper, scissors !!! Enter again!').toLowerCase().trim()
        }
        return humanMove;
    }
    // Play a round of game

    let playRound = (humanMove, computerMove) => {
        if (humanMove == computerMove)
            console.log("It's a Draw")
        else if (humanMove === 'rock' && computerMove ==='paper'){
            console.log('Computer Wins, Paper beats Rock!')
            computerVictories ++;
        }
        else if (humanMove === 'scissors' && computerMove === 'rock'){
            console.log('Computer Wins, Rock beats Scissors!')
            computerVictories ++;
        }
        else if (humanMove === 'paper' && computerMove === 'scissors'){
            console.log('Computer Wins, Scissors beats Paper!')
            computerVictories ++;
        }
        else if (humanMove === 'paper' && computerMove === 'rock'){
            console.log('You win, paper beats rock')
            humanVictories ++;
        }
        else if (humanMove === 'scissors' && computerMove === 'paper'){
            console.log('You win, Scissors bests Paper!')
            humanVictories ++;
        }
        else if (humanMove === 'rock' && computerMove === 'scissors'){
            console.log('You win, Rock beats Scissors!')
            humanVictories ++;
        }
        else{
            console.log('An Unknown Error')
        }
        console.log('Your Move: ', humanMove, ' || ', 'Computer Move: ', computerMove)
    }

    let declareWinner = (humanVictories, computerVictories) => {
        console.log('Your victories:', humanVictories, '||', 'Computer Victories', computerVictories)
        if (humanVictories === computerVictories)
            console.log("It's a Draw")
        else if (humanVictories > computerVictories)
            console.log('You win')
        else if (humanVictories < computerVictories)
            console.log('Computer Wins')
    }
    let playRoundTimes = (n = 5) => {
        while (n > 0){
            playRound(getHumanMove(), getComputerMove())
            n --;
        }
        declareWinner(humanVictories, computerVictories)
        console.log('Game Ends!')
    }
    let playNTimes = parseInt(prompt('How many rounds you want to play? ', 5))
    playRoundTimes(playNTimes)
});
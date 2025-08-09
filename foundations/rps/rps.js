// Get computer's move via Math.random
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
    let humanMove = prompt('rock, paper, scissors\nYour Move?')
    humanMove = humanMove.toLowerCase()
    if (humanMove !== 'rock' && humanMove !== 'paper' && humanMove !=='scissors'){
        console.log('Illegal Move')
        getHumanMove();
    }
    return humanMove;
}
// Play a round of game

let playRound = (humanMove, computerMove) => {
    if (humanMove === computerMove)
        console.log("It's a Draw")
    else if (humanMove === 'rock' && computerMove ==='paper')
        console.log('Computer Wins, Paper beats Rock!')
    else if (humanMove === 'scissors' && computerMove === 'rock')
        console.log('Computer Wins, Rock beats Scissors!')
    else if (humanMove === 'paper' && computerMove === 'scissors')
        console.log('Computer Wins, Scissors beats Paper!')
    else if (humanMove === 'paper' && computerMove === 'rock')
        console.log('You win, paper beats rock')
    else if (humanMove === 'scissors' && computerMove === 'paper')
        console.log('You win, Scissors bests Paper!')
    else if (humanMove === 'rock' && computerMove === 'scissors')
        console.log('You win, Rock beats Scissors!')
    else
        console.log('An Unknown Error')
    console.log('Your Move :',humanMove,'||', 'Computer Move: ', computerMove)
}
playRound(getHumanMove(), getComputerMove() )
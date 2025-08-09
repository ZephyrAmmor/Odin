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
console.log(getComputerMove())

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
console.log(getHumanMove())
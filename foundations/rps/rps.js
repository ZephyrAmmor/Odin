// Get computer's move via Math.random
let computerMove = () => {
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
console.log(computerMove())
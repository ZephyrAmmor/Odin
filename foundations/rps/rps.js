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
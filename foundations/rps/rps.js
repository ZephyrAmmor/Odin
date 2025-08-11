const moves = document.querySelectorAll('.btn')
const roundResult = document.querySelector('.roundResult')
const roundPara = document.querySelector('#round')
const finalResult = document.querySelector('.finalResult')
const winner = document.querySelector('.winner')
const totalRounds = document.getElementById('totalRounds')

let totalRoundsToPlay = 5
let humanVictories = 0
let computerVictories = 0
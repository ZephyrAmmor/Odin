let operand1 = 0
let operand2 = 0
let operator = ''
let screenValue = ''

function add(a,b){
    return a +b;
}
function sub(a,b){
    return a - b;
}
function divide(a,b){
    return a / b;
}
function multiply(a,b){
    return a * b
}

let operate = () => {
    const legalOperators = ['+', '-', '/','x']
    if(!legalOperators.includes(operator))
        return "Illegal Operation"
    switch(operator){
        case '+':
            return add(operand1, operand2)
        case '-':
            return sub(operand1, operand2)
        case '/':
            return divide(operand1, operand2)
        case 'x':
            return multiply(operand1, operand2)
    }
}

const btns = document.querySelectorAll('.btn')
const screen = document.querySelector('.screen')

btns.forEach(btn => {
    btn.addEventListener('click', () =>{
        screen.textContent += btn.id
        screenValue += btn.id
        console.log(screenValue)
    })
});
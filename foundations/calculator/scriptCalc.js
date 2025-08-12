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
    const screen = screenValue.trim.split('+','-','/','x')
    console.log(screen)
    const operand1 = Number(screen[0])
    const operator = Number(screen[1])
    const operand2 = Number(screen[2])
    
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
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

const btns = document.querySelectorAll('.btn')
const screen = document.querySelector('.screen')
const result = document.querySelector('.result')
const clear = document.querySelector('#clr')
const backSpaceBtn = document.querySelector('.backspace')

let operate = () => {
    const regex = /[+\-/x=]/
    const regexOp = /[+\-/x]/
  
    let screen = screenValue.split(regex)
    
    let operand1 = screen[0]
    let operator = ''
    let operand2 = screen[1]
  
    for(let i = 0; i < screenValue.length; i ++){
        if(regexOp.test(screenValue[i])){
            operator =  screenValue[i]
        }
    }

    const legalOperators = ['+', '-', '/','x']
    if(!legalOperators.includes(operator) && checkDecimals(operand1, operand2)){
        return "Illegal Operation"
    }

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

 backSpaceBtn.addEventListener('click', () =>{
        if(screenValue.length > 0){
        console.log(screenValue.slice(0, -1))
        screenValue = screenValue.slice(0, -1)
        screen.textContent = screenValue
        console.log(screen, 'back')
    }
    })

function checkDecimals(operand1, operand2){
    let decimalsOp1 = 0
    let decimalsOp2 = 0
    for(let i = 0; i < operand1.length; i ++){
        if(operand1[i] == '.')
            decimalsOp1 ++
    }
    for (let i = 0; i < operand2.length; i ++){
        if(operand2[i] == '.')
            decimalsOp2 ++
    }
    if(decimalsOp1 > 1 || decimalsOp2 > 1)
        return false;
}

function clearScreen(){
    screen.textContent = ''
    result.textContent = '0'
}
clear.addEventListener('click', clearScreen())
result.textContent = '0'

btns.forEach(btn => {
    btn.addEventListener('click', () =>{
        screen.textContent += btn.id
        screenValue += btn.id
        console.log(screenValue)
    })
});

const equalTo = document.getElementById('=')

equalTo.addEventListener('click', () => {
    screen.textContent = ''
    const res = operate()
    result.textContent = res
    if (res == 'Illegal Operation')
    {
        setTimeout(clearScreen, 3000)
    }
})


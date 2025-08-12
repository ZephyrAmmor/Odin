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
    const regex = /[+\-/x=]/
    const regexOp = /[+\-/x]/
    console.log(screenValue)
    let screen = screenValue.split(regex)
    console.log(screen,'well')
    let operand1 = screen[0]
    let operator = ''
    let operand2 = screen[1]
    console.log(screenValue)
    for(let i = 0; i < screenValue.length; i ++){
        if(regexOp.test(screenValue[i])){
            operator =  screenValue[i]
            break;
        }
    }
    console.log(operator)
    // for(let i = 0; i < screen.length;i ++){
    //     if(regex.exec())
    //         operand1 +=
    // }
    

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
const result = document.querySelector('.result')
const clear = document.querySelector('#clr')
clear.addEventListener('click', () =>{
    screen.textContent = ''
    result.textContent = '0'
})
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
    result.textContent =  operate()
})
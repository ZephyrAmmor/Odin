// 6 FUnctions to export
function inputDiv(type, classToAdd, id, tag, placeholder = 'Write...'){
    const div = document.createElement('div')
    div.classList.add(classToAdd)
    const label = label(id, tag)
    const input = input(type, id, placeholder)

    div.appendChild(label)
    div.appendChild(input)

    return div

}

function textareaDiv(classToAdd, id, tag, placeholder = 'Write...'){
    const div = document.createElement('div')
    div.classList.add(classToAdd)
    const label = label(id, tag)
    const textarea = textarea(id, placeholder)

    div.appendChild(label)
    div.appendChild(textarea)

    return div
}

function selectDiv(classToAdd, id, tag, options){
    const div = document.createElement('div')
    div.classList.add(classToAdd)
    const label = label(id, tag)
    const select = select(id, options)

    div.appendChild(label)
    div.appendChild(select)
    
    return div
}

function input(type, id, placeholder){
    const input = document.createElement('input')
    input.setAttribute('type', type)
    input.setAttribute('id', id)
    input.setAttribute('name', id)
    input.setAttribute('placeholder', placeholder)
    return input
}
function label(forValue, text){
    const label = document.createElement('label')
    label.setAttribute('for', forValue)
    label.textContent = text
    return label
}
function textarea(id, placeholder){
    const textarea = document.createElement('textarea')
    textarea.setAttribute('id', id)
    textarea.setAttribute('name', id)
    textarea.setAttribute('placeholder', placeholder)
    return textarea
}
function select(id, options){
    const select = document.createElement('select')
    select.setAttribute('id', id)
    select.setAttribute('name', id)
    for(let [optionText, optionValue] of Object.entries(options)){
        select.appendChild(option(optionText, optionValue))
    }
    return select
}

function option(text, value){
    const option = document.createElement('option')
    option.setAttribute('value', value)
    option.textContent = text
    return option
}

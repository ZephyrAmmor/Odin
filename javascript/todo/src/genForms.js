function genEditBoard(board){
    const form = document.createElement('form')
    form.classList.add('boardEditForm')

    const titleValue = board.title
    const descriptionValue = board.description
    const importanceValue = board.importance

    const title = inputDiv('text', 'titleField', 'title', 'Title',titleValue, 'Odin')
    const importance = selectDiv('importanceField', 'importance', 'Important', 'Casual', 'Important', importanceValue, 'Very Important')
    const description = textareaDiv('descriptionField', 'description', 'Description', descriptionValue,'Odin is Amazing...')

    console.log(board)

    const head = wrapInHead(title, importance)

    form.appendChild(head)
    form.appendChild(description)

    const submitBtn = document.createElement('button')
    submitBtn.textContent = 'Save'
    form.appendChild(submitBtn)
    return form
}
function genEditProject(project){
    const form = document.createElement('form')
    form.classList.add('projectEditForm')

    const titleValue = project.title
    const descriptionValue = project.description
    const importanceValue = project.description
    const urgencyValue = project.urgency
    const dueDateValue = project.dueDate
    const startDateValue = project.startDate
    const noteValue = project.note
    const completeValue = project.complete

    const title = inputDiv('text', 'titleField', 'title', 'Title',titleValue, 'Odin')
    const importance = selectDiv('importanceField', 'importance', 'Important', 'Casual', 'Important', importanceValue,'Very Important')
    const urgency = selectDiv('urgencyField', 'urgency', 'Urgent', 'Trivial', 'Urgent', urgencyValue, 'Very Urgent')
    const description = textareaDiv('descriptionField', 'description', 'Description', descriptionValue,  'Odin is Amazing...')
    const startDate = inputDiv('date', 'startDateField', 'startDate',startDateValue, 'Start Date')
    const dueDate = inputDiv('date', 'dueDateField', 'dueDate', dueDateValue, 'Due Date')
    const note = textareaDiv('noteField', 'note', 'Note', noteValue, 'Odin is tough as well...')
    const complete = input('checkbox', 'complete')

    if(completeValue === true)
        complete.setAttribute('checked', 'ckecked')
    title.setAttribute('value', titleValue)
    description.setAttribute('value', descriptionValue)
    importance.setAttribute('value', importanceValue)
    urgency.setAttribute('value', urgencyValue)
    startDate.setAttribute('value', startDateValue)
    dueDate.setAttribute('value', dueDateValue)
    note.setAttribute('value', noteValue)

    const dates = document.createElement('div')
    dates.appendChild(startDate)
    dates.appendChild(dueDate)
    dates.classList.add('datesField')

    const head = wrapInHead(title, importance, urgency, complete)
    form.appendChild(head)
    form.appendChild(description)
    form.appendChild(dates)
    form.appendChild(note)
    const submitBtn = document.createElement('button')
    submitBtn.textContent = 'Save'
    form.appendChild(submitBtn)

    return form
}
function genEditTask(task){
    const form = document.createElement('form')
    form.classList.add('taskEditForm')

    const titleValue = task.title
    const descriptionValue = task.description
    const importanceValue = task.description
    const urgencyValue = task.urgency
    const dueDateValue = task.dueDate
    const noteValue = task.note

    const title = inputDiv('text', 'titleField', 'title', 'Title', titleValue, 'Odin')
    const importance = selectDiv('importanceField', 'importance', 'Important', 'Casual', 'Important', importanceValue, 'Very Important')
    const urgency = selectDiv('urgencyField', 'urgency', 'Urgent', 'Trivial', 'Urgent', urgencyValue, 'Very Urgent')
    const description = textareaDiv('descriptionField', 'description', 'Description', descriptionValue, 'Odin is Amazing...')
    const dueDate = inputDiv('date', 'dueDateField', 'dueDate', dueDateValue, 'Due Date')
    const note = textareaDiv('noteField', 'note', 'Note', noteValue, 'Odin is tough as well...')
    const complete = input('checkbox', 'complete')

    const completeValue = project.complete
    if(completeValue === true)
        complete.setAttribute('checked', 'checked')
    title.setAttribute('value', titleValue)
    description.setAttribute('value', descriptionValue)
    importance.setAttribute('value', importanceValue)
    urgency.setAttribute('value', urgencyValue)
    dueDate.setAttribute('value', dueDateValue)
    note.setAttribute('value', noteValue)

    const head = wrapInHead(title, importance, urgency, complete)
    form.appendChild(head)
    form.appendChild(description)
    form.appendChild(dueDate)
    form.appendChild(note)

    const submitBtn = document.createElement('button')
    submitBtn.textContent = 'Save'
    form.appendChild(submitBtn)

    return form
} 

function genAddBoard(){
    const form = document.createElement('form')
    form.classList.add('boardForm')
    const title = inputDiv('text', 'titleField', 'title', 'Title', '','Odin')
    const importance = selectDiv('importanceField', 'importance', 'Important','', 'Casual', 'Important', 'Very Important')
    const description = textareaDiv('descriptionField', 'description', 'Description', '','Odin is Amazing...')

    const head = wrapInHead(title, importance)

    form.appendChild(head)
    form.appendChild(description)

    const submitBtn = document.createElement('button')
    submitBtn.textContent = 'Create'
    form.appendChild(submitBtn)
    return form
}

function genAddProject(){
    const form = document.createElement('form')
    form.classList.add('projectForm')

    const title = inputDiv('text', 'titleField', 'title', 'Title', '', 'Odin')
    const importance = selectDiv('importanceField', 'importance', 'Important','', 'Casual', 'Important', 'Very Important')
    const urgency = selectDiv('urgencyField', 'urgency', 'Urgent','', 'Trivial', 'Urgent', 'Very Urgent')
    const description = textareaDiv('descriptionField', 'description', 'Description', '', 'Odin is Amazing...')
    const startDate = inputDiv('date', 'startDateField', 'startDate','', 'Start Date')
    const dueDate = inputDiv('date', 'dueDateField', 'dueDate', '','Due Date')
    const note = textareaDiv('noteField', 'note', 'Note', '','Odin is tough as well...')

    const head = wrapInHead(title, importance, urgency)
    const dates = document.createElement('div')
    dates.appendChild(startDate)
    dates.appendChild(dueDate)
    dates.classList.add('datesField')
    form.appendChild(head)
    form.appendChild(description)
    form.appendChild(dates)
    form.appendChild(note)
    const submitBtn = document.createElement('button')
    submitBtn.textContent = 'Create'
    form.appendChild(submitBtn)

    return form
}

function genAddTask(){
    const form = document.createElement('form')
    form.classList.add('taskForm')

    const title = inputDiv('text', 'titleField', 'title', 'Title','', 'Odin')
    const importance = selectDiv('importanceField', 'importance', 'Important','', 'Casual', 'Important', 'Very Important')
    const urgency = selectDiv('urgencyField', 'urgency', 'Urgent','', 'Trivial', 'Urgent', 'Very Urgent')
    const description = textareaDiv('descriptionField', 'description', 'Description','', 'Odin is Amazing...')
    const dueDate = inputDiv('date', 'dueDateField', 'dueDate',',', 'Due Date')
    const note = textareaDiv('noteField', 'note', 'Note','', 'Odin is tough as well...')

    const head = wrapInHead(title, importance, urgency)

    form.appendChild(head)
    form.appendChild(description)
    form.appendChild(dueDate)
    form.appendChild(note)
    const submitBtn = document.createElement('button')
    submitBtn.textContent = 'Create'
    form.appendChild(submitBtn)

    return form
}
function wrapInHead(...args){
    const head = document.createElement('div')
    for(let arg of args){
        head.appendChild(arg)
    }
    head.classList.add('formHead')
    return head
}

function inputDiv(type, classToAdd, id, tag, value, placeholder = 'Write...'){
    const div = document.createElement('div')
    div.classList.add(classToAdd)
    const labelC = label(id, tag)
    const inputC = input(type, id, value, placeholder)

    div.appendChild(labelC)
    div.appendChild(inputC)

    return div

}

function textareaDiv(classToAdd, id, tag, value, placeholder = 'Write...'){
    const div = document.createElement('div')
    div.classList.add(classToAdd)
    const labelC = label(id, tag)
    const textareaC = textarea(id,value, placeholder)

    div.appendChild(labelC)
    div.appendChild(textareaC)

    return div
}

function selectDiv(classToAdd, id, tag,selected, ...options){
    const div = document.createElement('div')
    div.classList.add(classToAdd)
    const labelC = label(id, tag)
    const selectC = select(id, options, selected)

    div.appendChild(labelC)
    div.appendChild(selectC)
    
    return div
}

function input(type, id, value, placeholder){
    const input = document.createElement('input')
    input.setAttribute('type', type)
    input.setAttribute('id', id)
    input.setAttribute('name', id)
    input.setAttribute('placeholder', placeholder)
    if(value)
        input.value = value
    return input
}
function label(forValue, text){
    const label = document.createElement('label')
    label.setAttribute('for', forValue)
    label.textContent = text
    return label
}
function textarea(id, value, placeholder){
    const textarea = document.createElement('textarea')
    textarea.setAttribute('id', id)
    textarea.setAttribute('name', id)
    textarea.setAttribute('placeholder', placeholder)
    if(value)
        textarea.value = value
    return textarea
}
function select(id, options, selected){
    const select = document.createElement('select')
    select.setAttribute('id', id)
    select.setAttribute('name', id)
    for(let optValue of options){
        select.appendChild(option(optValue, selected ))
    }
    return select
}

function option(value, selected){
    const option = document.createElement('option')
    option.setAttribute('value', value)
    option.textContent = value
    if(value === selected)
        option.setAttribute('selected', 'selected')
    return option
}

export {genAddBoard, genAddProject, genAddTask, genEditBoard, genEditProject, genEditTask}
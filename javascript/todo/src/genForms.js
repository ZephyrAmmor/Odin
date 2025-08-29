function genEditBoard(board){
    const form = document.createElement('form')
    form.classList.add('boardEditForm')

    const title = inputDiv('text', 'titleField', 'title', 'Title', 'Odin')
    const importance = selectDiv('importanceField', 'importance', 'Important', 'Casual', 'Important', 'Very Important')
    const description = textareaDiv('descriptionField', 'description', 'Description', 'Odin is Amazing...')

    const titleValue = board.title
    const descriptionValue = board.description
    const importanceValue = board.importance

    title.setAttribute('value', titleValue)
    description.setAttribute('value', descriptionValue)
    importance.setAttribute('value', importanceValue)
    const head = wrapInHead(title, importance)

    form.appendChild(head)
    form.appendChild(description)

    return form
}
function genEditProject(project){
    const form = document.createElement('form')
    form.classList.add('projectEditForm')

    const title = inputDiv('text', 'titleField', 'title', 'Title', 'Odin')
    const importance = selectDiv('importanceField', 'importance', 'Important', 'Casual', 'Important', 'Very Important')
    const urgency = selectDiv('urgencyField', 'urgency', 'Urgent', 'Trivial', 'Urgent', 'Very Urgent')
    const description = textareaDiv('descriptionField', 'description', 'Description', 'Odin is Amazing...')
    const startDate = inputDiv('date', 'startDateField', 'startDate', 'Start Date')
    const dueDate = inputDiv('date', 'dueDateField', 'dueDate', 'Due Date')
    const note = textareaDiv('noteField', 'note', 'Note', 'Odin is tough as well...')
    const complete = input('checkbox', 'complete')

    const titleValue = project.title
    const descriptionValue = project.description
    const importanceValue = project.description
    const urgencyValue = project.urgency
    const dueDateValue = project.dueDate
    const startDateValue = project.startDate
    const noteValue = project.note
    const completeValue = project.complete
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
    const head = wrapInHead(title, importance, urgency, complete)
    form.appendChild(head)
    form.appendChild(description)
    form.appendChild(dates)
    form.appendChild(note)
}
function genEditTask(task){
    const form = document.createElement('form')
    form.classList.add('taskEditForm')

    const title = inputDiv('text', 'titleField', 'title', 'Title', 'Odin')
    const importance = selectDiv('importanceField', 'importance', 'Important', 'Casual', 'Important', 'Very Important')
    const urgency = selectDiv('urgencyField', 'urgency', 'Urgent', 'Trivial', 'Urgent', 'Very Urgent')
    const description = textareaDiv('descriptionField', 'description', 'Description', 'Odin is Amazing...')
    const dueDate = inputDiv('date', 'dueDateField', 'dueDate', 'Due Date')
    const note = textareaDiv('noteField', 'note', 'Note', 'Odin is tough as well...')
    const complete = input('checkbox', 'complete')


    const titleValue = task.title
    const descriptionValue = task.description
    const importanceValue = task.description
    const urgencyValue = task.urgency
    const dueDateValue = task.dueDate
    const noteValue = task.note
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

    return form
} 

function genAddBoard(){
    const form = document.createElement('form')
    form.classList.add('boardForm')
    const title = inputDiv('text', 'titleField', 'title', 'Title', 'Odin')
    const importance = selectDiv('importanceField', 'importance', 'Important', 'Casual', 'Important', 'Very Important')
    const description = textareaDiv('descriptionField', 'description', 'Description', 'Odin is Amazing...')

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

    const title = inputDiv('text', 'titleField', 'title', 'Title', 'Odin')
    const importance = selectDiv('importanceField', 'importance', 'Important', 'Casual', 'Important', 'Very Important')
    const urgency = selectDiv('urgencyField', 'urgency', 'Urgent', 'Trivial', 'Urgent', 'Very Urgent')
    const description = textareaDiv('descriptionField', 'description', 'Description', 'Odin is Amazing...')
    const startDate = inputDiv('date', 'startDateField', 'startDate', 'Start Date')
    const dueDate = inputDiv('date', 'dueDateField', 'dueDate', 'Due Date')
    const note = textareaDiv('noteField', 'note', 'Note', 'Odin is tough as well...')

    const head = wrapInHead(title, importance, urgency)
    const dates = document.createElement('div')
    dates.appendChild(startDate)
    dates.appendChild(dueDate)

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

    const title = inputDiv('text', 'titleField', 'title', 'Title', 'Odin')
    const importance = selectDiv('importanceField', 'importance', 'Important', 'Casual', 'Important', 'Very Important')
    const urgency = selectDiv('urgencyField', 'urgency', 'Urgent', 'Trivial', 'Urgent', 'Very Urgent')
    const description = textareaDiv('descriptionField', 'description', 'Description', 'Odin is Amazing...')
    const dueDate = inputDiv('date', 'dueDateField', 'dueDate', 'Due Date')
    const note = textareaDiv('noteField', 'note', 'Note', 'Odin is tough as well...')

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
    const head = document.createElement('fromHead')
    for(let arg of args){
        head.appendChild(arg)
    }
    return head
}

function inputDiv(type, classToAdd, id, tag, placeholder = 'Write...'){
    const div = document.createElement('div')
    div.classList.add(classToAdd)
    const labelC = label(id, tag)
    const inputC = input(type, id, placeholder)

    div.appendChild(labelC)
    div.appendChild(inputC)

    return div

}

function textareaDiv(classToAdd, id, tag, placeholder = 'Write...'){
    const div = document.createElement('div')
    div.classList.add(classToAdd)
    const labelC = label(id, tag)
    const textareaC = textarea(id, placeholder)

    div.appendChild(labelC)
    div.appendChild(textareaC)

    return div
}

function selectDiv(classToAdd, id, tag, ...options){
    const div = document.createElement('div')
    div.classList.add(classToAdd)
    const labelC = label(id, tag)
    const selectC = select(id, options)

    div.appendChild(labelC)
    div.appendChild(selectC)
    
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
    for(let optValue of options){
        select.appendChild(option(optValue))
    }
    return select
}

function option(value){
    const option = document.createElement('option')
    option.setAttribute('value', value)
    option.textContent = value
    return option
}

export {genAddBoard, genAddProject, genAddTask, genEditBoard, genEditProject, genEditTask}
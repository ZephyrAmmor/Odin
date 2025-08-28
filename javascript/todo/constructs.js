class Todo{
    #id 
    #parent
    #complete

    constructor(title, description, importance){
        this.title = title;
        this.description = description;
        this.importance = importance;
    }

    get id (){
        return this.#id
    }
    set id(value){
        if(value && value.length === 36){
            this.#id = value
        }
        throw ReferenceError('Id is not right')
    }

    get parent(){
        return this.#parent
    }

    set parent(value){
        if(value && value.length === 'id'){
            this.#parent = value
        }
    }

    get complete(){
        return this.#complete
    }
    set complete(value){
        if(value === undefined)
            this.#complete = false
        else if(value === true)
            this.#complete = true
    }
}

class Board extends Todo{
    projects = {}
    constructor(title, description, importance){
        super(title, description, importance)
    }

    addProject(project){
        if(project && typeof project === 'object'){
            project.id = crypto.randomUUID()
            this.projects[project.id] = project
            project.parent = this.id
            this.updateSelf()
        }
    }

    removeProject(id){
        if(id && this.projects[id]){
            delete this.projects[id]
            this.updateSelf()
        }
    }
    updateSelf(){
        workSpace.update(this)
    }
    updateProject(project){
        if(project && this.projects[project.id]){
            this.projects[project.id] = project
            this.updateSelf()
        }
    }
    
}

class Project extends Todo{
    tasks = {}
    constructor(title, description, importance, urgency, startDate, dueDate, note){
        super(title, description, importance)
        this.urgency = urgency;
        this.startDate = startDate;
        this.dueDate = dueDate;
        this.note = note;
    }

    addTask(task){
        if(task && typeof task === 'object'){
            task.id = crypto.randomUUID()
            this.tasks[task.id] = task
            task.parent = this.id
        }
        else
            throw TypeError('Was expecting an object here')
    }

    removeTask(id){
        if(id && this.tasks[id]){
            delete this.tasks[id]
        }
    }

    updateTask(task){
        if(task && task.id && this.tasks[task.id]){
            this.tasks[task.id]
        }
    }

    update(board){
        board.updateProject(this)
    }
}

class Task extends Todo{
    constructor(title, description, importance, urgency, dueDate, note){
        super(title, description,importance)
        this.urgency = urgency;
        this.dueDate = dueDate;
        this.note = note;
    }

    update(project){
        project.updateTask(this)
    }
}
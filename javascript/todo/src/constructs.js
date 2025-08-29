import { workSpace } from "./workSpace";
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
        else
            throw ReferenceError('Id is not right')
    }

    get parent(){
        return this.#parent
    }

    set parent(value){
        if(value && value.length === 36){
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
            project.parent = this.id
            project.complete = false
            this.projects[project.id] = project
            this.update()
        }
    }

    removeProject(id){
        if(id && this.projects[id]){
            delete this.projects[id]
            this.update()
        }
    }

    getProjectById(id){
        if(this.projects[id])
            return this.projects[id]
    }
    update(){
        workSpace.update(this)
    }
    updateProject(project){
        if(project && this.projects[project.id]){
            this.projects[project.id] = project
            this.update()
        }
    }
    
    toJSON(){
        let jsonObj = {}
        jsonObj.id = this.id
        jsonObj.parent= this.parent
        jsonObj.complete = this.complete
        jsonObj.title = this.title
        jsonObj.description = this.description
        jsonObj.importance = this.importance
        jsonObj.projects = {}

        for(let [projId, projObj] of Object.entries(this.projects)){
            jsonObj.projects[projId] = projObj.toJSON()
        }
        return jsonObj;
    }

    getProjects(){
        return this.projects
    }

    static fromJSON(boardObj){
        const id = boardObj.id
        const parent = boardObj.parent
        const complete = boardObj.complete
        const title = boardObj.title
        const description = boardObj.description
        const importance  = boardObj.importance
        const board = new Board(title, description, importance)
        board.id = id
        board.parent = parent
        board.complete = complete
        for(let [projId, projObj] of Object.entries(boardObj.projects)){
            board.projects[projId] = Project.fromJSON(projObj)
        }
        return board
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
            task.parent = this.id
            task.complete = false
            this.tasks[task.id] = task
        }
        else
            throw TypeError('Was expecting an object here')
    }

    removeTask(id){
        if(id && this.tasks[id]){
            delete this.tasks[id]
        }
    }

    getTaskById(id){
        if(this.tasks[id]){
            return this.tasks[id]
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

    getTasks(){
        return this.tasks
    }
    toJSON(){
        let jsonObj = {}
        jsonObj.id = this.id
        jsonObj.parent= this.parent
        jsonObj.complete = this.complete
        jsonObj.title = this.title
        jsonObj.description = this.description
        jsonObj.importance = this.importance
        jsonObj.urgency = this.urgency
        jsonObj.startDate = this.startDate
        jsonObj.dueDate = this.dueDate
        jsonObj.note = this.note
        jsonObj.tasks = {}

        for(let [taskId, taskObj] of Object.entries(this.tasks)){
            jsonObj.tasks[taskId] = taskObj.toJSON()
        }
        return jsonObj;
    }

    static fromJSON(projectObj){
        const id = projectObj.id
        const parent = projectObj.parent
        const complete =projectObj.complete
        const title = projectObj.title  
        const description = projectObj.description
        const importance = projectObj.importance
        const urgency = projectObj.urgency
        const startDate = projectObj.startDate
        const dueDate = projectObj.dueDate
        const note = projectObj.note
        const proj = new Project(title, description, importance, urgency, startDate, dueDate, note)
        proj.id = id
        proj.parent = parent
        proj.complete = complete
        for(let [taskId, taskObj] in Object.entries(projectObj.tasks)){
            proj.tasks[taskId] = Task.fromJSON(taskObj)
        }
        return proj
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

    toJSON(){
        return {
            id : this.id,
            parent : this.parent,
            complete : this.complete,
            title : this.title,
            description: this.description,
            importance : this.importance,
            urgency : this.urgency,
            dueDate : this.dueDate,
            note : this.note
        }
    }

    static fromJSON(taskObj){
        const id = taskObj.id
        const parent = taskObj.parent
        const complete = taskObj.complete
        const title = taskObj.title
        const description = taskObj.description
        const importance = taskObj.importance
        const urgency = taskObj.urgency
        const dueDate = taskObj.dueDate
        const note = taskObj.note

        const task = new Task(title, description, importance, urgency, dueDate, note)
        task.id = id
        task.parent = parent
        task.complete = complete
        return task
    }
}
export {Task, Board, Project}
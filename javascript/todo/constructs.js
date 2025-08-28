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
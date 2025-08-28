import workSpace from './workSpace.js'
const stateUI = {
    state : [workSpace,],

    getStateLength(){
        return this.state.length
    },
    getnMainState(){
        return this.state[0]
    },
    getActiveState(){
        return this.state.at(-1)
    },
    getPreviousState(){
        if(this.state.length > 2)
            return this.state.at(-2)
    },
    backState(){
        this.state.pop()
    }, 
    pushToState(obj){
        this.state.push(obj)
    },

    getIndexOfObj(obj){
        if(this.state.indexOf(obj) !== undefined)
            return this.state.indexOf(obj)
    }
}
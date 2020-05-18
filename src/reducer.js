import { ADD_TODO_LIST } from './action'
import { combineReducers } from 'redux'


const init = {
    list : []
}

const todo = ( state = init , action ) =>{
    console.log('### todo reducer')
    switch(action.type){
        case ADD_TODO_LIST:
            console.log( state.list.concat( action.payload ))
            // return Object.assign({}, state, { list: state.list.concat( action.payload )} )
            return {...state, list: action.payload};
        default:
            return state
    }
}

const reducer = combineReducers({ 
    todo 
}); 

export default reducer;
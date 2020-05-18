export const ADD_TODO_LIST =  "ADD_TODO_LIST"

export function addTodoList(value){
    console.log('### todo addTodoList')
    return {
        type : ADD_TODO_LIST,
        payload : value
    }
}
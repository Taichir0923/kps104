import * as todoActionTypes from '../constants/todoConstants';
export const addTodo = todo => {
    return {
        type: todoActionTypes.ADD_TODO,
        payload: todo
    }
}

export const getTodo = id => {
    return {
        type: todoActionTypes.GET_TODO,
        payload: id
    }
}

export const editTodo = todo => {
    return {
        type: todoActionTypes.EDIT_TODO,
        payload: todo
    }
}
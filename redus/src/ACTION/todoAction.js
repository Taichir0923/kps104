import * as todoActionTypes from '../constants/todoConstants';
export const addTodo = todo => {
    return {
        type: todoActionTypes.ADD_TODO,
        payload: todo
    }
}
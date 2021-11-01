import * as todoActionTypes from '../constants/todoConstants';

export const todoReducer = (state = {todos: []}, action) => {
    switch(action.type){
        case todoActionTypes.ADD_TODO:
            return {
                todos: [...state.todos, action.payload]
            }

        default: return state;
    }
}
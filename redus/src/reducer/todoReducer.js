import * as todoActionTypes from '../constants/todoConstants';

export const todoReducer = (state = {todos: []}, action) => {
    switch(action.type){
        case todoActionTypes.ADD_TODO:
            return {
                todos: [...state.todos, action.payload]
            }
        
        case todoActionTypes.GET_TODO:
            return {
                todos: state.todos,
                todo: state.todos.find(el => el.id === action.payload)
            }

        case todoActionTypes.EDIT_TODO:
            const updateTodoIndex = state.todos.findIndex(el => el.id === action.payload.id);
            const upadtedTodoList = [...state.todos];
            upadtedTodoList[updateTodoIndex] = action.payload
            return {
                todos: upadtedTodoList
            }

        default: return state;
    }
}

// axios
// axios.get(url)
// axios.post(url)
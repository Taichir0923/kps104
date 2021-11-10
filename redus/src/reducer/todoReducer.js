import * as actionTypes from '../constants/todoConstants';

export const addNewTodo = (state = {}, action) => {
    switch(action.type){
        case actionTypes.POST_NEW_TODO_REQ:
            return {
                loading: true
            }
        case actionTypes.POST_NEW_TODO_RES:
            return {
                loading: false,
                todo: action.payload
            }
        case actionTypes.POST_NEW_TODO_ERROR:
            return {
                error: action.error
            }
        default: return state
    }
}

export const getTodosReducer = (state = {todos: []}, action) => {
    switch(action.type){
        case actionTypes.GET_ALL_TODOS_REQ:
            return {
                loading: true,
                todos: []
            }
        case actionTypes.GET_ALL_TODOS_RES:
            return {
                loading: false,
                todos: action.payload
            }
        case actionTypes.GET_ALL_TODOS_ERROR:
            return {
                error: action.error
            }
        default: return state
    }
}

export const deleteTodoReducer = (state={todo: {}}, action) => {
    switch(action.type){
        case actionTypes.DELETE_TODO_REQ: 
            return {
                loading: true
            }
        case actionTypes.DELETE_TODO_RES:
            return {
                loading: false,
                todo: action.payload
            }
        case actionTypes.DELETE_TODO_ERROR:
            return {
                error: action.error
            }
        default: return state
    }
}

export const updateTodo = (state = {}, action) => {
    switch(action.type){
        case actionTypes.POST_NEW_TODO_REQ:
            return {
                loading: true
            }
        case actionTypes.POST_NEW_TODO_RES:
            return {
                loading: false,
                todo: action.payload
            }
        case actionTypes.POST_NEW_TODO_ERROR:
            return {
                error: action.error
            }
        default: return state
    }
}
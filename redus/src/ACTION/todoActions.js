import axios from 'axios';
import * as actionTypes from '../constants/todoConstants';

export const getNewTodo = todo => async dispatch => {
    try {
        dispatch({type: actionTypes.POST_NEW_TODO_REQ})
        const {data} = await axios.post("http://localhost:3001/newTodo", todo);
        dispatch({
            type: actionTypes.POST_NEW_TODO_REQ,
            payload: data
        })
    } catch (error){
        dispatch({
            type: actionTypes.POST_NEW_TODO_ERROR,
            error: error.message
        })
    }
}

export const getTodos = () => async dispatch => {
    try{
        dispatch({
            type: actionTypes.GET_ALL_TODOS_REQ
        })

        const {data} = await axios.get("http://localhost:3001/getTodos")

        dispatch({
            type: actionTypes.GET_ALL_TODOS_RES,
            payload: data
        })

    } catch (error){
        dispatch({
            type: actionTypes.GET_ALL_TODOS_ERROR,
            error: error.message
        })
    }
}

export const deleteTodo = id => async dispatch => {
    try {

        dispatch({
            type: actionTypes.DELETE_TODO_REQ
        })
        const {data} = await axios.post("http://localhost:3001/deleteTodo/" + id);
        dispatch({
            type: actionTypes.DELETE_TODO_RES,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: actionTypes.DELETE_TODO_ERROR,
            error: err.message
        })
    }
}

export const updateTodo = (todo , id) => async dispatch => {
    try {
        dispatch({type: actionTypes.UPDATE_TODO_REQ})
        const {data} = await axios.post("http://localhost:3001/updateTodo/" + id, todo);
        dispatch({
            type: actionTypes.UPDATE_TODO_REQ,
            payload: data
        })
    } catch (error){
        dispatch({
            type: actionTypes.UPDATE_TODO_ERROR,
            error: error.message
        })
    }
}


// Auth
// todo => userId
// jsonwebtoken
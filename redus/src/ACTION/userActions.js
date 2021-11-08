import * as actionTypes from '../constants/userConstants';
import axios from 'axios';

export const getUsers = () => async dispatch => {
    try {
        dispatch({
            type: actionTypes.GET_USERS_REQ
        })
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const { data } = response;
        dispatch({
            type: actionTypes.GET_USERS_RES,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: actionTypes.GET_USERS_ERROR,
            error: err.message
        })
    }
}
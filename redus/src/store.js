import {applyMiddleware, combineReducers , createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

import {getUsers} from './reducer/userReducer';
import {addNewTodo , getTodosReducer , deleteTodoReducer , updateTodo} from './reducer/todoReducer';

const allReducers = combineReducers({
    userReducers: getUsers,
    todoReducers: addNewTodo,
    allTodos: getTodosReducer,
    deleteTodoReducer: deleteTodoReducer,
    updateTodo: updateTodo
})

const middleware = [thunk];

const store = createStore(
    allReducers,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
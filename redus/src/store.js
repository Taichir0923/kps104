import {applyMiddleware, combineReducers , createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

import {getUsers} from './reducer/userReducer';

const allReducers = combineReducers({
    userReducers: getUsers
})

const middleware = [thunk];

const store = createStore(
    allReducers,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
import { combineReducers } from 'redux';

import {counterReducer} from './reducer/counterReducer';
import {todoReducer} from './reducer/todoReducer';

const allReducers = combineReducers({
    counterReducer: counterReducer,
    todo: todoReducer
});

export default allReducers;
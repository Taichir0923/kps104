import * as counterActionTypes from '../constants/counterConstants';
export const counterReducer = (state = {counter: 0}, action) => {
    switch(action.type){
        case counterActionTypes.INCREASE_BY_ONE:
            return {counter: state.counter + 1};
        case counterActionTypes.DECREASE_BY_ONE:
            return {counter: state.counter - 1}
        default: return state
    }
}
// MERN - Mongo Express React NodeJS
import * as counterActionTypes from '../constants/counterConstants';
export const counterIncreate = () => {
    return {
        type: counterActionTypes.INCREASE_BY_ONE
    }
}

export const counterDecrease = () => {
    return {
        type: counterActionTypes.DECREASE_BY_ONE
    }
}
import { FAVORITAR, CARREGAR_FAVORITOS } from '../actions/actionTypes';

export default (state = [], action = {}) => {
    switch(action.type) {
        case CARREGAR_FAVORITOS:
            return action.payload;
        case FAVORITAR:
            return [...state, action.payload];
        default:
            return state;
    }
};


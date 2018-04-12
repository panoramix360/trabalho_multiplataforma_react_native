import { CARREGAR_NOTICIAS } from '../actions/actionTypes';

export default (state = [], action = {}) => {
    switch(action.type) {
        case CARREGAR_NOTICIAS:
            return action.payload.results || [];
        default:
            return state;
    }
};


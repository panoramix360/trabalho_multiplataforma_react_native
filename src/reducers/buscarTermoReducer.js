import { BUSCAR_NOTICIAS } from '../actions/actionTypes';

export default (state = '', action = {}) => {
    switch(action.type) {
        case BUSCAR_NOTICIAS:
            return action.payload;
        default:
            return state;
    }
};


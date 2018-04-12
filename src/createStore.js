import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise';
import noticiasFeedReducer from './reducers/noticiasFeedReducer';
import buscarTermoReducer from './reducers/buscarTermoReducer';
import favoritosReducer from './reducers/favoritosReducer';

const logger = createLogger();

export default (initialState = {}) => (
    createStore(
        combineReducers({
            noticias: noticiasFeedReducer,
            buscarTermo: buscarTermoReducer,
            favoritos: favoritosReducer
        }),
        initialState,
        applyMiddleware(logger, promiseMiddleware)
    )
);
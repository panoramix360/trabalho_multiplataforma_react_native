import { FAVORITAR, CARREGAR_FAVORITOS } from './actionTypes';
import { AsyncStorage } from 'react-native';

export const adicionarFavorito = (url) => {
    AsyncStorage.getItem('favoritos').then((favoritos) => {
        if (favoritos) {
            const favoritosArray = JSON.parse(favoritos);
            return AsyncStorage.setItem('favoritos', JSON.stringify([...favoritosArray, url]));
        }
        return AsyncStorage.setItem('favoritos', JSON.stringify([url]));
    });

    return {
        type: FAVORITAR,
        payload: url
    };
};

export const carregarFavoritos = () => ({
    type: CARREGAR_FAVORITOS,
    payload: AsyncStorage.getItem('favoritos').then((favoritos) => {
        if(favoritos) {
            return JSON.parse(favoritos);
        }
        return [];
    })
});
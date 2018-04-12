import { CARREGAR_NOTICIAS, BUSCAR_NOTICIAS } from './actionTypes'; 
import NYT_API_KEY from '../config/nytApiKey';

export const carregarNoticias = () => {
    const req = fetch(`https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=${NYT_API_KEY}`);
    return {
        type: CARREGAR_NOTICIAS,
        payload: req.then(response => response.json())
    };
};

export const buscarNoticias = buscarTermo => ({
    type: BUSCAR_NOTICIAS,
    payload: buscarTermo
});
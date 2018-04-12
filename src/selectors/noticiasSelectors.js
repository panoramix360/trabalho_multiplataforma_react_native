import { createSelector } from 'reselect';
import { reshapeNewsData, filterNewsBySearchTerm } from '../util/dataTransformations';

const noticiasSelector = state => state.noticias;

const reshapeNewsSelector = createSelector(
    [noticiasSelector],
    reshapeNewsData
);

export const todasNoticiasSelector = createSelector(
    [reshapeNewsSelector],
    newsItems => newsItems
);

const buscarTermoSelector = state => state.buscarTermo;

const caseInsensitiveSearchTermSelector = createSelector(
    buscarTermoSelector,
    buscarTermo => buscarTermo.toLowerCase()
);

export const buscarNoticiasSelector = createSelector(
    [reshapeNewsSelector, caseInsensitiveSearchTermSelector],
    filterNewsBySearchTerm
);

const favoritosSelector = state => state.favoritos;

export const noticiasFavoritadasSelector = createSelector(
    [todasNoticiasSelector, favoritosSelector],
    (newsItems, favoritos) => newsItems.filter(newsItem => favoritos.indexOf(newsItem.url) > -1)
);
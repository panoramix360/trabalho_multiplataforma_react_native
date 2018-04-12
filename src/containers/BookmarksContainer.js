import { noticiasFavoritadasSelector } from '../selectors/noticiasSelectors';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { carregarFavoritos, adicionarFavorito } from '../actions/favoritosActions';
import NewsFeed from '../components/NewsFeed';

const mapStateToProps = state => ({
    noticias: noticiasFavoritadasSelector(state)
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        carregar: carregarFavoritos,
        adicionarFavorito
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
import { todasNoticiasSelector } from '../selectors/noticiasSelectors';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { carregarNoticias } from '../actions/noticiasActions';
import { adicionarFavorito } from '../actions/favoritosActions';
import NewsFeed from '../components/NewsFeed';

const mapStateToProps = state => ({
    noticias: todasNoticiasSelector(state)
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        carregar: carregarNoticias,
        adicionarFavorito
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
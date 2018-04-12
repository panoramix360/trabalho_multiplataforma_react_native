import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { buscarNoticias } from '../actions/noticiasActions';
import { adicionarFavorito } from '../actions/favoritosActions';
import Search from '../components/Search';
import { buscarNoticiasSelector } from '../selectors/noticiasSelectors';

const mapStateToProps = state => ({
    noticiasFiltradas: buscarNoticiasSelector(state)
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        carregar: buscarNoticias,
        adicionarFavorito
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Search);
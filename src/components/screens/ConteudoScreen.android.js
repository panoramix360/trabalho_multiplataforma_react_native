import React, { Component } from 'react';
import {
    Vibration,
    StatusBar,
    Text
} from 'react-native';
import NewsFeedContainer from '../../containers/NewsFeedContainer';
import BookmarksContainer from '../../containers/BookmarksContainer';
import SearchContainer from '../../containers/SearchContainer';
import * as globalStyles from '../../styles/global';
import { TabNavigator } from 'react-navigation';

class ConteudoScreen extends Component {
    static navigationOptions = {
        title: 'Notícias'
    };
    
    constructor(props) {
        super(props);
        StatusBar.setBarStyle('light-content');
    }

    render() {
        return (
            <NewsFeedContainer />
        );
    }
}

class BuscarScreen extends Component {
    static navigationOptions = {
        title: 'Busca'
    };
    
    constructor(props) {
        super(props);
        StatusBar.setBarStyle('light-content');
    }

    render() {
        return (
            <SearchContainer />
        );
    }
}

class FavoritosScreen extends Component {
    static navigationOptions = {
        title: 'Favoritos'
    };
    
    constructor(props) {
        super(props);
        StatusBar.setBarStyle('light-content');
    }

    render() {
        return (
            <BookmarksContainer />
        );
    }
}

export default TabNavigator({
    Conteudo: { screen: ConteudoScreen },
    Busca: { screen: BuscarScreen },
    Favoritos: { screen: FavoritosScreen }
});
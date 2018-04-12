import React, { Component } from 'react';
import {
    TabBarIOS,
    Alert,
    Vibration,
    StatusBar,
    Text
} from 'react-native';
import NewsFeedContainer from '../../containers/NewsFeedContainer';
import BookmarksContainer from '../../containers/BookmarksContainer';
import SearchContainer from '../../containers/SearchContainer';
import * as globalStyles from '../../styles/global';

export default class ConteudoScreen extends Component {
    static navigationOptions = {
        title: 'Notícias'
    };

    constructor(props) {
        super(props);
        this.state = {
            tab: 'conteudo'
        };

        StatusBar.setBarStyle('light-content');
    }

    render() {
        return (
            <TabBarIOS
                barTintColor={globalStyles.BAR_COLOR}
                tintColor={globalStyles.LINK_COLOR}
                translucent={false}>
                <TabBarIOS.Item
                    badge={4}
                    systemIcon={'featured'}
                    selected={this.state.tab === 'conteudo'}
                    onPress={() => this.setState({ tab: 'conteudo' })}>
                    <NewsFeedContainer />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    systemIcon={'search'}
                    selected={this.state.tab === 'busca'}
                    onPress={() => this.setState({ tab: 'busca' })}>
                    <SearchContainer />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    systemIcon={'bookmarks'}
                    selected={this.state.tab === 'favoritos'}
                    onPress={() => this.setState({ tab: 'favoritos' })}>
                    <BookmarksContainer />
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}
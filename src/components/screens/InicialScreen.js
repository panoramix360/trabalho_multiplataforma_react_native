import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    StatusBar,
    StyleSheet
} from 'react-native';
import Title from '../Title';
import AppText from '../AppText';
import * as globalStyles from '../../styles/global';

// set the status bar for iOS to light
StatusBar.setBarStyle('light-content');

export default class InicialScreen extends Component {
    static navigationOptions = {
        title: 'Tela Inicial'
    };

    render() {
        return (
            <View style={[globalStyles.COMMON_STYLES.pageContainer, styles.container]}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Conteudo')}>
                    <Title>Trabalho Multiplataforma</Title>

                    <AppText>
                        Desenvolvido em React Native + Redux + React Navigation
                    </AppText>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
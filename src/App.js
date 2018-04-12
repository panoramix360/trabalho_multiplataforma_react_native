import React from 'react';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import ConteudoScreen from './components/screens/ConteudoScreen';
import InicialScreen from './components/screens/InicialScreen';
import createStore from './createStore';
import * as globalStyles from './styles/global';

const store = createStore();

const RootStack = StackNavigator({
    Inicial: { screen: InicialScreen },
    Conteudo: { screen: ConteudoScreen }
}, {
    initialRouteName: 'Inicial',
    navigationOptions: {
        headerStyle: {
            backgroundColor: `${globalStyles.BAR_COLOR}`
        },
        headerTintColor: `${globalStyles.HEADER_TEXT_COLOR}`
    }
});

export default () => (
    <Provider store={store}>
        <RootStack />
    </Provider>
);

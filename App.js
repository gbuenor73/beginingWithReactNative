import {
    StatusBar
} from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
    Alert,
    Button,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { css } from './assets/css/Css';
import Page from './views/Page';
import { createStackNavidator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './views/Home';
import Login from './views/Login';


export default function App() {
    // const [product, setProduct] = useState('bola');
    // const [quantity, setQuantity] = useState(0);

    // useEffect(() => {
    //     if (quantity > 0) {
    //         Alert.alert('Novo producto adicionado');
    //     }
    // }, [quantity]);

    // const props = {
    //     empresa: 'Bueno Empresa',
    //     name: 'Gabriel',
    //     produto: product,
    //     quantidade: quantity

    // };

    const Stack = createStackNavidator();


    return (
        //<View style={css.container} >
        //<Text> {product}</Text>
        //<Page {...props} />
        //<Button title='Adicionar Produtos' onPress={() => setQuantity(quantity + 1)} />

        <NavigationContainer>
            <Stack.Screen name="Home" component={Home}></Stack.Screen>
            <Stack.Screen name="Login" component={Login}></Stack.Screen>
        </NavigationContainer>

        //<StatusBar style="dark" /></View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
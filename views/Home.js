import React from 'react';
import {
    View, Text, Button
} from "react-native";
import { css } from '../assets/css/Css';

export default function Home({ navigation }) {

    return (
        <View style={css.container2}>
            <Text>Esse é o componente Home</Text>
            <Button
                title='Ir para Login'
                onPress={() => navigation.navigate('Login', {
                    id: 30
                })}
            />
            <Button title='Ir para Rastreio'
                onPress={() => navigation.navigate('Rastreio', {
                    id: 30
                })} />
        </View>
    )
}
import React from 'react';
import {
    View, Text, Button, TouchableOpacity, Image
} from "react-native";
import { css } from '../assets/css/Css';

export default function Home({ navigation }) {

    return (
        <View style={css.container2}>

            <TouchableOpacity style={css.button_home} onPress={() => {navigation.navigate('Login', {id: 30})}}>
                <Image source={require('../assets/imgs/buttonLogin.png')} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {navigation.navigate('Rastreio')}}>
                <Image source={require('../assets/imgs/buttonRastreio.png')} />
            </TouchableOpacity>
            
        </View>
    )
}
import React, {useState} from 'react';
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import { css } from '../assets/css/Css';

export default function Login({ route }) {

    const [display, setDisplay] = useState('none');

    return (
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height "} style={[css.container, css.darkbg]}>
            <View style={css.login__logomarca}>
                <Image source={require('../assets/imgs/logomarca.png')}></Image>
            </View>

            <View style={css.login__form}>

                <TextInput style={css.login__input} placeholder='Usuário'></TextInput>
                <TextInput style={css.login__input} placeholder='Senha' secureTextEntry={true}></TextInput>

                <TouchableOpacity style={css.login__button} onPress={() => setDisplay('flex')}>
                    <Text style={css.login__buttonText}>
                        Entrar
                    </Text>
                </TouchableOpacity>

            </View>

            <View>
                <Text style={css.login__msg(display)}>Usuário ou senha inválidos!</Text>
            </View>
        </KeyboardAvoidingView>
    )
}
import React from 'react';
import { Button, Text, View } from 'react-native';

export default function Rastreio({ navigation }) {

    return(
        <View>
            <Text>
                Este é o componente de Rastreio
            </Text>
            <Button title='Ir para o Login'
                onPress={() => navigation.navigate('Login', {
                    id: 30
                })} />
        </View>
    )

}
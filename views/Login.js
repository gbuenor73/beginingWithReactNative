import React from 'react';
import {
    Text,
    View
} from "react-native";

export default function Login({route}) {

    return (
    <View>
        <Text>Esse é o component Login do sistema {route.params.id}</Text>
    </View>
    )
}
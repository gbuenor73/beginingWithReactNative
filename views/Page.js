import React from 'react';
import { View, Text } from "react-native";

export default function Page(props) {
    return (
        <View>
            <Text>O nome da empresa é {props.empresa} e seu funcionario  é {props.name} </Text>
        </View>);
}
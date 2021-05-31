import React, { useState, useEffect } from 'react';
import { Text, View, Button, Alert } from 'react-native';
import { css } from './assets/css/Css';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './views/Home';
import Login from './views/Login';
import Rastreio from './views/Rastreio';

export default function App() {

    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: "APP de TESTE - BUENO",
                        headerStyle: { backgroundColor: "#027794" },
                        headerTintColor: 'silver',
                        headerTitleStyle: { fontWeight: 'bold', alignSelf: 'flex-end' }
                    }}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        headerShown: false
                    }} />
                <Stack.Screen name="Rastreio" component={Rastreio} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Import das Telas
import Splashscreen from '../pages/splashscreen/index';
import Main from '../pages/main/index';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName="Splashscreen"
        screenOptions={{
            headerShown: false,
        }}>
        <Stack.Screen name="Splashscreen" component={Splashscreen} />
        <Stack.Screen name="Main" component={Main} />
      
    </Stack.Navigator>
);
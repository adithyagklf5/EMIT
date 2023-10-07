// **** Navigation component ****
import React from 'react'; 
import {
    View,
    Button,
    Text, 
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import DetailsScreen from './DetailsScreen' 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function Navigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="App" component={DetailsScreen} />
        </Tab.Navigator>
    ); 
}

export default Navigation;
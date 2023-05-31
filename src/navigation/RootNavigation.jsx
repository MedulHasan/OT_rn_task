import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login/Login';
import {LOGIN} from './RouteName';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        animationDuration: 400,
      }}>
      <Stack.Screen name={LOGIN} component={Login} />
    </Stack.Navigator>
  );
};

export default RootNavigation;

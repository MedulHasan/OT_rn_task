import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login/Login';
import {BOTTOM_TAB, LOGIN} from './RouteName';
import BottomTabNavigation from './BottomTabNavigation';
import useListData from '../hooks/useListData';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  const {user} = useListData();
  return (
    <Stack.Navigator
      initialRouteName={user?.id ? BOTTOM_TAB : LOGIN}
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        animationDuration: 400,
      }}>
      <Stack.Screen name={LOGIN} component={Login} />
      <Stack.Screen name={BOTTOM_TAB} component={BottomTabNavigation} />
    </Stack.Navigator>
  );
};

export default RootNavigation;

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {LIST, PROFILE} from './RouteName';
import Profile from '../screens/Profile/Profile';
import List from '../screens/List/List';
import dpr from '../utils/styles/dpr';
import ListIcon from '../assets/svgs/list.svg';
import ProfileIcon from '../assets/svgs/profile.svg';
import TabBarIcon from './TabBarIcon';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  const tabBarStyle = styles();
  return (
    <BottomTab.Navigator screenOptions={tabBarStyle.bottomTabScreenOptions}>
      <BottomTab.Screen
        name={LIST}
        component={List}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <TabBarIcon
                title={'List'}
                Icon={ListIcon}
                focused={focused}
                height={dpr(22)}
                width={dpr(22)}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={PROFILE}
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <TabBarIcon
                title={'Profile'}
                Icon={ProfileIcon}
                focused={focused}
                height={dpr(22)}
                width={dpr(22)}
              />
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigation;

const styles = () =>
  StyleSheet.create({
    bottomTabScreenOptions: {
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        height: Platform.OS === 'ios' ? dpr(90) : dpr(70),
        borderTopWidth: 1,
        // borderTopColor: colors.ifSecondary,
        // backgroundColor: colors.btnSecondary,
      },
    },
  });

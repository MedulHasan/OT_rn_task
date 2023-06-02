import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import dpr from '../utils/styles/dpr';

const TabBarIcon = ({title, Icon, width, height, focused}) => {
  const {colors} = useTheme();
  const bottomTabBarStyle = styles(colors, focused);
  return (
    <View style={bottomTabBarStyle.cont}>
      {typeof Icon !== 'undefined' && (
        <Icon
          fill={focused ? colors.outerSpace : colors.silverSand}
          height={height}
          width={width}
        />
      )}
      <Text style={bottomTabBarStyle.label}>{title}</Text>
    </View>
  );
};

export default TabBarIcon;

const styles = (colors, focused) =>
  StyleSheet.create({
    cont: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    label: {
      color: focused ? colors.outerSpace : colors.silverSand,
      fontSize: dpr(12),
      lineHeight: dpr(12),
      marginTop: dpr(5),
      fontWeight: '500',
    },
  });

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Logo from '../../assets/svgs/logo.svg';
import dpr from '../../utils/styles/dpr';
import {useTheme} from '@react-navigation/native';

const Header = () => {
  const {colors} = useTheme();
  const headerStyle = styles(colors);
  return (
    <View style={headerStyle.headerContainer}>
      <Logo />
      <Text style={headerStyle.text}>welcome back!</Text>
    </View>
  );
};

export default Header;

const styles = colors =>
  StyleSheet.create({
    headerContainer: {
      marginVertical: dpr(40),
      alignItems: 'center',
    },
    text: {
      marginTop: dpr(32),
      color: colors.woodsmoke,
      fontSize: dpr(32),
      lineHeight: dpr(36),
      fontWeight: 800,
    },
  });

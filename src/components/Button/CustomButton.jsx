import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import dpr from '../../utils/styles/dpr';
import {useTheme} from '@react-navigation/native';

const CustomButton = ({
  text,
  linearColor,
  btnContStyle,
  btnTextStyle,
  onPress,
}) => {
  const {colors} = useTheme();
  const btnStyle = styles(colors);
  return (
    <Pressable onPress={onPress}>
      <LinearGradient
        colors={linearColor}
        style={[btnStyle.btnContainer, btnContStyle]}>
        <Text style={[btnStyle.btnText, btnTextStyle]}>{text}</Text>
      </LinearGradient>
    </Pressable>
  );
};

export default CustomButton;

const styles = colors =>
  StyleSheet.create({
    btnContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      height: dpr(54),
      minWidth: dpr(130),
      borderRadius: dpr(14),
    },
    btnText: {
      fontWeight: '600',
      fontSize: dpr(15),
      lineHeight: dpr(22),
    },
  });

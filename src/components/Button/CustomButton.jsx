import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const CustomButton = ({text}) => {
  return (
    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={{}}>
      <Text style={{}}>{text}</Text>
    </LinearGradient>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});

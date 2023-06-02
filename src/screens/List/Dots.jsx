import {StyleSheet, Text, Pressable} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import dpr from '../../utils/styles/dpr';
import useListData from '../../hooks/useListData';

const Dots = ({item, plusRef}) => {
  const {colors} = useTheme();
  const dotStyle = styles(colors);
  const {setIsUpdate, setPostItemData} = useListData();

  const handleSetUpdate = () => {
    plusRef.current?.snapToIndex(0);
    setIsUpdate(true);
    setPostItemData(item);
  };
  return (
    <Pressable style={dotStyle.cont} onPress={handleSetUpdate}>
      <Text style={dotStyle.text}>.</Text>
      <Text style={dotStyle.text}>.</Text>
      <Text style={dotStyle.text}>.</Text>
    </Pressable>
  );
};

export default Dots;

const styles = colors =>
  StyleSheet.create({
    cont: {
      position: 'absolute',
      top: 12,
      right: 15,
      width: dpr(30),
      height: dpr(30),
      alignItems: 'flex-end',
    },
    text: {
      color: colors.woodsmoke,
      fontSize: dpr(16),
      fontWeight: '900',
      lineHeight: dpr(6),
    },
  });

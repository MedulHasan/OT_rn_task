import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import dpr from '../../utils/styles/dpr';
import {useTheme} from '@react-navigation/native';

const Comment = () => {
  const {colors} = useTheme();
  const commentStyle = styles(colors);
  return (
    <View style={commentStyle.container}>
      <Text style={commentStyle.comment}>
        Lorem ipsum dolor sit amet, consectetur elit. In augue semper arcu enim
        viverra sit ipsum. Lorem ipsum dolor sit amet consectetur elit.{' '}
      </Text>
    </View>
  );
};

export default Comment;

const styles = colors =>
  StyleSheet.create({
    container: {
      marginHorizontal: dpr(40),
      marginTop: dpr(24),
    },
    comment: {
      fontSize: dpr(14),
      fontWeight: '400',
      lineHeight: dpr(20),
      color: colors.osloGray,
    },
  });

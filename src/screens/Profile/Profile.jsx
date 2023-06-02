import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import Header from './Header';
import Follow from './Follow';
import Comment from './Comment';

const Profile = () => {
  const {colors} = useTheme();
  const profileStyle = styles(colors);
  return (
    <View style={profileStyle.container}>
      <Header />
      <Follow />
      <Comment />
    </View>
  );
};

export default Profile;

const styles = colors =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
  });

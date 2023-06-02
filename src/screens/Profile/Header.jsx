import {StyleSheet, Image, Text, View, Pressable} from 'react-native';
import React from 'react';
import dpr from '../../utils/styles/dpr';
import {useNavigation, useTheme} from '@react-navigation/native';
import useListData from '../../hooks/useListData';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LOGIN} from '../../navigation/RouteName';
const profilePicture = require('../../assets/images/Avatar.png');

const Header = () => {
  const {colors} = useTheme();
  const headerStyle = styles(colors);
  const {user} = useListData();
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('auth');
      navigation.navigate(LOGIN);
    } catch (error) {}
  };
  return (
    <View style={headerStyle.continue}>
      <Pressable
        style={[
          headerStyle.userCont,
          {position: 'absolute', top: dpr(20), right: dpr(20)},
        ]}
        onPress={handleLogout}>
        <Text style={headerStyle.userText}>Logout</Text>
      </Pressable>
      <Image source={profilePicture} />
      <Text style={headerStyle.name}>{user?.name}</Text>
      <View style={headerStyle.userCont}>
        <Text style={headerStyle.userText}>{user?.email}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = colors =>
  StyleSheet.create({
    continue: {
      paddingTop: dpr(100),
      alignItems: 'center',
    },
    name: {
      fontSize: dpr(20),
      lineHeight: dpr(24),
      fontWeight: '600',
      color: colors.woodsmoke,
      marginTop: dpr(15),
    },
    userCont: {
      backgroundColor: colors.blackHaze,
      paddingHorizontal: dpr(12),
      paddingVertical: dpr(8),
      borderRadius: 6,
      marginTop: dpr(6),
    },
    userText: {
      fontWeight: '600',
      fontSize: dpr(12),
      color: colors.osloGray,
    },
  });

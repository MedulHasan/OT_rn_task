import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import dpr from '../../utils/styles/dpr';

const Follow = () => {
  const {colors} = useTheme();
  const followStyle = styles(colors);
  return (
    <View style={followStyle.container}>
      <SocialInfo count={48} text={'Followers'} />
      <SocialInfo count={572} text={'Following'} />
      <SocialInfo count={35} text={'Saves'} />
    </View>
  );
};

export default Follow;

const SocialInfo = ({count, text}) => {
  const {colors} = useTheme();
  const followStyle = styles(colors);
  return (
    <View style={followStyle.socialInfoCont}>
      <Text style={followStyle.count}>{count}</Text>
      <Text style={followStyle.text}>{text}</Text>
    </View>
  );
};

const styles = colors =>
  StyleSheet.create({
    container: {
      marginHorizontal: dpr(40),
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: dpr(20),
    },
    socialInfoCont: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    count: {
      fontWeight: '600',
      fontSize: dpr(18),
      lineHeight: dpr(24),
      color: colors.outerSpace,
    },
    text: {
      fontWeight: '400',
      fontSize: dpr(12),
      lineHeight: dpr(16),
      color: colors.osloGray,
    },
  });

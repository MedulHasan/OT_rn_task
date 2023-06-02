import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import dpr from '../../utils/styles/dpr';
import CustomButton from '../../components/Button/CustomButton';
import Dots from './Dots';
const cardImg1 = require('../../assets/images/balenciaga.png');

const Card = ({item, plusRef}) => {
  const {image, name} = item || {};
  const {colors} = useTheme();
  const cardStyle = styles(colors);
  const linearColor = [colors.primary, colors.primary, colors.primary];

  return (
    <View style={cardStyle.container}>
      <Dots item={item} plusRef={plusRef} />
      <Image source={{uri: image}} style={cardStyle.image} />
      <Text style={cardStyle.text}>{name}</Text>
      <Text style={cardStyle.follow}>102k Followers</Text>
      <CustomButton
        text={'Follow'}
        linearColor={linearColor}
        btnContStyle={cardStyle.btnCont}
        btnTextStyle={cardStyle.btnText}
      />
    </View>
  );
};

export default Card;

const styles = colors =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.white,
      width: (dpr('wf') - dpr(70)) / 2,
      alignItems: 'center',
      borderRadius: 12,
      padding: dpr(20),
      position: 'relative',
    },
    image: {
      height: dpr(100),
      width: dpr(100),
      borderRadius: 50,
      marginBottom: dpr(12),
    },
    text: {
      color: colors.woodsmoke,
      fontWeight: '600',
      fontSize: dpr(18),
      lineHeight: dpr(22),
    },
    follow: {
      fontWeight: '400',
      fontSize: dpr(12),
      lineHeight: dpr(16),
      color: colors.osloGray,
      marginTop: dpr(2),
      marginBottom: dpr(16),
    },
    btnCont: {
      height: dpr(38),
      borderRadius: dpr(10),
    },
    btnText: {
      color: colors.white,
    },
  });

import {StyleSheet} from 'react-native';
import dpr from '../../utils/styles/dpr';

export const customInputStyle = (colors, layout, inputWidth) => {
  return StyleSheet.create({
    inputCont: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: colors.blackHaza,
      borderRadius: dpr(14),
      paddingHorizontal: dpr(20),
      backgroundColor: colors.blackHaze,
      height: dpr(56),
    },
    icon: {
      marginRight: dpr(10),
    },
    input: {
      color: colors.osloGray,
      fontSize: dpr(15),
      fontWeight: '500',
      margin: 0,
      paddingLeft: 0,
      height: layout?.height || undefined,
      lineHeight: dpr(24),
    },
    mt: {
      marginTop: dpr(8),
    },
    rightIconMargin: {
      marginRight: dpr(0),
    },
    inputWidth: {
      width: inputWidth,
    },
  });
};

import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PlusIcon from '../../assets/svgs/plus.svg';
import dpr from '../../utils/styles/dpr';
import {useTheme} from '@react-navigation/native';
import CustomInput from '../../components/CustomInput/CustomInput';

import SearchIcon from '../../assets/svgs/search.svg';
import useListData from '../../hooks/useListData';

const initialItemValue = {
  name: '',
  image: '',
  description: '',
};

const ListHeader = ({plusRef}) => {
  const {colors} = useTheme();
  const listHeaderStyle = styles(colors);
  const {setPostItemData, setIsUpdate} = useListData();

  const handleOpenModal = () => {
    setIsUpdate(false);
    plusRef.current?.snapToIndex(0);
    setPostItemData(initialItemValue);
  };
  return (
    <View style={listHeaderStyle.container}>
      <View style={listHeaderStyle.subCont}>
        <Text style={listHeaderStyle.title}>explore</Text>
        <Pressable onPress={handleOpenModal}>
          <PlusIcon />
        </Pressable>
      </View>
      <CustomInput placeholder="Search here..." leftIcon={<SearchIcon />} />
    </View>
  );
};

export default ListHeader;

const styles = colors =>
  StyleSheet.create({
    container: {
      paddingVertical: dpr(24),
      backgroundColor: colors.white,
      paddingHorizontal: dpr(30),
    },
    subCont: {
      marginBottom: dpr(24),
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    title: {
      textTransform: 'uppercase',
      fontWeight: '800',
      fontSize: dpr(32),
      lineHeight: dpr(36),
      color: colors.woodsmoke,
    },
  });

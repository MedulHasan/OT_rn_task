import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useMemo} from 'react';
import {useTheme} from '@react-navigation/native';
import dpr from '../../utils/styles/dpr';
import Card from './Card';
import useListData from '../../hooks/useListData';

const CardList = ({plusRef}) => {
  const {colors} = useTheme();
  const cardListStyle = styles(colors);
  const {lists, loadList} = useListData();

  const memorizeCard = useMemo(
    () =>
      ({item}) =>
        <Card item={item} plusRef={plusRef} />,
    [],
  );
  return (
    <View style={cardListStyle.container}>
      <Text style={cardListStyle.title}>Top street-style brands</Text>
      {loadList ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={lists}
          keyExtractor={(_, i) => i}
          renderItem={memorizeCard}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          columnWrapperStyle={cardListStyle.cardCont}
          initialNumToRender={10}
          windowSize={10}
        />
      )}
    </View>
  );
};

export default CardList;

const styles = colors =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.blackHaze,
      paddingHorizontal: dpr(30),
      marginTop: dpr(25),
    },
    title: {
      fontWeight: '600',
      fontSize: dpr(14),
      lineHeight: dpr(20),
      color: colors.osloGray,
      marginBottom: dpr(14),
    },
    cardCont: {
      justifyContent: 'space-between',
      marginBottom: dpr(10),
    },
  });

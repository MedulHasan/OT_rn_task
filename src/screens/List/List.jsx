import {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import ListHeader from './ListHeader';
import {useTheme} from '@react-navigation/native';
import CardList from './CardList';
import CustomBottomSheet from './CustomBottomSheet';

const List = () => {
  const {colors} = useTheme();
  const listStyle = styles(colors);
  const plusRef = useRef(null);

  const [loadSheet, setLoadSheet] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoadSheet(true);
    }, 0);
  }, []);

  return (
    <KeyboardAvoidingView
      style={listStyle.container}
      behavior={Platform.OS == 'ios' ? 'padding' : ''}>
      <ListHeader plusRef={plusRef} />
      {loadSheet && (
        <>
          <CardList plusRef={plusRef} />
          <CustomBottomSheet plusRef={plusRef} />
        </>
      )}
    </KeyboardAvoidingView>
  );
};

export default List;

const styles = colors =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
  });

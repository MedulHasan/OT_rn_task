import {StyleSheet, Text, View, Pressable} from 'react-native';
import React, {useCallback, useMemo, useState} from 'react';
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import {useTheme} from '@react-navigation/native';
import dpr from '../../utils/styles/dpr';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/Button/CustomButton';
import useListData from '../../hooks/useListData';
import DeleteIcon from '../../assets/svgs/delete icon.svg';

const postUrl = 'http://192.168.249.75:3000/items';

const CustomBottomSheet = ({plusRef}) => {
  const {colors} = useTheme();
  const btnSheetStl = styles(colors);
  const snapPoints = useMemo(() => ['70%'], []);
  const renderBackdrop = useCallback(props => {
    return (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        opacity={0.2}
      />
    );
  }, []);

  const linearColor = [colors.woodsmoke, colors.woodsmoke, colors.woodsmoke];

  const {lists, setLists, isUpdate, postItemData, setPostItemData} =
    useListData();
  const [postLoading, setPostLoading] = useState(false);

  const handleChange = (name, text) => {
    setPostItemData({
      ...postItemData,
      [name]: text,
    });
  };

  const handleSubmit = () => {
    let newLists = [];
    lists.forEach(list => {
      if (list?.id != postItemData?.id) newLists.push(list);
    });
    const data = {
      ...postItemData,
      id: isUpdate ? postItemData.id : lists.length + 1,
    };
    try {
      setPostLoading(true);
      setTimeout(() => {
        let url = isUpdate ? `${postUrl}/${postItemData.id}` : postUrl;
        let method = isUpdate ? 'PUT' : 'POST';
        fetch(url, {
          method,
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(data),
        })
          .then(res => res.json())
          .then(newData => {
            if (newData.id) {
              setLists([...newLists, newData]);
              setPostLoading(false);
              plusRef.current?.close();
            }
          });
      }, 4000);
    } catch (error) {
    } finally {
      setPostLoading(false);
    }
  };

  const handleDelete = () => {
    setPostLoading(true);
    try {
      fetch(`${postUrl}/${postItemData.id}`, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(data => {
          let newLists = [];
          lists.forEach(list => {
            if (list?.id != postItemData?.id) newLists.push(list);
          });
          setLists(newLists);
          plusRef.current?.close();
        });
    } catch (error) {
    } finally {
      setPostLoading(false);
    }
  };

  return (
    <BottomSheet
      ref={plusRef}
      index={-1}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
      enablePanDownToClose={true}>
      <View style={btnSheetStl.cont}>
        <View style={btnSheetStl.headerCont}>
          <Text style={btnSheetStl.title}>
            {isUpdate ? 'Update Collection' : 'Create New Collection'}
          </Text>
          {isUpdate && (
            <Pressable onPress={handleDelete} style={btnSheetStl.delete}>
              <DeleteIcon fill={colors.red} />
            </Pressable>
          )}
        </View>
        <CustomInput
          placeholder="Image Link"
          value={postItemData.image}
          style={btnSheetStl.btmSheetStl}
          onChangeText={text => handleChange('image', text)}
        />
        <CustomInput
          placeholder="Collection Name"
          style={btnSheetStl.btmSheetStl}
          value={postItemData.name}
          onChangeText={text => handleChange('name', text)}
        />
        <CustomInput
          placeholder="Description"
          value={postItemData.description}
          style={[btnSheetStl.btmSheetStl, btnSheetStl.inputArea]}
          numberOfLines={4}
          multiline={true}
          textAlignVertical={'top'}
          onChangeText={text => handleChange('description', text)}
        />
        <CustomButton
          text={postLoading ? 'Loading...' : isUpdate ? 'Update' : 'Create New'}
          linearColor={linearColor}
          btnContStyle={btnSheetStl.btnContStyle}
          btnTextStyle={btnSheetStl.btnTextStyle}
          onPress={handleSubmit}
        />
      </View>
    </BottomSheet>
  );
};

export default CustomBottomSheet;

const styles = colors =>
  StyleSheet.create({
    cont: {
      marginHorizontal: dpr(20),
    },
    headerCont: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    delete: {
      width: dpr(30),
      alignItems: 'flex-end',
    },
    title: {
      fontWeight: '600',
      fontSize: dpr(22),
      lineHeight: dpr(28),
      color: colors.woodsmoke,
    },
    btmSheetStl: {
      marginTop: dpr(16),
    },
    inputArea: {
      height: dpr(140),
    },
    btnContStyle: {
      marginTop: dpr(16),
    },
    btnTextStyle: {
      color: colors.white,
    },
  });

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import RootNavigation from './src/navigation/RootNavigation';
import {defaultTheme} from './src/utils/theme/defaultTheme';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useListData from './src/hooks/useListData';

const App = () => {
  const {setUser} = useListData();
  useEffect(() => {
    SplashScreen.hide();
    (async () => {
      let auth = await AsyncStorage.getItem('auth');
      setUser(JSON.parse(auth));
    })();
  }, []);
  return (
    <SafeAreaProvider style={styles.safeArea}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#FFFFFF'} />
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer theme={defaultTheme}>
          <RootNavigation />
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

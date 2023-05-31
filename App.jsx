/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#FFFFFF'} />
      <Text>OrangeToolz</Text>
    </SafeAreaView>
  );
};

export default App;

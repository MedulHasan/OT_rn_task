import {View, StyleSheet, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {useTheme, useNavigation} from '@react-navigation/native';
import Header from './Header';
import CustomInput from '../../components/CustomInput/CustomInput';
import dpr from '../../utils/styles/dpr';
import EmailIcon from '../../assets/svgs/Email.svg';
import LockIcon from '../../assets/svgs/Lock.svg';
import EyeIcon from '../../assets/svgs/Eye.svg';
import CustomButton from '../../components/Button/CustomButton';
import {BOTTOM_TAB} from '../../navigation/RouteName';
import useListData from '../../hooks/useListData';

const Login = () => {
  const {colors} = useTheme();
  const navigation = useNavigation();
  const linearColor = [colors.primary, colors.primary, colors.primary];
  const loginStyle = loginStyles(colors);

  const {setUser} = useListData();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = () => {
    const url = `http://192.168.249.75:3000/users?email=${email}&password=${password}`;
    try {
      setLoading(true);
      setError('');
      setTimeout(async () => {
        const res = await fetch(url);
        let newData = await res.json();
        let data = newData[0];
        if (data?.id) {
          setUser(data);
          await AsyncStorage.setItem('auth', JSON.stringify(data));
          setLoading(false);
          setEmail('');
          setPassword('');
          navigation.navigate(BOTTOM_TAB);
        } else {
          setError('Invalid credentials!');
          setLoading(false);
        }
      }, 2000);
    } catch (error) {
      setLoading(false);
    }
  };
  return (
    <View style={loginStyle.loginContainer}>
      <Header />
      <CustomInput
        placeholder="Email Address"
        style={loginStyle.inputText}
        leftIcon={<EmailIcon width={dpr(30)} height={dpr(25)} />}
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <CustomInput
        placeholder="Password"
        style={loginStyle.inputText}
        leftIcon={<LockIcon width={dpr(30)} height={dpr(25)} />}
        rightIcon={<EyeIcon width={dpr(30)} height={dpr(25)} />}
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <Text>{error}</Text>
      <CustomButton
        text={loading ? 'Loading...' : 'Log In'}
        linearColor={linearColor}
        btnContStyle={loginStyle.btnContStyle}
        btnTextStyle={loginStyle.btnTextStyle}
        onPress={handleLogin}
      />
    </View>
  );
};
export default Login;

const loginStyles = colors =>
  StyleSheet.create({
    loginContainer: {
      flex: 1,
      backgroundColor: colors.white,
      alignItems: 'center',
    },
    inputText: {
      width: dpr('wf') - dpr(40),
      marginBottom: dpr(16),
    },
    btnContStyle: {
      width: dpr('wf') - dpr(40),
      marginTop: dpr(10),
    },
    btnTextStyle: {
      color: colors.white,
      fontSize: dpr(15),
      lineHeight: dpr(22),
      fontWeight: '600',
    },
  });

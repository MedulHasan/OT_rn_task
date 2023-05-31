import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import Header from './Header';
import CustomInput from '../../components/CustomInput/CustomInput';
import dpr from '../../utils/styles/dpr';
import EmailIcon from '../../assets/svgs/Email.svg';
import LockIcon from '../../assets/svgs/Lock.svg';
import EyeIcon from '../../assets/svgs/Eye.svg';
import CustomButton from '../../components/Button/CustomButton';

const Login = () => {
  const {colors} = useTheme();
  const loginStyle = loginStyles(colors);
  return (
    <View style={loginStyle.loginContainer}>
      <Header />
      <CustomInput
        placeholder="Email Address"
        style={loginStyle.inputText}
        leftIcon={<EmailIcon width={dpr(30)} height={dpr(25)} />}
      />
      <CustomInput
        placeholder="Password"
        style={loginStyle.inputText}
        leftIcon={<LockIcon width={dpr(30)} height={dpr(25)} />}
        rightIcon={<EyeIcon width={dpr(30)} height={dpr(25)} />}
      />
      <CustomButton text={'Log In'} />
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
  });

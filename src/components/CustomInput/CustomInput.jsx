import {TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {customInputStyle} from './customInputStyle';
import {useTheme} from '@react-navigation/native';
import dpr from '../../utils/styles/dpr';

const CustomInput = ({
  label = '',
  style = {},
  editable = true,
  keyboardAppearance = 'light',
  keyboardType = 'default',
  returnKeyType = '',
  placeholder = '',
  defaultValue = '',
  multiline = false,
  numberOfLines = 1,
  textAlignVertical = 'center',
  maxLength = 10000,
  secureTextEntry = false,
  value,
  leftIcon,
  rightIcon,
  onChangeText,
  onChange,
  onKeyPress,
  autoFocus,
  onEndEditing,
  Ref,
  inputMode = 'text',
  autoCapitalize = 'sentences',
}) => {
  const styles = Array.isArray(style) ? style : [style];
  const {colors} = useTheme();
  const [isFocus, setIsFocus] = useState(false);
  const [layout, setLayout] = useState(null);

  let inputWidth;
  if (typeof leftIcon === 'object' && typeof rightIcon === 'object') {
    inputWidth = layout?.width - dpr(20 * 5) || undefined;
  } else if (typeof leftIcon === 'object') {
    inputWidth = layout?.width - dpr(20 * 4) || undefined;
  } else if (typeof rightIcon === 'object') {
    inputWidth = layout?.width - dpr(20 * 3) || undefined;
  } else if (
    typeof leftIcon === 'undefined' &&
    typeof rightIcon === 'undefined'
  ) {
    inputWidth = layout?.width - dpr(20 * 2) || undefined;
  }

  const inputStyle = customInputStyle(colors, layout, inputWidth);
  return (
    <>
      <View
        onLayout={event => setLayout(event.nativeEvent.layout)}
        style={[inputStyle.inputCont, ...styles]}>
        {typeof leftIcon === 'object' && (
          <View style={inputStyle.icon}>{leftIcon}</View>
        )}
        <TextInput
          style={{
            ...inputStyle.input,
            ...inputStyle.inputWidth,
          }}
          cursorColor={colors.textSecondary}
          placeholderTextColor={
            label ? colors.manatee : colors.textQuaternaryVariant
          }
          inputMode={inputMode}
          autoCapitalize={autoCapitalize}
          placeholder={isFocus ? '' : placeholder}
          editable={editable}
          keyboardAppearance={keyboardAppearance}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          multiline={multiline}
          numberOfLines={numberOfLines}
          textAlignVertical={textAlignVertical}
          maxLength={maxLength}
          secureTextEntry={secureTextEntry}
          defaultValue={defaultValue}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          value={value?.toString()}
          onChangeText={onChangeText}
          onChange={onChange}
          onKeyPress={onKeyPress}
          autoFocus={autoFocus}
          onEndEditing={onEndEditing}
          ref={Ref}
          // {...props}
        />
        {typeof rightIcon === 'object' && (
          <View style={inputStyle.rightIconMargin}>{rightIcon}</View>
        )}
      </View>
    </>
  );
};

export default CustomInput;

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Colors} from '../utils/Colors';
import {fontSize} from '../utils/Constant';
import {wp, hp} from '../utils/ResponsiveLayout';

const TextIn = ({
  placeholder,
  onChangeText,
  secureTextEntry,
  right,
  label,
  customStyle,
  value,
  maxLength
}) => {
  const {inputStyle, labelStyle, containerStyle} = styles;
  return (
    <TextInput
      mode="flat"
      label={label}
      autoCorrect={false}
      placeholder={placeholder}
      value={value}
      placeholderTextColor={Colors.gray4}
      secureTextEntry={secureTextEntry}
      style={{
        backgroundColor: Colors.white,
        overflow: 'hidden',
        elevation: 5,
      }}
      //underlineColor='transparent'
      onChangeText={onChangeText}
      backgroundColor={Colors.white}
      //  / underlineColorAndroid="transparent"
      right={right}
      maxLength={maxLength}
    />
  );
};

const styles = {
  inputStyle: {
    // color: Colors.darkblue,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  container: {
    marginTop: hp(4),
    marginBottom: hp(3),
    marginLeft: wp(5),
    marginRight: wp(5),
  },
};
export default TextIn;

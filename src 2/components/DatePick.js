import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../utils/Colors';
import {fontSize} from '../utils/Constant';
import {wp, hp} from '../utils/ResponsiveLayout';
import DatePicker from 'react-native-date-picker';

const DatePick = ({date, onConfirm, open, onCancel, theme}) => {
  return (
    <DatePicker
      modal
      mode="date"
      open={open}
      date={date}
      onConfirm={onConfirm}
      onCancel={onCancel}
      theme={theme}
    />
  );
};

export default DatePick;

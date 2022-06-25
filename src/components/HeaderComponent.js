import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {wp, hp} from '../utils/ResponsiveLayout';

const HeaderComponent = ({
  onPress,
  Icon,
  name,
  size,
  color,
  style,
}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={style}>
        <MaterialCommunityIcons name={name} size={size} color={color} />
      </TouchableOpacity>
    </View>
  );
};


export default HeaderComponent;

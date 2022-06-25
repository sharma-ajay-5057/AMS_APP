import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import {Colors} from '../utils/Colors';

const Splash = () => {
  return (
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor:Colors.darkblue}}>
      <Text style={{fontSize:24, color:'white'}}>AMS</Text>
      <ActivityIndicator size={'large'} color={'white'} style={{ justifyContent:'center', alignItems:'center', marginTop:20}} />
    </View>
  );
};

export default Splash;

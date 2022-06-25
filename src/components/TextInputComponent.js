import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
  TextInput,
  AsyncStorage,
  KeyboardAvoidingView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const TextInputComponent = ({style, placeholder, placeholderTextColor, value, onChangeText, onPress}) => {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding" enabled>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Userame"
            placeholderTextColor="#003f5c"
            value={userN}
            onChangeText={userN => setuserN(userN)}
          />
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={() => console.log('call')}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp(80),
    alignContent: 'center',
    justifyContent: 'center',
  },
  inputView: {
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#80d2ed',
    borderRadius: 10,
    width: wp(70),
    height: hp(8),
    marginBottom: 20,
    marginTop: 10,
  },
  TextInput: {
    padding: 10,
    marginLeft: 20,
    fontSize: 18,
  },
  loginText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  loginBtn: {
    width: wp(50),
    borderRadius: 10,
    height: hp(8),
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 30,
    backgroundColor: '#105d9c',
  },
});
export default TextInputComponent;

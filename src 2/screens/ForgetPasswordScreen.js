import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
} from 'react-native';
import {Colors} from '../utils/Colors';
import TextIn from '../components/TextIn';
import {wp, hp} from '../utils/ResponsiveLayout';
import {TextInput} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {Constant} from '../utils/Constant';
const ForgetPasswordScreen = () => {
  const [foremail, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <Image source={require('../image/img1.jpg')} style={styles.image} />
        <Text style={styles.text}>Forget Password</Text>
      <View style={styles.containerView}>
        <TextIn
          placeholder={'Email'}
          value={foremail}
          onChangeText={text => setEmail(text)}
        />

        <TouchableOpacity activeOpacity={1} style={styles.loginBtn}>
          <Text style={styles.loginText}>Forget Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp(100),
    backgroundColor: Colors.white,
  },
  containerView: {
    marginTop: hp(5),
    marginLeft: wp(6),
    marginRight: wp(6),
  },
  text: {
    fontSize: hp(4),
    color: Colors.dark,
    fontWeight: 'bold',
    marginTop: hp(5),
    marginLeft: wp(7),
    marginRight: wp(7),
    // justifyContent: 'center',
    // alignSelf: 'center',
  },
  forgettext: {
    fontSize: hp(2.5),
    color: Colors.dark,
    marginLeft: wp(5),
    marginRight: wp(5),
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
  },
  loginBtn: {
    width: wp(89),
    borderRadius: 10,
    height: hp(9),
    alignSelf: 'center',
    marginTop: hp(6),
    marginBottom: hp(5),
    marginLeft: wp(5),
    marginRight: wp(5),
    backgroundColor: Colors.dark1,
    borderRadius: 30,
    elevation: Platform == 'android' ? 5 : 0,
  },
  loginText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: Constant.fontSize.large,
    fontFamily: Constant.fonts.Bold,
    fontWeight: 'bold',
    color: Colors.light,
    marginTop: hp(3),
  },
  image: {
    width: wp(100),
    height: hp(30),
    alignSelf: 'center',
  },
});

export default ForgetPasswordScreen;

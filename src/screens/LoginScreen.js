import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, Alert, ActivityIndicator } from 'react-native';
import { Colors } from '../utils/Colors';
import TextIn from '../components/TextIn';
import { wp, hp } from '../utils/ResponsiveLayout';
import { TextInput } from 'react-native-paper';
import { Constant } from '../utils/Constant';
import { AuthContext } from '../../context';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLoginData, resetLogin } from '../redux/actions/LoginAction';
import _ from 'lodash'

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { signIn } = React.useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [loader, setLoader] = useState(false);
  const user = useSelector(state => state.LoginReducers.user);
  const message = _.get(user, 'data.message', '')
  const error = _.get(user, 'data.error', false)

  useEffect(() => {
    if (message != '') {
      alert(message)
      dispatch(resetLogin())
    }
    setLoader(false)
  }, [message])

  useEffect(() => {
    if (user != null) {
      if (user.data.success == true) {
        signIn(JSON.stringify(user.data.data.token))
      }
      else {
        console.log('user.data.message', user.data.message);
        setLoader(false)
      }
    }
    setLoader(false)
  }, [user, loader]);

  const onLoginFuction = () => {
    console.log('user data => ::', user);
    if (!_.isEmpty(email) || !_.isEmpty(password)) {
      setLoader(true)
      dispatch(fetchLoginData({ email, password }));
    }
    else {
      alert('Email and password not be empty')
    }
    setLoader(false)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>AMS</Text>
      <View style={styles.containerView}>
        <TextIn
          label={'Email'}
          placeholder={'Email'}
          value={email}
          onChangeText={text => setEmail(text)}
        />
      </View>
      <View style={styles.containerView2}>
        <TextIn
          label={'Password'}
          placeholder={'Password'}
          value={password}
          secureTextEntry={passwordVisible}
          onChangeText={text => setPassword(text)}
          right={
            <TextInput.Icon
              name={passwordVisible ? 'eye' : 'eye-off'}
              //color={Colors.gray4}
              size={wp(6)}
              rippleColor={'transparent'}
              forceRipple={false}
              onPress={() => setPasswordVisible(!passwordVisible)}
            />
          }
        />
      </View>
        <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
          <Text style={styles.forgettext}>Forget Password ?</Text>
        </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={1}
        style={styles.loginBtn}
        onPress={() => onLoginFuction()}
      >
        {loader ?
          <ActivityIndicator size={'large'} color={Colors.white} style={styles.ActivityIndicatorLoader} />
          :
          <Text style={styles.loginText}>LOGIN</Text>
        }
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   // height: hp(100),
   // backgroundColor: Colors.white,
    //marginTop:30
  },
  containerView: {
    marginTop: hp(5),
    marginLeft: wp(5),
    marginRight: wp(5),
  },
  containerView2: {
    marginTop: hp(5),
    marginLeft: wp(5),
    marginRight: wp(5),
  },
  text: {
    fontSize: hp(5),
    color: Colors.dark,
    fontWeight: 'bold',
    marginTop: hp(14),
    marginLeft: wp(6),
    marginRight: wp(6),
  },
  forgettext: {
    fontSize: hp(2.5),
    color: Colors.secondaryColor,
    marginLeft: wp(5),
    marginRight: wp(5),
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    marginTop: hp(3),
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
  ActivityIndicatorLoader: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: hp(2),
  }
});

export default LoginScreen;

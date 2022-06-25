import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
  ScrollView,
  ToastAndroid,
  Alert,
} from 'react-native';
import { Colors } from '../utils/Colors';
import TextIn from '../components/TextIn';
import { wp, hp } from '../utils/ResponsiveLayout';
import { TextInput } from 'react-native-paper';
import { Constant } from '../utils/Constant';
import SwipeButton from 'rn-swipe-button';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../../context';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRequestChangePassword } from '../redux/actions/changePasswordAction';
import { fetchLogoutData } from '../redux/actions/LoginAction';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import _ from 'lodash'

const ChangePasswordScreen = ({ navigation }) => {
  const [oldpassword, setOldpassword] = useState('');
  const [newpassword, setNewpassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [passVisible, setPassVisible] = useState(true);
  const [confirmVisible, setConfirmVisible] = useState(true);
  const [changeloading, setChangeLoading] = useState(false)
  const dispatch = useDispatch();
  const data = useSelector(state => state.changePasswordReducers.data);
  const { signOut } = React.useContext(AuthContext);
  const users = useSelector(state => state.LoginReducers.user);

  useEffect(() => {
    if (data != null) {
      console.log('data ch :::', data)
      if (data.success == true) {
        Alert.alert(data.message, 'Re-Login again', [
          {
            text: 'Logout',
            onPress: () => signOut(users),
          },
        ])
      } else {
        alert(data.message)
      }
    }
    setChangeLoading(false)
  }, [data, changeloading])

  const onChangePasswordFunction = () => {
    setChangeLoading(true)
    if (!_.isEmpty(oldpassword) || !_.isEmpty(newpassword) || !_.isEmpty(confirmpassword)) {
      dispatch(
        fetchRequestChangePassword({ oldpassword, newpassword, confirmpassword }),
        fetchLogoutData(),
      );
    }
    else {
      alert('All filed is blank')
    }
    setChangeLoading(false)
  };

  return (
    <ScrollView keyboardShouldPersistTaps={'handled'}>
      <View style={styles.container}>
        <Image
          source={require('../image/img2.jpg')}
          style={{ width: wp(100), height: hp(30) }}
        />
        <View style={styles.containerView}>
          <TextIn
            label={'Old Password'}
            placeholder={'Old Password'}
            value={oldpassword}
            onChangeText={text => setOldpassword(text)}
          />
        </View>
        <View style={styles.containerView2}>
          <TextIn
            label={'New Password'}
            placeholder={'New Password'}
            value={newpassword}
            secureTextEntry={passVisible}
            onChangeText={text => setNewpassword(text)}
            right={
              <TextInput.Icon
                name={passVisible ? 'eye' : 'eye-off'}
                //color={Colors.gray4}
                size={wp(6)}
                rippleColor={'transparent'}
                forceRipple={false}
                onPress={() => setPassVisible(!passVisible)}
              />
            }
          />
        </View>
        <View style={styles.containerView3}>
          <TextIn
            label={'Confirm Password'}
            placeholder={'Confirm Password'}
            value={confirmpassword}
            secureTextEntry={confirmVisible}
            onChangeText={text => setConfirmpassword(text)}
            right={
              <TextInput.Icon
                name={confirmVisible ? 'eye' : 'eye-off'}
                //color={Colors.gray4}
                size={wp(6)}
                rippleColor={'transparent'}
                forceRipple={false}
                onPress={() => setConfirmVisible(!confirmVisible)}
              />
            }
          />
        </View>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.ChangeBtn}
          onPress={() => onChangePasswordFunction()}>
          {
            changeloading ?
              <ActivityIndicator size={'large'} color={'red'} style={styles.ActivityIndicatorLoader} />
              :
              <Text style={styles.ChangeText}>Change Password</Text>
          }
        </TouchableOpacity>

        {/* <View
          style={{
            marginLeft: wp(5),
            marginRight: wp(5),
          }}>
          <SwipeButton
            containerStyles={{marginTop: hp(10)}}
            height={hp(10)}
            // onSwipeSuccess={() => onChangePasswordFunction()}
            onSwipeSuccess={() => onChangePasswordFunction()}
            railBackgroundColor={Colors.secondaryColor}
            railStyles={{
              backgroundColor: Colors.light,
              borderColor: Colors.dark1,
              borderWidth: 1,
            }}
            thumbIconBackgroundColor={'#6db8e3'}
            title="Change Password"
            titleColor={Colors.white}
            thumbIconBorderColor={Colors.secondaryColor}
            thumbIconComponent={() => {
              return (
                <Ionicons name="arrow-forward" color={'white'} size={30} />
              );
            }}
          />
        </View> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp(100),
    backgroundColor: Colors.white,
  },
  containerView: {
    marginTop: hp(4),
    marginLeft: wp(5),
    marginRight: wp(5),
  },
  containerView2: {
    marginTop: hp(4),
    marginLeft: wp(5),
    marginRight: wp(5),
  },
  containerView3: {
    marginTop: hp(4),
    marginLeft: wp(5),
    marginRight: wp(5),
  },
  ChangeBtn: {
    width: wp(89),
    borderRadius: 10,
    height: hp(9),
    alignSelf: 'center',
    marginTop: hp(10),
    marginBottom: hp(5),
    marginLeft: wp(5),
    marginRight: wp(5),
    backgroundColor: Colors.dark1,
    borderRadius: 30,
    elevation: Platform == 'android' ? 5 : 0,
  },
  ChangeText: {
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
export default ChangePasswordScreen;

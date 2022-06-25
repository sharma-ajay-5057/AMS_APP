import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Platform,
  TouchableOpacity,
  ToastAndroid,
  Alert
} from 'react-native';
import { hp, wp } from '../utils/ResponsiveLayout';
import { Colors } from '../utils/Colors';
import TextIn from '../components/TextIn';
import { TextInput } from 'react-native-paper';
import { Constant } from '../utils/Constant';
import DatePick from '../components/DatePick';
import moment from 'moment';
import _ from 'lodash'
import { useDispatch, useSelector } from 'react-redux';
import { requestEmpReg } from '../redux/actions/empRegAction';
import { fetchUpdateEmployee, resetEmployee } from '../redux/actions/updateEmpAction'

const EmployeeRegisterScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setpassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [passVisible, setPassVisible] = useState(true);
  const [confirmVisible, setConfirmVisible] = useState(true);
  const [date, setDate] = useState(false);
  const [open, setOpen] = useState(false);
  const [temp, setTemp] = useState(false);
  const [edBtn, setEdBtn] = useState(false);
  const [id, setId] = useState('');
  const [userid, setUserid] = useState('');

  const emp_data = useSelector(state => state.empRegReducer.emp_data);
  const update_emp = useSelector(state => state.updateEmpReducer.update_emp);

  useEffect(() => {
    console.log('aaaaaa', route.params);
    if (route.params != undefined) {
      const { editBtn, Id, User_role, First, Last, Email, Phone, Dob } = route.params;
      setId(Id)
      setUserid(User_role)
      setFirst_name(First)
      setLast_name(Last)
      setEmail(Email)
      setPhone(Phone)
      setDate(Dob)
      setEdBtn(editBtn);
    }
  }, [])

  useEffect(() => {
    return () => { };
  }, [open]);

  useEffect(() => {
    console.log("empdata ", emp_data)
    if (temp)
      if (emp_data.data.success == true) {
        ToastAndroid.show('Employee Registed successfully', ToastAndroid.SHORT)
        setTemp(false)
        navigation.goBack();
      } else {
        alert(emp_data.data.message)
      }
  }, [emp_data])

  const onSubmitReg = () => {
    dispatch(requestEmpReg({ first_name, last_name, email, phone, password, confirmpassword, date }));
    setTemp(true)
  }

  useEffect(() => {
    if (update_emp.data?.success == true) {
      navigation.goBack();
      ToastAndroid.show('Employee udated successfully', ToastAndroid.SHORT)
      dispatch(resetEmployee())
    }
  }, [update_emp])

  const onUpdateRegData = () => {
    dispatch(fetchUpdateEmployee({ id, userid, first_name, last_name, email, password, confirmpassword, phone, date }))
  }

  return (
    <View>
      <ScrollView keyboardShouldPersistTaps={'handled'}>
        <Image
          source={require('../image/lap.jpg')}
          style={{
            height: hp(30),
            width: wp(100),
          }}
          blurRadius={3}
        />
        <View
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
            width: 100,
            height: 100,
            elevation: 3,
            backgroundColor: 'white',
            borderRadius: 200 / 2,
            marginTop: -55,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: 'black',
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            Register
          </Text>
        </View>
        <View style={{ flex: 1, margin: 10, padding: 10 }}>
          <TextIn
            placeholder={'First Name'}
            value={String(first_name)}
            onChangeText={text => setFirst_name(text)}
          />
          <View style={{ height: 10 }} />
          <TextIn
            placeholder={'Last Name'}
            value={String(last_name)}
            onChangeText={text => setLast_name(text)}
          />
          <View style={{ height: 10 }} />
          <TextIn
            placeholder={'Email'}
            value={String(email)}
            onChangeText={text => setEmail(text)}
          />
          <View style={{ height: 10 }} />
          <TextIn
            placeholder={'Password'}
            value={password}
            secureTextEntry={passVisible}
            onChangeText={text => setpassword(text)}
            right={
              <TextInput.Icon
                name={passVisible ? 'eye' : 'eye-off'}
                size={wp(6)}
                rippleColor={'transparent'}
                forceRipple={false}
                onPress={() => setPassVisible(!passVisible)}
              />
            }
          />
          <View style={{ height: 10 }} />
          <TextIn
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
          <View style={{ height: 10 }} />
          <TextIn
            placeholder={'Phone'}
            value={String(phone)}
            maxLength={10}
            onChangeText={text => setPhone(text)}
          />
          <View style={{ height: 10 }} />
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => setOpen(true)}
            style={{
              backgroundColor: 'white',
              width: wp(90),
              height: hp(9),
              elevation: 5,
            }}>
            <Text
              style={{
                color: 'black',
                margin: 10,
                padding: 10,
                fontSize: 15,
                right: wp(2),
              }}>
              {date ? moment(date, 'DD-MM-YYYY').format('DD MMM YYYY') : 'Select DOB'}
            </Text>
          </TouchableOpacity>
        </View>
        <DatePick
          open={open}
          date={new Date()}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
            console.log(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
        {edBtn ?
          <TouchableOpacity
            activeOpacity={1}
            style={styles.regBtn}
            onPress={() => onUpdateRegData()}>
            <Text style={styles.regText}>Edit</Text>
          </TouchableOpacity>
          :
          <TouchableOpacity
            activeOpacity={1}
            style={styles.regBtn}
            onPress={() => onSubmitReg()}>
            <Text style={styles.regText}>Register</Text>
          </TouchableOpacity>
        }
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  regBtn: {
    width: wp(89),
    height: hp(9),
    alignSelf: 'center',
    marginTop: hp(6),
    marginBottom: hp(5),
    marginLeft: wp(5),
    marginRight: wp(5),
    backgroundColor: Colors.dark1,
    elevation: Platform == 'android' ? 5 : 0,
  },
  regText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: Constant.fontSize.large,
    fontFamily: Constant.fonts.Bold,
    fontWeight: 'bold',
    color: Colors.light,
    marginTop: hp(3),
  },
});

export default EmployeeRegisterScreen;

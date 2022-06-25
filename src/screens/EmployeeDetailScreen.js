import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image
} from 'react-native';
import { hp, wp } from '../utils/ResponsiveLayout';
import { Colors } from '../utils/Colors';
import { useNavigation } from '@react-navigation/native';
import { Constant } from '../utils/Constant';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRequestEmployeeData, } from '../redux/actions/EmployeeListAction';
import { fetchEmployeeStatus } from '../redux/actions/employeeStatusAction';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
import { Switch } from 'react-native-paper';

const EmployeeDetailScreen = () => {
  const [data, setData] = useState('');
  const [isSwitchOn, setIsSwitchOn] = useState(true);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const empdata = useSelector(state => state.EmployeeListReducer.empdata);
  const loading = useSelector(state => state.EmployeeListReducer.loading);
  const emp_status = useSelector(state => state.employeeStatusReducer.emp_status)

  useEffect(() => {
    if (empdata) {
      setData(empdata);
    }
  }, [empdata]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log('focus emp--------------');
      dispatch(fetchRequestEmployeeData());
      if (empdata) {
        setData(empdata);
      }
    });
    return unsubscribe;
  }, [navigation])

  useEffect(() => {
    dispatch(fetchRequestEmployeeData());
  }, []);

  useEffect(() => {
    if (emp_status != null) {
      if (emp_status.data.success == true)
        dispatch(fetchRequestEmployeeData());
      else {
        alert(emp_status.data.message)
      }
    }
  }, [emp_status])

  const onEmployeeStatus = (id) => {
    dispatch(fetchEmployeeStatus(id))
  }

  return (
    <View
      style={{
        flex: 1,
      }}>
      {loading ? (
        <ActivityIndicator
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: hp(40),
          }}
          size={'large'}
          color={'black'}
        />
      ) : (
        <FlatList
          data={empdata}
          ListHeaderComponent={() => {
            return (
              <View
                style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => navigation.navigate('Emp')}
                  style={{
                    width: wp(40),
                    height: hp(7),
                    backgroundColor: Colors.dark1,
                    margin: 10,
                    padding: 10,
                    borderRadius: 10
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: 'bold',
                      color: 'white',
                      justifyContent: 'center',
                      alignSelf: 'center',
                      marginTop: 5,
                    }}>
                    Add New Employee
                  </Text>
                </TouchableOpacity>
              </View>
            );
          }}
          renderItem={({ item }) => {
            if (item.user_role_id == 3)
              return (
                <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Single Employee', { id: item.id })}>
                  <View
                    style={{
                      flexDirection: 'row',
                      margin: wp(3),
                      padding: wp(2),
                      backgroundColor: item.id % 2 === 0 ? '#4c98a6' : '#bcd4e8',
                      elevation: 3,
                      borderRadius: 10,
                    }}>
                    <View style={{ flex: 0.5, }}>
                      <Image source={{ uri: 'https://headshots-inc.com/wp-content/uploads/2020/11/Professional-Headshot-Poses-Blog-Post.jpg' }}
                        style={{ width: wp(15), height: wp(15), borderRadius: wp(15) / 2, justifyContent: 'center', alignSelf: 'center', }}
                      />
                    </View>
                    <View style={{ flex: 1, }}>
                      <Text
                        style={{
                          fontSize: 18,
                          fontFamily: Constant.fonts.Bold,
                          alignItems: 'center',
                          alignContent: 'center',
                          marginVertical: hp(2),
                          color: item.id % 2 === 0 ? 'white' : 'black',
                        }}>
                        {item.first_name + ' ' + item.last_name}
                      </Text>
                    </View>
                    <View style={{ flex: 0.5, marginVertical: hp(3), justifyContent: 'space-around', flexDirection: 'row' }}>
                      {/* <TouchableOpacity onPress={() => onEmployeeStatus(item.id)}>
                        <AntDesign name='closecircle' size={20} color={'#E31F00B0'} />
                      </TouchableOpacity> */}
                      <Switch value={item.status == 1 ? isSwitchOn : !isSwitchOn}
                        color={Colors.secondaryColor}
                        onValueChange={() => onEmployeeStatus(item.id)}
                      />
                      <TouchableOpacity
                        onPress={() => navigation.navigate('Emp', { editBtn: true, Id: item.id, User_role: item.user_role_id, First: item.first_name, Last: item.last_name, Email: item.email, Phone: item.phone, Dob: item.dob })}>
                        <MaterialCommunityIcons name='clipboard-edit' size={20} color={'#144AFFFF'} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              );
          }}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </View>
  );
};

export default EmployeeDetailScreen;

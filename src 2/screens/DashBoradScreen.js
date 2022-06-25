import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {hp, wp} from '../utils/ResponsiveLayout';

const DashBoradScreen = ({navigation}) => {
  
  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: '#2361c4',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={require('../image/koli-bg.jpg')}
        style={{height: '39%', width: '100%'}}
      />
      <View
        style={{
          flex: 1,
          marginTop: hp(-8),
          backgroundColor: '#edf2f2',
          width: '100%',
          paddingTop: 30,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          elevation: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <TouchableOpacity activeOpacity={1} onPress={()=>alert('call1')}>
            <View
              style={{
                width: wp(35),
                height: hp(20),
                backgroundColor: 'white',
                margin: 20,
                padding: 20,
                borderRadius: 20,
                elevation: 5,
              }}>
              <Image
                source={require('../image/category.png')}
                style={{
                  width: wp(10),
                  height: hp(10),
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}
                resizeMode={'center'}
              />
              <Text
                style={{
                  justifyContent: 'center',
                  alignSelf: 'center',
                  marginTop: 5,
                  color: 'black',
                }}>
                Total Category
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('EmpDetail') }>
            <View
              style={{
                width: wp(35),
                height: hp(20),
                backgroundColor: 'white',
                margin: 20,
                padding: 20,
                borderRadius: 20,
                elevation: 5,
              }}>
              <Image
                source={require('../image/empl.png')}
                style={{
                  width: wp(10),
                  height: hp(10),
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}
                resizeMode={'center'}
              />
              <Text
                style={{
                  justifyContent: 'center',
                  alignSelf: 'center',
                  marginTop: 5,
                  color: 'black',
                }}>
                Total Employee
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <TouchableOpacity activeOpacity={1} onPress={()=>alert('call3')}>
            <View
              style={{
                width: wp(35),
                height: hp(20),
                backgroundColor: 'white',
                margin: 20,
                padding: 20,
                borderRadius: 20,
                elevation: 5,
              }}>
              <Image
                source={require('../image/com.png')}
                style={{
                  width: wp(10),
                  height: hp(10),
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}
                resizeMode={'center'}
              />
              <Text
                style={{
                  justifyContent: 'center',
                  alignSelf: 'center',
                  marginTop: 5,
                  color: 'black',
                }}>
                Total Combo
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1} onPress={()=>alert('call4')}>
            <View
              style={{
                width: wp(35),
                height: hp(20),
                backgroundColor: 'white',
                margin: 20,
                padding: 20,
                borderRadius: 20,
                elevation: 5,
              }}>
              <Image
                source={require('../image/Inv.png')}
                style={{
                  width: wp(10),
                  height: hp(10),
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}
                resizeMode={'center'}
              />
              <Text
                style={{
                  justifyContent: 'center',
                  alignSelf: 'center',
                  marginTop: 5,
                  color: 'black',
                }}>
                Total Inventory
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DashBoradScreen;

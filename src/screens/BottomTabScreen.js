import { View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HeaderComponent from '../components/HeaderComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DashBoradScreen from './DashBoradScreen';
import { Colors } from '../utils/Colors';
import { AuthContext } from '../../context';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogoutData } from '../redux/actions/LoginAction';
import EmployeeDetailScreen from './EmployeeDetailScreen';
import EmployeeRegisterScreen from './EmployeeRegisterScreen';
import ChangePasswordScreen from './ChangePasswordScreen';
import singleEmployee from './singleEmployee';
import categoryStock from './categoryStock';
import productScreen from './productScreen';
import productList from './productList';
import { hp, wp } from '../utils/ResponsiveLayout';

const DashboradStack = createStackNavigator();

const BottomTabScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { signOut } = React.useContext(AuthContext);
  const users = useSelector(state => state.LoginReducers.user);

  useEffect(() => {
    dispatch(fetchLogoutData());
  }, [users]);

  return (
    <DashboradStack.Navigator>
      <DashboradStack.Screen
        name="Dashborad"
        component={DashBoradScreen}
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: Colors.dark1,
          },
          headerBackVisible: false,
          headerTintColor: Colors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <HeaderComponent
              Icon={Ionicons}
              name="login"
              size={25}
              color={Colors.white}
              style={{ marginRight: 15 }}
              onPress={() => {
                signOut(users);
              }}
            />
          ),
        }}
      />

      <DashboradStack.Screen
        name="EmpDetail"
        component={EmployeeDetailScreen}
        options={{
          title: 'Employee Details',
          headerStyle: {
            backgroundColor: Colors.dark1,
            // height: hp(18),
            // borderBottomLeftRadius:75
          },
          headerBackVisible: false,
          headerTintColor: Colors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      <DashboradStack.Screen
        name="Emp"
        component={EmployeeRegisterScreen}
        options={{
          title: 'Register Employee',
          headerStyle: {
            backgroundColor: Colors.dark1,
            // height: hp(18),
            // borderBottomLeftRadius:75
          },
          headerBackVisible: false,
          headerTintColor: Colors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
          },

        }}

      />

      <DashboradStack.Screen
        name="Change Password"
        component={ChangePasswordScreen}
        options={{
          title: 'Change Password',
          headerStyle: {
            backgroundColor: Colors.dark1,
            // height: hp(18),
            // borderBottomLeftRadius:75
          },
          headerBackVisible: false,
          headerTintColor: Colors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <DashboradStack.Screen
        name="Single Employee"
        component={singleEmployee}
        options={{
          title: 'Single Employee',
          headerStyle: {
            backgroundColor: Colors.dark1,
            // height: hp(18),
            // borderBottomLeftRadius:75
          },
          headerBackVisible: false,
          headerTintColor: Colors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      <DashboradStack.Screen
        name="stock"
        component={categoryStock}
        options={{
          title: 'Stock',
          headerStyle: {
            backgroundColor: Colors.dark1,
          },
          headerBackVisible: false,
          headerTintColor: Colors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      {/* <DashboradStack.Screen
        name="proList"
        component={productList}
        options={{
          title: 'Product List',
          headerStyle: {
            backgroundColor: Colors.dark1,
          },
          headerBackVisible: false,
          headerTintColor: Colors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('product')}>
              <Ionicons name='add-circle' size={30} color={'white'} style={{ marginHorizontal: wp(5) }} />
            </TouchableOpacity>
          )
        }}

      />
      <DashboradStack.Screen
        name="product"
        component={productScreen}
        options={{
          title: 'Product',
          headerStyle: {
            backgroundColor: Colors.dark1,
          },
          headerBackVisible: false,
          headerTintColor: Colors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      /> */}
    </DashboradStack.Navigator>
  );
};

export default BottomTabScreen;

import React,{useEffect} from 'react';
import { ActivityIndicator } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from '../screens/LoginScreen';
import DashBoradScreen from '../screens/DashBoradScreen';
import ForgetPasswordScreen from '../screens/ForgetPasswordScreen';

const AppDrawer = createDrawerNavigator();
const AppDrawerScreen = () => (
  <AppDrawer.Navigator drawerPosition="right">
    <AppDrawer.Screen
      name="DashBorad"
      component={DashBoradScreen}
      options={{ drawerLabel: 'Home' }}
    />
  </AppDrawer.Navigator>
);

const AuthStack = createNativeStackNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Login" component={LoginScreen} />
    <AuthStack.Screen name="Forget" component={ForgetPasswordScreen} />
  </AuthStack.Navigator>
);

const Main = () => {
  const [isLoading, setIsLoading] =useState(true);
  const [user, setUser] =useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading);
      setUser({});
    }, 500);
  }, []);

  return (
    <NavigationContainer>
    {isLoading ? (
     <ActivityIndicator size={'large'} color={'red'} />
    ) : user ? (
      <AppDrawerScreen />
    ) : (
      <AuthStackScreen />
    )}
  </NavigationContainer>
  );
};

export default Main;





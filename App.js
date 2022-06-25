import React, {useEffect, useState} from 'react';
import {Text, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CategoryScreen from './src/screens/CategoryScreen';
import ChangePasswordScreen from './src/screens/ChangePasswordScreen';
import DashBoradScreen from './src/screens/DashBoradScreen';
import ForgetPasswordScreen from './src/screens/ForgetPasswordScreen';
import LoginScreen from './src/screens/LoginScreen';
import menuList from './src/screens/menuList';
import {AuthContext} from './context';
import Splash from './src/screens/Splash';
import HeaderComponent from './src/components/HeaderComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Colors} from './src/utils/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AddCategoryScreen from './src/screens/AddCategoryScreen';
import BottomTabScreen from './src/screens/BottomTabScreen';
import store from './store';
import {Provider} from 'react-redux';

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="Login"
      component={LoginScreen}
      options={{headerShown: false}}
    />
    <AuthStack.Screen
      name="ForgetPassword"
      component={ForgetPasswordScreen}
      options={{headerShown: false}}
    />
  </AuthStack.Navigator>
);

const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const SearchStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Menu"
      component={menuList}
      options={{
        title: 'Menu',
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
  </HomeStack.Navigator>
);

const SearchStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen
      name="Category"
      component={CategoryScreen}
      options={{
        title: 'Category List',
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

    <SearchStack.Screen
      name="Add"
      component={AddCategoryScreen}
      options={{
        title: 'Add Category',
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
  </SearchStack.Navigator>
);

const TabsScreen = () => (
  <Tabs.Navigator
    tabBarOptions={{
      activeTintColor: '#fff',
      inactiveTintColor: 'gray',
      activeBackgroundColor: '#6da7f7',
      inactiveBackgroundColor: Colors.darkblue,
      labelStyle: {
        // color:'white',
        fontSize: 13,
      },
    }}>
    <Tabs.Screen
      name="Home"
      component={BottomTabScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#009387',
        tabBarIcon: ({color}) => (
          <Ionicons name="home" color={color} size={26} />
        ),
      }}
    />
    <Tabs.Screen
      name="Category"
      component={SearchStackScreen}
      options={{
        tabBarLabel: 'Category',
        tabBarColor: '#009387',
        tabBarIcon: ({color}) => (
          <MaterialIcons name="category" color={color} size={26} />
        ),
      }}
    />
    <Tabs.Screen
      name="Menu"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Menu',
        tabBarColor: '#009387',
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name="dots-horizontal-circle" color={color} size={26} />
        ),
      }}
    />
  </Tabs.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = ({userToken}) => (
  <RootStack.Navigator headerMode="none">
    {userToken ? (
      <RootStack.Screen
        name="App"
        component={TabsScreen}
        options={{
          animationEnabled: false,
        }}
      />
    ) : (
      <RootStack.Screen
        name="Auth"
        component={AuthStackScreen}
        options={{
          animationEnabled: false,
        }}
      />
    )}
  </RootStack.Navigator>
);

export default () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);
  //console.log('auth', authContext);
  const authContext = React.useMemo(() => {
    return {
      signIn: users => {
        const token = users;
        setIsLoading(false);
        AsyncStorage.setItem('userToken', token).then(value => {
          setUserToken(token);
          //console.log(token);
        });
      },
      signOut: () => {
        // setUserToken(null);
        try {
          setIsLoading(false);
          AsyncStorage.removeItem('userToken').then(value => {
            setUserToken(null);
          });
        } catch (e) {
          //console.log(e);
        }
      },
    };
  }, []);

  useEffect(() => {
    setIsLoading(false);
    //console.log('auth', authContext);
    setTimeout(() => {
      AsyncStorage.getItem('userToken').then(value => {
        if (value) {
          setUserToken(value);
         // console.log('auth ::::', authContext);
        }
      });
    }, 1000);
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <Provider store={store}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          <RootStackScreen userToken={userToken} />
        </NavigationContainer>
      </AuthContext.Provider>
    </Provider>
  );
};

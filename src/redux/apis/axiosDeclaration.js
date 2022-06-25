// import defaultAxios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// var token = {}
// AsyncStorage.getItem('userToken').then(value => {
//   console.log('value ::', value);
// });

// const axios = defaultAxios.create({
//   baseURL: 'http://192.168.1.15:9090/api/',
//   headers: {
//     'Authorization': `Bearer ${token}`,
//     'Content-Type': 'application/json',
//   },
// });

// export default axios;
// For GET requests
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const request = axios;

const baseUrl = 'http://192.168.0.110:9090/api';
request.interceptors.request.use(
  async req => {
    if (!req.baseURL) {
      request.defaults.baseURL = baseUrl;
      req.baseURL = baseUrl;
    }
    if (!req.headers.Authorization) {
      const token = await AsyncStorage.getItem('userToken');
      //console.log('token ?', token);
     //if (token) {
        // request.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        // req.headers={Authorization : `Bearer ${token}` }
        // request.defaults.headers.common.Authorization = `Bearer ${token}`;
      //  console.log('token set');
        // headers: {
        //   Authorization: `Bearer ${tempToken}`,
        // },
     // }
    }
  //  console.log('request : ===> ', req);
    return req;
  },
  err => {
    console.log('Err >>> :::', err);
    return Promise.reject(err);
  },
);

// For POST requests
request.interceptors.response.use(
  async response => {
    if (!response.baseURL) {
      request.defaults.baseURL = baseUrl;
      response.baseURL = baseUrl;
    }
    if (!response.headers.Authorization) {
      const token = await AsyncStorage.getItem('userToken');
      // console.log('token ~~~~', token);
      if (token) {
        //  request.defaults.headers.common.Authorization = `Bearer ${token}`;
        //response.headers={Authorization : `Bearer ${token}` }
        console.log('token set p');
      }
    }
    // console.log('response ===> ', response);
    return response;
  },
  err => {
    console.log('Error --->', err);

    return Promise.reject(err);
  },
);
export default request;



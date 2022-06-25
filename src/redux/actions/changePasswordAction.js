import {types} from '../actions/type';

export const fetchRequestChangePassword = data => {
  console.log('fetchRequestChangePassword ----------', data);
  return {
    type: types.SEND_REQUEST_CHANGE_PASSWORD,
    payload: data,
  };
};

export const fetchRequestChangePasswordSuccess = data => {
  console.log('fetchRequestChangePasswordSuccess ----------', data);
  return {
    type: types.SEND_REQUEST_CHANGE_PASSWORD_SUCCESS,
    payload: data,
  };
};

export const fetchRequestChangePasswordFailure = error => {
  console.log('fetchRequestChangePasswordSuccess ----------', error);
  return {
    type: types.SEND_REQUEST_CHANGE_PASSWORD_FAILURE,
    payload: {},
    error: error,
  };
};
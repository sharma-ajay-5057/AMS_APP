import { types } from '../actions/type';

const initialState = {
  user: null,
  error: false,
  loading: false,
  message: ''
};

const LoginReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SEND_REQUEST_LOGIN:
      return {
        ...state,
        loading: true,
        message: '',
        error: false
      };
    case types.SEND_LOGIN_RESET:
      return {
        ...initialState
      };
    case types.SEND_REQUEST_LOGIN_SUCCESS:
      //console.log('state--->', JSON.stringify(state));
      console.log('payload :::=====>', payload);
      return {
        ...state,
        user: payload,
        loading: false
      };
    case types.SEND_REQUEST_LOGIN_FAILURE:
      console.log('payload', payload);
      return {
        ...state,
        user: payload,
        error: true,
        loading: false,
        message: payload.data.message
      };
    case types.SEND_REQUEST_LOGOUT:
      return {
        ...state,
      };

    case types.SEND_REQUEST_LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
      };
    case types.SEND_REQUEST_LOGOUT_FAILURE:
      return {
        ...state,
        user: null,
        error: payload,
      };
    default:
      return state;
  }
};

export default LoginReducers;

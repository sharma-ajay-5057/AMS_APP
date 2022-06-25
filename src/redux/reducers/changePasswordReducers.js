import { types } from '../actions/type';

const initialState = {
  data: null,

};
const changePasswordReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SEND_REQUEST_CHANGE_PASSWORD:
      return {
        ...state,

      };

    case types.SEND_REQUEST_CHANGE_PASSWORD_SUCCESS:
      console.log('change pass ------', payload);
      return {
        ...state,
        data: payload,
      };
    case types.SEND_REQUEST_CHANGE_PASSWORD_FAILURE:
      return {
        ...state,
        data: payload,
      };
    default:
      return state;
  }
};

export default changePasswordReducers;

import {types} from '../actions/type';

const initialState = {
  updatdata: [],
  error: {},
};

const updateCategoryReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case types.SEND_REQUEST_UPDATE_CATEGORY:
      return {
        ...state,
      };
    case types.SEND_REQUEST_UPDATE_CATEGORY_SUCCESS:
        console.log('update data ~~~~',payload);
      return {
        ...state,
        updatdata: payload,
      };
    case types.SEND_REQUEST_UPDATE_CATEGORY_FAILURE:
      return {
        ...state,
        updatdata: {},
        error: payload,
      };
    default:
      return state;
  }
};

export default updateCategoryReducer;

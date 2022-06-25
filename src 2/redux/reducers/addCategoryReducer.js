import {types} from '../actions/type';

const initialState = {
  addData: [],
  error: {},
};

const addCategoryReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case types.SEND_REQUEST_ADD_CATEGORY:
      return {
        ...state,
      };
    case types.SEND_REQUEST_ADD_CATEGORY_SUCCESS:
      //console.log("add category ------>", payload);
      return {
        ...state,
        addData: payload,
      };
    case types.SEND_REQUEST_ADD_CATEGORY_FAILURE:
      return {
        ...state,
        addData: {},
        error: payload,
      };
    default:
      return state;
  }
};

export default addCategoryReducer;

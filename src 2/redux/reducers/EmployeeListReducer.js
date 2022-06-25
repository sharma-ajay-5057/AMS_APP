import {types} from '../actions/type';

const initialState = {
  empdata: [],
  loading: false,
  error: {},
};

const EmployeeListReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case types.GET_EMPLOYEE_DATA:
      return {
        ...state,
        loading: true,
      };
    case types.GET_EMPLOYEE_DATA_SUCCESS:
      return {
        ...state,
        empdata: payload,
        loading: false,
      };
    case types.GET_EMPLOYEE_DATA_FAILURE:
      return {
        ...state,
        empdata: {},
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default EmployeeListReducer;

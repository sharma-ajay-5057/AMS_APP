import {types} from '../actions/type';

export const fetchRequestEmployeeData = empdata => {
  return {
    type: types.GET_EMPLOYEE_DATA,
    payload: empdata,
  };
};

export const fetchRequestEmployeeDataSuccess = empdata => {
  return {
    type: types.GET_EMPLOYEE_DATA_SUCCESS,
    payload: empdata,
  };
};

export const fetchRequestEmployeeDataFailure = error => {
  return {
    type: types.GET_EMPLOYEE_DATA_FAILURE,
    payload: {},
    error: error,
  };
};

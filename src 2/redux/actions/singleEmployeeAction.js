import {types} from '../actions/type';

export const fetchSingleEmployeeData = single_data => {
  return {
    type: types.GET_SINGLE_EMPLOYEE_DATA,
    payload: single_data,
  };
};

export const fetchSingleEmployeeDataSuccess = single_data => {
  return {
    type: types.GET_SINGLE_EMPLOYEE_DATA_SUCCESS,
    payload: single_data,
  };
};

export const fetchSingleEmployeeDataFailure = error => {
  return {
    type: types.GET_SINGLE_EMPLOYEE_DATA_FAILURE,
    payload: error,
    error: error,
  };
};

import { types } from './type';

export const fetchEmployeeStatus = (emp_status) => {
    return {
        type: types.SEND_REQUEST_EMPLOYEE_STATUS,
        payload: emp_status
    }
}

export const fetchEmployeeStatusSuccess = (emp_status) => {
    return {
        type: types.SEND_REQUEST_EMPLOYEE_STATUS_SUCCESS,
        payload: emp_status
    }
}

export const fetchEmployeeStatusFailure = (error) => {
    return {
        type: types.SEND_REQUEST_EMPLOYEE_STATUS_FAILURE,
        payload: {},
        error:error
    }
}

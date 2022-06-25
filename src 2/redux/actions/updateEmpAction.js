import { types } from './type';

export const fetchUpdateEmployee = (update_emp) => {
    return {
        type: types.SEND_REQUEST_UPDATE_EMPLOYEE,
        payload: update_emp
    }
}

export const fetchUpdateEmployeeSuccess = (update_emp) => {
    return {
        type: types.SEND_REQUEST_UPDATE_EMPLOYEE_SUCCESS,
        payload: update_emp
    }
}

export const fetchUpdateEmployeeFailure = (error) => {
    return {
        type: types.SEND_REQUEST_UPDATE_EMPLOYEE_FAILURE,
        payload: {},
        error:error
    }
}


export const resetEmployee = ()=>{
    return{
        type:types.SEND_EMPLOYEE_RESET,
    }
}

import { types } from '../actions/type';

const initialState = {
    emp_status: null,
    error: {},
};

const employeeStatusReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.SEND_REQUEST_EMPLOYEE_STATUS:
            return {
                ...state,
            };
        case types.SEND_REQUEST_EMPLOYEE_STATUS_SUCCESS:
            return {
                ...state,
                emp_status: payload,
            };
        case types.SEND_REQUEST_EMPLOYEE_STATUS_FAILURE:
            return {
                ...state,
                emp_status: payload,
                error: payload,
            };
        default:
            return state;
    }
};

export default employeeStatusReducer;

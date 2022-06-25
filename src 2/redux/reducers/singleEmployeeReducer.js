import { types } from '../actions/type';

const initialState = {
    single_data: null,
    error: {},
};

const singleEmployeeReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.GET_SINGLE_EMPLOYEE_DATA:
            return {
                ...state,
            };
        case types.GET_SINGLE_EMPLOYEE_DATA_SUCCESS:
            return {
                ...state,
                single_data: payload,
            };
        case types.GET_SINGLE_EMPLOYEE_DATA_FAILURE:
            return {
                ...state,
                single_data:{},
                error: payload,
            };
        default:
            return state;
    }
};

export default singleEmployeeReducer;

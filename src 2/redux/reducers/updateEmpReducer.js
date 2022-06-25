import { types } from '../actions/type'

const initialState = {
    update_emp: [],
    error: ''
}

const updateEmpReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.SEND_REQUEST_UPDATE_EMPLOYEE:
            return {
                ...state
            }
        case types.SEND_EMPLOYEE_RESET:
            return {
                ...initialState
            }
        case types.SEND_REQUEST_UPDATE_EMPLOYEE_SUCCESS:
            return {
                ...state,
                update_emp: payload
            }
        case types.SEND_REQUEST_UPDATE_EMPLOYEE_FAILURE:
            return {
                ...state,
                update_emp: payload,
                error: payload
            }
        default:
            return state;
    }
}

export default updateEmpReducer;
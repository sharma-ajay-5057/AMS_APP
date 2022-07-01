import { types } from "../actions/type";

const initialState = {
    allocation_status: [],
};

const allocationStatusReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.SEND_ALLOCATION_STATUS:
            return {
                ...state,
            };
        case types.SEND_ALLOCATION_STATUS_SUCCESS:
            return {
                ...state,
                allocation_status: payload,
            };
        case types.SEND_ALLOCATION_STATUS_FAILURE:
            return {
                ...state,
                allocation_status: {},
                error: payload,
            };
        default:
            return state;
    }
}

export default allocationStatusReducer;
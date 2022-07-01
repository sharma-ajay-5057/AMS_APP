import {types} from '../actions/type';

const initialState = {
    allocation_add: [],
};

const allocationAddReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.SEND_ALLOCATION_ADD_DATA:
            return {
                ...state,
            };
        case types.SEND_ALLOCATION_ADD_DATA_SUCCESS:
            return {
                ...state,
                allocation_add: payload.data,
            };
        case types.SEND_ALLOCATION_ADD_DATA_FAILURE:
            return {
                ...state,
                allocation_add: {},
                error: payload,
            };
        default:
            return state;
    }
}
export default allocationAddReducer;
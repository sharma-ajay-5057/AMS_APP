import {types} from '../actions/type';

export const addAllocationData = (allocation_add) => {
    return {
        type: types.SEND_ALLOCATION_ADD_DATA,
        payload: allocation_add,
    };
}

export const addAllocationDataSuccess = (allocation_add) => {
    return {
        type: types.SEND_ALLOCATION_ADD_DATA_SUCCESS,
        payload: allocation_add,
    };
}

export const addAllocationDataFailure = (error) => {
    return {
        type: types.SEND_ALLOCATION_ADD_DATA_FAILURE,
        payload: {},
        error: error,
    };
}
import {types} from './type';

export const  getAllocationData = (allocation_data) => {
    return {
        type: types.GET_ALLOCATION_LIST,
        payload: allocation_data,
    };
}
export const  getAllocationDataSuccess = (allocation_data) => {
    return {
        type: types.GET_ALLOCATION_LIST_SUCCESS,
        payload: allocation_data,
    };
}
export const  getAllocationDataFailure = (error) => {
    return {
        type: types.GET_ALLOCATION_LIST_FAILURE,
        payload: {},
        error: error,
    };
}



import { types } from '../actions/type'

export const fetchGetProductData = (pro_data) => {
    return {
        type: types.GET_PRODUCT_LIST,
        payload: pro_data,
    };
};

export const fetchGetProductDataSuccess = (pro_data) => {
    return {
        type: types.GET_PRODUCT_LIST_SUCCESS,
        payload: pro_data,
    };
};

export const fetchGetProductDataFailure = (error) => {
    return {
        type: types.GET_PRODUCT_LIST_FAILURE,
        payload: {},
        error: error,
    };
};
import { types } from '../actions/type'

export const fetchGetProductData = (pro_data) => {
    console.log('getProductData -----------', pro_data);
    return {
        type: types.GET_PRODUCT_LIST,
        payload: pro_data,
    };
};

export const fetchGetProductDataSuccess = (pro_data) => {
    console.log('getProductDataSuccess -----------', pro_data);
    return {
        type: types.GET_PRODUCT_LIST_SUCCESS,
        payload: pro_data,
    };
};

export const fetchGetProductDataFailure = (error) => {
    console.log('getProductDataFailure -----------', pro_data);
    return {
        type: types.GET_PRODUCT_LIST_FAILURE,
        payload: {},
        error: error,
    };
};
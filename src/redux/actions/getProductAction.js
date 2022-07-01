import { types } from "./type";

export const fetchProductData = (product_data) => {
  return {
    type: types.GET_PRODUCT_DATA,
    payload: product_data,
  };
};
export const fetchProductDataSuccess = (product_data) => {
  return {
    type: types.GET_PRODUCT_DATA_SUCCESS,
    payload: product_data,
  };
};
export const fetchProductDataFailure = (error) => {
  return {
    type: types.GET_PRODUCT_DATA_FAILURE,
    payload: {},
    error: error,
  };
};
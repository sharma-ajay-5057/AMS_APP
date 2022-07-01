import { types } from "./type";

export const productStatusFunction = (product_status) => {
    console.log('productStatusAction -----------', product_status);
  return {
    type: types.SEND_REQUEST_PRODUCT_STATUS,
    payload: product_status,
  };
};

export const productStatusSuccess = (product_status) => {
    console.log('productStatusSuccess -----------', product_status);
  return {
    type: types.SEND_REQUEST_PRODUCT_STATUS_SUCCESS,
    payload: product_status,
  };
};

export const productStatusFailure = (error) => {
  return {
    type: types.SEND_REQUEST_PRODUCT_STATUS_FAILURE,
    payload: {},
    error: error,
  };
};

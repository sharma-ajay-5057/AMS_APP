import { types } from "./type";

export const updateProductDataFunction = (product) => {
  return {
    type: types.SEND_REQUEST_UPDATE_PRODUCT,
    payload: product,
  };
};

export const updateProductSuccess = (product) => {
  return {
    type: types.SEND_REQUEST_UPDATE_PRODUCT_SUCCESS,
    payload: product,
  };
};

export const updateProductFailure = (error) => {
  return {
    type: types.SEND_REQUEST_UPDATE_PRODUCT_FAILURE,
    payload: {},
    error: error,
  };
};

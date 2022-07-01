import { types } from "../actions/type";

export const addProduct = (addData) => {
  //console.log('addCategoryData ~~~~~~~~~~~~~~', addData)
  return {
    type: types.SEND_REQUEST_ADD_PRODUCT,
    payload: addData,
  };
};
export const addProductSuccess = (addData) => {
  //console.log('addCategoryDataSuccess ~~~~~~~~~~~~~~', addData)

  return {
    type: types.SEND_REQUEST_ADD_PRODUCT_SUCCESS,
    payload: addData,
  };
};
export const addProductFailure = (error) => {
  // console.log('addCategoryDataFailure ~~~~~~~~~~~~~~', error)
  return {
    type: types.SEND_REQUEST_ADD_PRODUCT_FAILURE,
    payload: {},
    error: error,
  };
};

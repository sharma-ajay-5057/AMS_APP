import {types} from '../actions/type';

export const addCategoryData = addData => {
  //console.log('addCategoryData ~~~~~~~~~~~~~~', addData)
  return {
    type: types.SEND_REQUEST_ADD_CATEGORY,
    payload: addData,
  };
};

export const addCategoryDataSuccess = addData => {
  //console.log('addCategoryDataSuccess ~~~~~~~~~~~~~~', addData)

  return {
    type: types.SEND_REQUEST_ADD_CATEGORY_SUCCESS,
    payload: addData,
  };
};

export const addCategoryDataFailure = error => {
 // console.log('addCategoryDataFailure ~~~~~~~~~~~~~~', error)
  return {
    type: types.SEND_REQUEST_ADD_CATEGORY_FAILURE,
    payload: {},
    error: error,
  };
};

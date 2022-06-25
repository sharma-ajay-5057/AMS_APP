import {types} from './type';

export const updateCategoryData = (updatData) => {
  console.log('updateCategoryData -----------', updatData);
  return {
    type: types.SEND_REQUEST_UPDATE_CATEGORY,
    payload: updatData,
  };
};

export const updateCategoryDataSuccess = updatData => {
  console.log('updateCategoryDataSuccess -----------', updatData);
  return {
    type: types.SEND_REQUEST_UPDATE_CATEGORY_SUCCESS,
    payload: updatData,
  };
};


export const updateCategoryDataFailure = error => {
  console.log('updateCategoryDataFailure -----------', error);
  return {
    type: types.SEND_REQUEST_UPDATE_CATEGORY_FAILURE,
    payload: {},
    error: error,
  };
};

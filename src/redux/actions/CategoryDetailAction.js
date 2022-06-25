import {types} from '../actions/type';

export const fetchRequestCategoryDetail = catlist => {
 // console.log('fetchRequestCategoryDetail------------------', catlist);

  return {
    type: types.GET_REQUEST_CATEGORY,
    payload: catlist,
  };
};

export const fetchRequestCategoryDetailSuccess = catlist => {
 // console.log('fetchRequestCategoryDetailSuccess------------------', catlist);
  return {
    type: types.GET_REQUEST_CATEGORY_SUCCESS,
    payload: catlist,
  };
};

export const fetchRequestCategoryDetailFailure = error => {
 // console.log('fetchRequestCategoryDetailFailure------------------', error);
  return {
    type: types.GET_REQUEST_CATEGORY_FAILURE,
    payload: {},
    error: error,
  };
};

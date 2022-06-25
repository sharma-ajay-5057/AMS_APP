import {types} from '../actions/type'


export const deleteCategoryData = (d_list) =>{
    console.log('deleteCategoryData ~~~~~~~~~~~~~~~~~~', d_list);
    return{
        type:types.SEND_REQUEST_DELETE_CATEGORY,
        payload:d_list
    }
}

export const deleteCategoryDataSuccess = (d_list) =>{
    console.log('deleteCategoryDataSuccess ~~~~~~~~~~~~~~~~~~', d_list);
     return{
         type:types.SEND_REQUEST_DELETE_CATEGORY_SUCCESS,
         payload:d_list
     }
}

export const deleteCategoryDataFailure = (error) =>{
    console.log('deleteCategoryDataFailure ~~~~~~~~~~~~~~~~~~', error);
    return{
        type:types.SEND_REQUEST_DELETE_CATEGORY_FAILURE,
        payload:{},
        error:error
    }
}
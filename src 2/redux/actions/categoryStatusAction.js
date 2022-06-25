import { types } from './type'


export const fetchCategoryStatus = (cat_status) => {
        return{
            type:types.SEND_REQUEST_CATEGORY_STATUS,
            payload:cat_status
        }
}

export const fetchCategoryStatusSuccess = (cat_status) => {
    return{
        type:types.SEND_REQUEST_CATEGORY_STATUS_SUCCESS,
        payload:cat_status
    }
}

export const fetchCategoryStatusFailure = (error) => {
    return{
        type:types.SEND_REQUEST_CATEGORY_STATUS_FAILURE,
        payload:{},
        error:error
    }
}
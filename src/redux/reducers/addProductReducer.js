import {types} from '../actions/type';

const initialState = {
    addProductData: [],
    error: {},
}

const addProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SEND_REQUEST_ADD_PRODUCT:
            console.log('addProductData ~~~~~~~~~~~~~~', action.payload)
            return {
                ...state,
                addProductData: action.payload,
            };
        case types.SEND_REQUEST_ADD_PRODUCT_SUCCESS:
            console.log('addProductDataSuccess ~~~~~~~~~~~~~~', action.payload)
            return {
                ...state,
                addProductData: action.payload.data,
            };
        case types.SEND_REQUEST_ADD_PRODUCT_FAILURE:
            console.log('addProductDataFailure ~~~~~~~~~~~~~~', action.payload)
            return {
                ...state,
                error: action.error,
            };
        default:
            return state;
    }
}

export default addProductReducer;
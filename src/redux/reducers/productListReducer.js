import { types } from '../actions/type';

const initialState = {
    pro_data: null,
    error: ''
}

const productListReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.GET_PRODUCT_LIST:
            return {
                ...state
            }
        case types.GET_PRODUCT_LIST_SUCCESS:
            return {
                ...state,
                pro_data: payload
            }
        case types.GET_PRODUCT_LIST_FAILURE:
            return {
                ...state,
                pro_data: {},
                error: payload
            }
        default:
            return state;
    }
}

export default productListReducer;

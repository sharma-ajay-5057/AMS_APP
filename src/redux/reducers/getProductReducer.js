import { types } from "../actions/type";

const initialState = {
    productData: [],
    error: {},
}

const getProductReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.GET_PRODUCT_DATA:
            return {
                ...state,
            };
        case types.GET_PRODUCT_DATA_SUCCESS:
            return {
                ...state,
                productData: payload.data,
            };
        case types.GET_PRODUCT_DATA_FAILURE:
            return {
                ...state,
                error: payload,
            };
        default:
            return state;
    }
}

export default getProductReducer;
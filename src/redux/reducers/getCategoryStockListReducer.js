import { types } from '../actions/type'

const initialState = {
    cat_stock: null,
    error: ''
}

const getCategoryStockListReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.GET_REQUEST_CATEGORY_STOCK_LIST:
            return {
                ...state
            }
        case types.GET_REQUEST_CATEGORY_STOCK_LIST_SUCCESS:
            return {
                ...state,
                cat_stock: payload
            }
        case types.GET_REQUEST_CATEGORY_STOCK_LIST_FAILURE:
            return {
                ...state,
                cat_stock: {},
                error: payload
            }
        default: {
            return state
        }
    }
}
export default getCategoryStockListReducer;
import { types } from './type'

export const fetchCategoryStocklist = (cat_stock) => {
    return {
        type: types.GET_REQUEST_CATEGORY_STOCK_LIST,
        payload: cat_stock
    };
}

export const fetchCategoryStocklistSuccess = (cat_stock) => {
    return {
        type: types.GET_REQUEST_CATEGORY_STOCK_LIST_SUCCESS,
        payload: cat_stock
    }
}

export const fetchCategoryStocklistFailure = (error) => {
    return {
        type: types.GET_REQUEST_CATEGORY_STOCK_LIST_FAILURE,
        payload: {},
        error: error
    }
}
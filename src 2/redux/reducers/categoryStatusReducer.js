import { types } from '../actions/type'

const initialState = {
    cat_status: null,
    error: {}
}

export const categoryStatusReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.SEND_REQUEST_CATEGORY_STATUS:
            return {
                ...state
            }
        case types.SEND_REQUEST_CATEGORY_STATUS_SUCCESS:
            return {
                ...state,
                cat_status: payload
            }
        case types.SEND_REQUEST_CATEGORY_STATUS_FAILURE:
            return {
                ...state,
                cat_status: payload,
                error: payload
            }
        default:
            return state
    }
}

export default categoryStatusReducer;
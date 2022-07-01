import { types } from "../actions/type";

const initialState = {
  product_status: null,
  error: {},
};

const productStatusReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SEND_REQUEST_PRODUCT_STATUS:
      return {
        ...state,
      };
    case types.SEND_REQUEST_PRODUCT_STATUS_SUCCESS:
        console.log(" product status data ??", payload.data.message);
      return {
        ...state,
        product_status: payload,
      };
    case types.SEND_REQUEST_PRODUCT_STATUS_FAILURE:
      return {
        ...state,
        product_status: payload,
        error: payload,
      };
    default:
      return state;
  }
};
export default productStatusReducer;

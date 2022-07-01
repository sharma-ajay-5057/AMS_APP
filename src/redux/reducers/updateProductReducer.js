import { types } from "../actions/type";

const initialState = {
    product: [],
};

const updateProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SEND_REQUEST_UPDATE_PRODUCT:
      return {
        ...state,
      };
    case types.SEND_REQUEST_UPDATE_PRODUCT_SUCCESS:
      console.log(" prod update data ~~~~", payload);
      return {
        ...state,
        product: payload,
      };
    case types.SEND_REQUEST_UPDATE_PRODUCT_FAILURE:
      return {
        ...state,
        product: {},
        error: payload,
      };
    default:
      return state;
  }
};

export default updateProductReducer;

import { types } from "../actions/type";

const initialState = {
  allocation_data: [],
};

const allocationListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_ALLOCATION_LIST:
      return {
        ...state,
      };
    case types.GET_ALLOCATION_LIST_SUCCESS:
      return {
        ...state,
        allocation_data: payload,
      };
    case types.GET_ALLOCATION_LIST_FAILURE:
      return {
        ...state,
        allocation_data: {},
        error: payload,
      };
    default:
      return state;
  }
};

export default allocationListReducer;

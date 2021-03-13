import { SET_SORT_BY } from "../action/filtersActions";
import { SET_CATEGORY } from "../action/filtersActions";

const initialState = {
  category: null,
  sortBy: "popular",
};

export const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SORT_BY: {
      return { ...state, sortBy: action.payload };
    }

    case SET_CATEGORY: {
      return { ...state, category: action.payload };
    }
    default:
      return state;
  }
};

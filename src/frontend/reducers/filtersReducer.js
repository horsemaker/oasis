import { filtersInitialState } from "../contexts/filters-context";
import {
  CATEGORY,
  CLEAR_FILTERS,
  RATING,
  SORT_BY,
} from "./../constants/filtersConstants";

export const filtersReducer = (state, action) => {
  switch (action.type) {
    case CLEAR_FILTERS:
      return filtersInitialState;
    case SORT_BY:
      return { ...state, sortBy: action.payload };
    case RATING:
      return { ...state, rating: action.payload };
    case CATEGORY:
      const newCategories = state.categories.includes(action.payload)
        ? state.categories.filter((category) => category !== action.payload)
        : [...state.categories, action.payload];
      return { ...state, categories: newCategories };
    default:
      return state;
  }
};

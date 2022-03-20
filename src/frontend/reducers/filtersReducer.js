import { filtersInitialState } from "../contexts/filters-context";
import {
  CATEGORY,
  CLEAR_FILTERS,
  MAINTENANCE,
  MAX_PRICE,
  MIN_PRICE,
  RATING,
  SIZE,
  SORT_BY,
  SUNLIGHT,
} from "./../constants/filtersConstants";

export const filtersReducer = (state, action) => {
  switch (action.type) {
    case CLEAR_FILTERS:
      return filtersInitialState;
    case MIN_PRICE:
      return { ...state, minPrice: action.payload };
    case MAX_PRICE:
      return { ...state, maxPrice: action.payload };
    case SORT_BY:
      return { ...state, sortBy: action.payload };
    case RATING:
      return { ...state, rating: action.payload };
    case CATEGORY:
      const newCategories = state.categories.includes(action.payload)
        ? state.categories.filter((category) => category !== action.payload)
        : [...state.categories, action.payload];
      return { ...state, categories: newCategories };
    case SIZE:
      const newSizes = state.collections.size.includes(action.payload)
        ? state.collections.size.filter((size) => size !== action.payload)
        : [...state.collections.size, action.payload];
      return {
        ...state,
        collections: { ...state.collections, size: newSizes },
      };
    case SUNLIGHT:
      const newSunlights = state.collections.sunlight.includes(action.payload)
        ? state.collections.sunlight.filter(
            (sunlight) => sunlight !== action.payload
          )
        : [...state.collections.sunlight, action.payload];
      return {
        ...state,
        collections: { ...state.collections, sunlight: newSunlights },
      };
    case MAINTENANCE:
      const newMaintenances = state.collections.maintenance.includes(
        action.payload
      )
        ? state.collections.maintenance.filter(
            (maintenance) => maintenance !== action.payload
          )
        : [...state.collections.maintenance, action.payload];
      return {
        ...state,
        collections: { ...state.collections, maintenance: newMaintenances },
      };
    default:
      return state;
  }
};

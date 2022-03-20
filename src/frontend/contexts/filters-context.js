import { createContext, useContext, useReducer } from "react";
import { filtersReducer } from "../reducers";

const FiltersContext = createContext();

const filtersInitialState = {
  minPrice: 2499,
  maxPrice: 5999,
  sortBy: "",
  collections: {
    size: [],
    sunlight: [],
    maintenance: [],
  },
  categories: [],
  rating: "",
};

const FiltersProvider = ({ children }) => {
  const [filters, dispatchFilters] = useReducer(
    filtersReducer,
    filtersInitialState
  );

  return (
    <FiltersContext.Provider value={{ filters, dispatchFilters }}>
      {children}
    </FiltersContext.Provider>
  );
};

const useFilters = () => {
  const context = useContext(FiltersContext);

  if (context === undefined) {
    throw new Error("useFilters must be used within a FiltersProvider");
  }

  return context;
};

export { filtersInitialState, FiltersProvider, useFilters };

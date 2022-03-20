import React from "react";
import { useFilters } from "../../contexts";
import { FilterBox } from "../FilterBox/FilterBox";
import "./FilterCollection.css";

const FilterCollection = ({ filterCollection }) => {
  const { heading, filters } = filterCollection;
  const {
    filters: { collections },
    dispatchFilters,
  } = useFilters();

  return (
    <div className="filter">
      <p className="filter-heading">{heading}</p>
      <div className="filter-options">
        {filters.map(({ filterName, filterIcon }) => (
          <FilterBox
            key={`${heading} - ${filterName}`}
            heading={heading}
            filterName={filterName}
            filterIcon={filterIcon}
            filterChecked={collections[heading].includes(filterName)}
            filterDispatch={() =>
              dispatchFilters({
                type: heading.toUpperCase(),
                payload: filterName,
              })
            }
          />
        ))}
      </div>
    </div>
  );
};

export { FilterCollection };

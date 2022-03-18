import React from "react";
import { FilterBox } from "../FilterBox/FilterBox";
import "./FilterCollection.css";

const FilterCollection = ({ filterCollection }) => {
  const { heading, filters } = filterCollection;
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
          />
        ))}
      </div>
    </div>
  );
};

export { FilterCollection };

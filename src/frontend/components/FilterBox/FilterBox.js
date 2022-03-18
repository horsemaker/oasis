import React from "react";
import "./FilterBox.css";

const FilterBox = ({ heading, filterName, filterIcon }) => {
  return (
    <div className="filter-box">
      <input
        className="filter-checkbox-input"
        type="checkbox"
        name={`${heading}-filter`}
        id={`${heading}-filter-${filterName}`}
      />
      <label
        className="filter-checkbox-label"
        htmlFor={`${heading}-filter-${filterName}`}
      >
        <div className="filter-icon">
          <img src={filterIcon} alt={`${heading} - ${filterName}`} />
        </div>
        <small className="filter-name">{filterName}</small>
      </label>
    </div>
  );
};

export { FilterBox };

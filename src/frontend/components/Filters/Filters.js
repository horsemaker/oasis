import React, { useState, useEffect } from "react";
import { filtersData } from "../../data";
import { FilterCollection } from "../FilterCollection/FilterCollection";
import { RadioInput } from "../RadioInput/RadioInput";
import "./Filters.css";

const Filters = () => {
  const [showResponsiveFilters, setShowResponsiveFilters] = useState(false);
  const { sortBys, ratings, collections } = filtersData;

  useEffect(() => {
    const checkResponsiveFilters = () => {
      if (window.innerWidth >= 1200) {
        setShowResponsiveFilters(false);
      }
    };
    window.addEventListener("resize", checkResponsiveFilters);
  }, []);

  return (
    <>
      <div
        className="products-filter-responsive"
        onClick={() =>
          setShowResponsiveFilters(
            (showResponsiveFilters) => !showResponsiveFilters
          )
        }
      >
        <p className="filters-heading">Filter By</p>
        <span className="material-icons filter-toggle">
          {showResponsiveFilters ? "arrow_downward" : "arrow_forward"}
        </span>
      </div>
      <div
        className={
          showResponsiveFilters
            ? "products-filter show-responsive-filter"
            : "products-filter"
        }
      >
        <div className="filters-heading-section">
          <p className="filters-heading">Filter By</p>
          <button className="filters-clear">Clear All</button>
        </div>
        <div className="filter">
          <p className="filter-heading">Price</p>
          <input type="range" name="price" id="price" />
        </div>
        <div className="filter">
          <p className="filter-heading">Sort By</p>
          {sortBys.map((filterSortBy) => (
            <RadioInput
              key={filterSortBy}
              inputName="sortBys"
              inputLabel={filterSortBy}
            />
          ))}
        </div>
        {collections.map((filterCollection) => (
          <FilterCollection
            key={filterCollection.id}
            filterCollection={filterCollection}
          />
        ))}
        <div className="filter">
          <p className="filter-heading">Rating</p>
          {ratings.map((filterRating) => (
            <RadioInput
              key={filterRating}
              inputName="ratings"
              inputLabel={filterRating}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export { Filters };

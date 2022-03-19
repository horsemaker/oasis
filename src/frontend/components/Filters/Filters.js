import React, { useState, useEffect } from "react";
import { useCategories, useFilters } from "../../contexts";
import { filtersData } from "../../data";
import { FilterCollection } from "../FilterCollection/FilterCollection";
import { Input } from "../Input/Input";
import { RangeSlider } from "../RangeSlider/RangeSlider";
import "./Filters.css";
import {
  CATEGORY,
  CLEAR_FILTERS,
  RATING,
  SORT_BY,
} from "./../../constants/filtersConstants";

const Filters = () => {
  const [showResponsiveFilters, setShowResponsiveFilters] = useState(false);
  const { sortBys, ratings, collections } = filtersData;
  const { categoryNames } = useCategories();
  const { filters, dispatchFilters } = useFilters();
  const {
    // minPrice,
    // maxPrice,
    sortBy,
    // size,
    // sunlight,
    // maintenance,
    categories,
    rating,
  } = filters;

  useEffect(() => {
    const checkResponsiveFilters = () => {
      if (window.innerWidth >= 1200) {
        setShowResponsiveFilters(false);
      }
    };
    window.addEventListener("resize", checkResponsiveFilters);
  }, []);

  const clearFilters = () => dispatchFilters({ type: CLEAR_FILTERS });

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
          <button className="filters-clear" onClick={clearFilters}>
            Clear All
          </button>
        </div>
        <div className="filter">
          <p className="filter-heading">Price</p>
          <RangeSlider min={2999} max={5999} gap={500} />
        </div>
        <div className="filter">
          <p className="filter-heading">Sort By</p>
          {sortBys.list.map((filterSortBy) => (
            <Input
              key={filterSortBy}
              inputName="sortBys"
              inputLabel={filterSortBy}
              inputType={sortBys.type}
              inputState={sortBy}
              inputDispatch={dispatchFilters}
              inputActionType={SORT_BY}
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
          <p className="filter-heading">Categories</p>
          {categoryNames.map((categoryName) => (
            <Input
              key={categoryName}
              inputName="categories"
              inputLabel={categoryName}
              inputType="checkbox"
              inputState={categories}
              inputDispatch={dispatchFilters}
              inputActionType={CATEGORY}
            />
          ))}
        </div>
        <div className="filter">
          <p className="filter-heading">Rating</p>
          {ratings.list.map((filterRating) => (
            <Input
              key={filterRating}
              inputName="ratings"
              inputLabel={filterRating}
              inputType={ratings.type}
              inputState={rating}
              inputDispatch={dispatchFilters}
              inputActionType={RATING}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export { Filters };

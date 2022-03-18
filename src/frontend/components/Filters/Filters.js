import React, { useState, useEffect } from "react";
import { filterCollections } from "../../data";
import { FilterCollection } from "../FilterCollection/FilterCollection";
import "./Filters.css";

const Filters = () => {
  const [showResponsiveFilters, setShowResponsiveFilters] = useState(false);

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
        onClick={() => setShowResponsiveFilters(!showResponsiveFilters)}
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
          <div className="input-group input-radio">
            <input type="radio" name="price" id="lowToHigh" />
            <label htmlFor="lowToHigh">
              <small>Price - Low to High</small>
            </label>
          </div>
          <div className="input-group input-radio">
            <input type="radio" name="price" id="highToLow" />
            <label htmlFor="highToLow">
              <small>Price - High to Low</small>
            </label>
          </div>
        </div>
        {filterCollections.map((filterCollection) => (
          <FilterCollection
            key={filterCollection.id}
            filterCollection={filterCollection}
          />
        ))}
        <div className="filter">
          <p className="filter-heading">Rating</p>
          <div className="input-group input-radio">
            <input type="radio" name="rating" id="4stars" />
            <label htmlFor="4stars">
              <small>4 Stars &amp; above</small>
            </label>
          </div>
          <div className="input-group input-radio">
            <input type="radio" name="rating" id="3stars" />
            <label htmlFor="3stars">
              <small>3 Stars &amp; above</small>
            </label>
          </div>
          <div className="input-group input-radio">
            <input type="radio" name="rating" id="2stars" />
            <label htmlFor="2stars">
              <small>2 Stars &amp; above</small>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export { Filters };

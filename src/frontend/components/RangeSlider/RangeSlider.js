import React from "react";
import { MAX_PRICE, MIN_PRICE } from "../../constants/filtersConstants";
import { useFilters } from "../../contexts";
import "./RangeSlider.css";

const RangeSlider = ({ min, max, gap }) => {
  const {
    filters: { minPrice, maxPrice },
    dispatchFilters,
  } = useFilters();
  const minMaxDiff = max - min;

  const progressLeft = ((minPrice - min) / minMaxDiff) * 100 + "%";
  const progressRight = 100 - ((maxPrice - min) / minMaxDiff) * 100 + "%";

  return (
    <div className="slider-wrapper">
      <div className="slider-input">
        <div className="slider-field">
          <span className="slider-field-value">₹{minPrice}</span>
        </div>
        <div className="slider-field">
          <span className="slider-field-value">₹{maxPrice}</span>
        </div>
      </div>
      <div className="slider-range">
        <div
          style={{ left: progressLeft, right: progressRight }}
          className="progress"
        />
        <input
          type="range"
          name="range-min"
          id="range-min"
          className="range-min"
          min={min}
          max={max}
          step={100}
          value={minPrice}
          onChange={(e) => {
            e.target.value >= min &&
              maxPrice - e.target.value >= gap &&
              dispatchFilters({ type: MIN_PRICE, payload: e.target.value });
          }}
        />
        <input
          type="range"
          name="range-max"
          id="range-max"
          className="range-max"
          min={min}
          max={max}
          step={100}
          value={maxPrice}
          onChange={(e) => {
            e.target.value <= max &&
              e.target.value - minPrice >= gap &&
              dispatchFilters({ type: MAX_PRICE, payload: e.target.value });
          }}
        />
      </div>
      <div className="slider-labels">
        {[...Array(35).keys()].map((value) => (
          <span key={value}>|</span>
        ))}
      </div>
    </div>
  );
};

export { RangeSlider };

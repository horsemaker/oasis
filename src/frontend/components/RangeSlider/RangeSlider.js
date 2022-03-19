import React, { useState } from "react";
import "./RangeSlider.css";

const RangeSlider = ({ min, max, gap }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minMaxDiff = max - min;

  const progressLeft = ((minVal - min) / minMaxDiff) * 100 + "%";
  const progressRight = 100 - ((maxVal - min) / minMaxDiff) * 100 + "%";

  return (
    <div className="slider-wrapper">
      <div className="slider-input">
        <div className="slider-field">
          <span className="slider-field-value">₹{minVal}</span>
        </div>
        <div className="slider-field">
          <span className="slider-field-value">₹{maxVal}</span>
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
          value={minVal}
          onChange={(e) => {
            e.target.value >= min &&
              maxVal - e.target.value >= gap &&
              setMinVal(e.target.value);
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
          value={maxVal}
          onChange={(e) => {
            e.target.value <= max &&
              e.target.value - minVal >= gap &&
              setMaxVal(e.target.value);
          }}
        />
      </div>
      <div className="slider-labels">
        {[...Array(30).keys()].map((value) => (
          <span key={value}>|</span>
        ))}
      </div>
    </div>
  );
};

export { RangeSlider };

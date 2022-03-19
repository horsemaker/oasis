import React, { useState } from "react";
import "./RangeSlider.css";

const RangeSlider = ({ min, max, gap }) => {
  const [minVal, setMinVal] = useState(2999);
  const [maxVal, setMaxVal] = useState(5999);
  const minMaxDiff = max - min;

  const progressLeft = ((minVal - 2999) / minMaxDiff) * 100 + "%";
  const progressRight = 100 - ((maxVal - 2999) / minMaxDiff) * 100 + "%";

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
          min={2999}
          max={5999}
          step={100}
          value={minVal}
          onChange={(e) => {
            e.target.value >= 2999 &&
              maxVal - e.target.value >= gap &&
              setMinVal(e.target.value);
          }}
        />
        <input
          type="range"
          name="range-max"
          id="range-max"
          className="range-max"
          min={2999}
          max={5999}
          step={100}
          value={maxVal}
          onChange={(e) => {
            e.target.value <= 5999 &&
              e.target.value - minVal >= gap &&
              setMaxVal(e.target.value);
          }}
        />
      </div>
      <div className="slider-labels">
        {[...Array(30).keys()].map(() => (
          <span>|</span>
        ))}
      </div>
    </div>
  );
};

export { RangeSlider };

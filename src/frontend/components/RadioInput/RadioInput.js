import React from "react";
import "./RadioInput.css";

const RadioInput = ({ inputName, inputLabel }) => {
  return (
    <div className="input-group input-radio">
      <input
        className="input-radio"
        type="radio"
        name={inputName}
        id={inputLabel}
      />
      <label htmlFor={inputLabel}>
        <small>{inputLabel}</small>
      </label>
    </div>
  );
};

export { RadioInput };

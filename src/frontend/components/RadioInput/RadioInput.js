import React from "react";

const RadioInput = ({ inputName, inputLabel }) => {
  return (
    <div className="input-group input-radio">
      <input
        className="input-filter"
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

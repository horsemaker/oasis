import React from "react";

const CheckboxInput = ({ inputName, inputLabel }) => {
  return (
    <div className="input-group input-checkbox">
      <input
        className="input-filter"
        type="checkbox"
        name={inputName}
        id={inputLabel}
      />
      <label htmlFor={inputLabel}>
        <small>{inputLabel}</small>
      </label>
    </div>
  );
};

export { CheckboxInput };

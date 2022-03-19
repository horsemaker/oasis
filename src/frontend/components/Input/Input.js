import React from "react";

const Input = ({ inputName, inputLabel, inputType }) => {
  return (
    <div className="input-group input-radio">
      <input
        className="input-filter"
        type={inputType}
        name={inputName}
        id={inputLabel}
      />
      <label htmlFor={inputLabel}>
        <small>{inputLabel}</small>
      </label>
    </div>
  );
};

export { Input };

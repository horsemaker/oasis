import React from "react";

const Input = ({
  inputName,
  inputLabel,
  inputType,
  inputState,
  inputDispatch,
  inputActionType,
}) => {
  return (
    <div className="input-group input-radio">
      <input
        className="oasis-input"
        type={inputType}
        name={inputName}
        id={inputLabel}
        checked={
          inputType === "radio"
            ? inputState && inputState === inputLabel
            : inputState.includes(inputLabel)
        }
        onChange={() =>
          inputDispatch({ type: inputActionType, payload: inputLabel })
        }
      />
      <label htmlFor={inputLabel}>
        <small>{inputLabel}</small>
      </label>
    </div>
  );
};

export { Input };

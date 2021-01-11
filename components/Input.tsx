import React from "react";
import "../styles/app.scss";

export const Input = (props) => {
  return (
    <div className="input">
      <input
        type={props.type}
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
        className="input__area"
        maxLength={props.maxLength}
      />
      <label
        className={
          props.value.length > 0 ? "input__label__active" : "input__label"
        }
      >
        {props.label}
      </label>
    </div>
  );
};

import React from "react";
import "../styles/app.scss";

export const Input = (props) => {
  return (
    <div className="input">
      <input type={props.type} className="input__area" />
      <label className="input__label">{props.label}</label>
    </div>
  );
};

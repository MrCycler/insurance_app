import React from "react";
import "../styles/app.scss";

export const Input = (props) => {
  return (
    <div className="input">
      <input type="email" className="input__area" />
      <label className="input__label">E-mail</label>
    </div>
  );
};

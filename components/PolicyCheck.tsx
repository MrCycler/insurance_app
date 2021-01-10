import React from "react";
import "../styles/app.scss";

export const PolicyCheck = (props) => {
  return (
    <div className="policy">
        <input type="checkbox" className="policy__check"></input>
        <p className="policy__label">{props.children}</p>
    </div>
  );
};
import React from "react";
import "../styles/app.scss";
import { RiArrowDropDownLine } from "react-icons/ri";

export const DropDown = (props) => {
  return (
    <div className="form__dropdown">
      <p>{props.title}</p>
      <RiArrowDropDownLine size="40" />
    </div>
  );
};

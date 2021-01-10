import React from "react";
import "../styles/app.scss";

export const Button = (props) => {
  return (
    <button className={props.active?"button__active":"button"} onClick={props.active?props.onClick:()=>{}}>
        {props.msg}
    </button>
  );
};
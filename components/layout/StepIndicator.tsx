import React from "react";
import "../../styles/app.scss";

export const StepIndicator = (props) => {
  return (
    <div className="step_indicator">
      <div className="step_indicator__button" onClick={props.back}>{"<"}</div>
      <p className="step_indicator__label"><b>PASO {props.step} </b>DE 7</p>
    </div>
  );
};
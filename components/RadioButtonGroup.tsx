import React from "react";
import "../styles/app.scss";
import { Label, Col, FormGroup, Input } from "reactstrap";
export const RadioButtonGroup = (props) => {
  return (
    <FormGroup tag="fieldset" row className="radio_button_group">
      <legend className="col-form-label col-sm-6">{props.title}</legend>
      <Col sm={10}>
        {props.options.map((option, i) => (
          <FormGroup check key={i}>
            <Label check>
              <Input
                type="radio"
                name={"radio2" + props.title}
                value={i}
                onChange={(e) => {
                  props.setValue(e.target.value);
                }}
              />{" "}
              {option}
            </Label>
          </FormGroup>
        ))}
      </Col>
    </FormGroup>
  );
};

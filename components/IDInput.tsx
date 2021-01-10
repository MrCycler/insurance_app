import React from "react";
import "../styles/app.scss";
import { Input} from 'reactstrap';

export const IDInput = (props) => {
  return (
    <div className="id">
    <Input type="select" name="select" id="exampleSelect" className="id__select">
          <option>DNI</option>
          <option>C.E.</option>
        </Input>
    <div className="input">
      <input type={props.type} value={props.value} onChange={(e)=>props.setValue(e.target.value)} className="input__area" maxLength={props.maxLength} />
      <label className={props.value.length>0?"input__label__active":"input__label"}>{props.label}</label>
    </div>
    </div>

  );
};
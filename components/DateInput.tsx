
import React from "react";
import "../styles/app.scss";
import { Input} from 'reactstrap';

export const DateInput = (props) => {
  return (
    <div className="date">
      <Input type="date"
          name="date"
          id="exampleDate"
          className="date__input"
          placeholder="date placeholder"
          value={props.value}
          onChange={(e)=>props.setValue(e.target.value)}
          />
          <label className="date__label">Fecha de Nacimiento</label>
      </div>
  );
};



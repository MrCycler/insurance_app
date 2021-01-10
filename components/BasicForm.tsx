import React from "react";
import "../styles/app.scss";

import { Input } from "./Input.tsx";

export const BasicForm = (props) => {
  return (
    <div className="form">
      <div  className="form__title">
        <p>Obtén tu&nbsp;</p>
        <p className="form__title__active">seguro ahora</p>
      </div>
      <p className="form__subtitle">Ingresa los datos para comenzar</p>
      <Input label="Nro de documento" type="number" />
      <Input label="Fecha de nacimiento" type="text" />
      <Input label="Celular" type="number" />
    </div>
  );
};

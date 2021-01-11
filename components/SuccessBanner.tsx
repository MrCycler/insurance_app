import React from "react";
import "../styles/app.scss";
import { Button } from "./Button.tsx";

export const SuccessBanner = (props) => {
  return (
    <div className="success">
      <div className="success__title">
        <p>
          ¿Gracias por <b>confiar en nosotros!</b>
        </p>
      </div>
      <p className="success__subtitle">
        Queremos conocer mejor la salud de los asegurados. Un asesor{" "}
        <b>se pondrá en contacto</b> contigo en las siguientes <b>48 horas.</b>
      </p>
      <Button msg="IR A SALUD" active={true} />
    </div>
  );
};

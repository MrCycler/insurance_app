import React, { useState, useEffect } from "react";
import "../styles/app.scss";

import { Input } from "./Input.tsx";
import { postClient } from "../api/clientProvider.tsx";

export const Form = (props) => {
  const [client, setClient] = useState({});

  //TODO: Se recibe del servicio
  useEffect(() => {
    const initialize = async () => {
      const _client = await postClient({});
      console.log(_client);
      setClient(_client);
    };

    initialize();
  }, []);

  return (
    <div className="form">
      <div className="form__title">
        <p>Hola,&nbsp;</p>
        <p className="form__title__active">{}</p>
      </div>
      <p className="form__subtitle">Valida que los datos sean correctos</p>
      <Input label="Nro de documento" type="number" />
      <Input label="Fecha de nacimiento" type="text" />
      <Input label="Celular" type="number" />
    </div>
  );
};

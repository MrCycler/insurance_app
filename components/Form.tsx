import React, { useState, useEffect } from "react";
import "../styles/app.scss";

//Form components
import { Input } from "./Input.tsx";

//Basic provider
import { postClient } from "../api/clientProvider.tsx";


export const Form = (props) => {
  const [client, setClient] = useState({"tercero":{"numDocumento":"","fecNacimiento":"",}});

  //TODO: Se recibe del servicio
  useEffect(() => {
    const initialize = async () => {
      const _client = await postClient({});
      console.log(_client);
      console.log(_client.tercero.numDocumento);
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
      <Input label="Nro de documento" type="number" value={client.tercero.numDocumento} />
      <Input label="Fecha de nacimiento" type="text" value={client.tercero.fecNacimiento}/>
    </div>
  );
};

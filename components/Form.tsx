import React, { useState, useEffect } from "react";
import "../styles/app.scss";

//moment for datetime
import moment from 'moment';
import { serverDateFormat } from "../util/dateFormat.tsx";

//Form components
import { Input } from "./Input.tsx";
import { DateInput} from "./DateInput.tsx";

//Basic provider
import { postClient } from "../api/clientProvider.tsx";

export const Form = (props) => {
  const [client, setClient] = useState({});

  const [documentType, setDocumentType] = useState("");
  const [documentNro, setDocumentNro] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [motherLastName, setMotherLastName] = useState("");
  const [date, setDate] = useState("");

  const [active, setActive] = useState(false);

  //TODO: Se recibe del servicio
  useEffect(() => {
    const initialize = async () => {
      const _client = await postClient({});
      setClient(_client);
      setDocumentType(_client.tercero.tipoDocumento);
      setDocumentNro(_client.tercero.numDocumento);
      setName(_client.tercero.nombres);
      setLastName(_client.tercero.apellidoPaterno);
      setMotherLastName(_client.tercero.apellidoMaterno);
      setDate(moment(_client.tercero.fecNacimiento).format(serverDateFormat));
    };

    initialize();
  }, []);

  return (
    <div className="form">
      <div className="form__title">
        <p>Hola,&nbsp;</p>
        <p className="form__title__active">{name}</p>
      </div>
      <p className="form__subtitle">Valida que los datos sean correctos</p>
      <p className="form__subtitle">Datos personales del titular</p>
      <Input
        label="Nro de documento"
        type="tel"
        value={documentNro}
        setValue={setDocumentNro}
        maxLength="8"
      />
      <Input label="Nombres" type="text" value={name} setValue={setName} />
      <Input
        label="Apellido Paterno"
        type="text"
        value={lastName}
        setValue={setLastName}
      />
      <Input
        label="Apellido Materno"
        type="text"
        value={motherLastName}
        setValue={setMotherLastName}
      />
      <DateInput
        value={date}
        setValue={setDate}
      />
    </div>
  );
};

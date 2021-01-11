import React, { useState, useEffect } from "react";
import "../styles/app.scss";

//moment for datetime
import moment from "moment";
import { serverDateFormat } from "../util/dateFormat.tsx";

//Form components
import { Input } from "./Input.tsx";
import { DateInput } from "./DateInput.tsx";
import { IDInput } from "./IDInput.tsx";
import { Button } from "./Button.tsx";
import { StepIndicator } from "./layout/StepIndicator.tsx";
import { RadioButtonGroup } from "./RadioButtonGroup.tsx";

//Basic provider
import { postClient } from "../api/clientProvider.tsx";
import { useRouter } from "next/router";

export const Form = (props) => {
  //use router
  const router = useRouter();

  const [client, setClient] = useState({});

  const [documentType, setDocumentType] = useState("");
  const [documentNro, setDocumentNro] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [motherLastName, setMotherLastName] = useState("");
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("");
  const [beneficiaries, setBeneficiaries] = useState("");

  //Verifica la consistencia de los datos
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

  useEffect(() => {
    if (
      documentNro.length == 8 &&
      date.match(/^(\d{4})-(\d{2})-(\d{2})$/) &&
      name !== "" &&
      lastName !== "" &&
      motherLastName !== "" &&
      gender !== "" &&
      beneficiaries !== ""
    ) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [
    documentNro,
    date,
    name,
    lastName,
    motherLastName,
    gender,
    beneficiaries,
  ]);

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/step2");
  };

  return (
    <div className="form">
      <StepIndicator step={1} back={router.back} />
      <div className="form__title">
        <p>Hola,&nbsp;</p>
        <p className="form__title__active">{name}</p>
      </div>
      <p className="form__subtitle">Valida que los datos sean correctos</p>
      <p className="form__subtitle">Datos personales del titular</p>
      <IDInput
        label="Nro de documento"
        type="tel"
        setValue={setDocumentNro}
        value={documentNro}
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
      <DateInput value={date} setValue={setDate} />
      <RadioButtonGroup
        title="Género"
        options={["Masculino", "Femenino"]}
        value={gender}
        setValue={setGender}
      />
      <RadioButtonGroup
        title="¿A quién vamos a asegurar?"
        options={["Solo a mí", "A mí y a mi familia"]}
        value={beneficiaries}
        setValue={setBeneficiaries}
      />
      <Button msg="CONTINUAR >" active={active} onClick={handleClick} />
    </div>
  );
};

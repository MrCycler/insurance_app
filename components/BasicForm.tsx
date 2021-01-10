import React, { useState, useEffect } from "react";
import "../styles/app.scss";
import { useRouter } from "next/router";

//Basic Form components
import { Input } from "./Input.tsx";
import { Button } from "./Button.tsx";
import { PolicyCheck } from "./PolicyCheck.tsx";
import { DateInput } from "./DateInput.tsx";

export const BasicForm = (props) => {
  //use router
  const router = useRouter();

  const [documentType, setdocumentType] = useState("");
  const [documentNro, setdocumentNro] = useState("");
  const [date, setDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  // policys aceptadas
  const [personalPolicy, setPersonalPolicy] = useState(false);
  const [comPolicy, setComPolicy] = useState(false);
  //boton activado
  const [active, setActive] = useState(false);

  //activa el boton si se cumplen las condiciones
  useEffect(() => {
    if (
      documentNro.length == 8 &&
      phoneNumber.length == 9 &&
      date.match(/^(\d{4})-(\d{2})-(\d{2})$/)&&
      personalPolicy&&
      comPolicy
    ) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [documentType, documentNro, date, phoneNumber,personalPolicy,comPolicy]);

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/step1");
  };

  return (
    <div className="form">
      <div className="form__title">
        <p>Obtén tu&nbsp;</p>
        <p className="form__title__active">seguro ahora</p>
      </div>
      <p className="form__subtitle">Ingresa los datos para comenzar</p>
      <Input
        label="Nro de documento"
        type="tel"
        setValue={setdocumentNro}
        value={documentNro}
        maxLength="8"
      />

      <Input
        label="Celular"
        type="tel"
        setValue={setPhoneNumber}
        value={phoneNumber}
        maxLength="9"
      />
      <DateInput value={date} setValue={setDate} />
      <PolicyCheck
        checked={personalPolicy}
        onClick={setPersonalPolicy}
      >
        Acepto la Politica de Protección de Datos Personales y los Términos y
        Condiciones
      </PolicyCheck>
      <PolicyCheck checked={comPolicy} onClick={setComPolicy}>
        Acepto la Politica de Envio de Comunicaciones Comerciales
      </PolicyCheck>
      <Button msg="COMENCEMOS" active={active} onClick={handleClick} />
    </div>
  );
};

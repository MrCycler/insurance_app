import React, { useState, useEffect } from "react";
import "../styles/app.scss";

//Basic Form components
import { Input } from "./Input.tsx";
import { Button } from "./Button.tsx";


export const BasicForm = (props) => {
  const [documentType, setdocumentType] = useState("");
  const [documentNro, setdocumentNro] = useState("");
  const [date, setDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [active, setActive] = useState(false);
  useEffect(() => {
    if ((documentNro.length==8)&&(phoneNumber.length==9)){
      setActive(true)
    }
  }, [documentType,documentNro,date,phoneNumber])

  return (
    <div className="form">
      <div  className="form__title">
        <p>Obtén tu&nbsp;</p>
        <p className="form__title__active">seguro ahora</p>
      </div>
      <p className="form__subtitle">Ingresa los datos para comenzar</p>
      <Input label="Nro de documento" type="tel" setValue={setdocumentNro} value={documentNro} maxLength="8"/>
      <Input label="Fecha de nacimiento" type="text" setValue={setDate} value={date} maxLength="14"/>
      <Input label="Celular" type="tel" setValue={setPhoneNumber} value={phoneNumber} maxLength="9"/>
      <Button msg="COMENCEMOS" active={active}/>
    </div>
  );
};

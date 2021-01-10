import React from "react";
import "../styles/app.scss";

const Item = (props) => {
  return (
    <div className="header__item">
      <img className="header__icon" src={props.src_icon}/>
      <p>{props.children}</p>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="header">
      <p className="header__title">
        Seguro de <br />
        <b>Salud</b>
      </p>
      <Item src_icon="/images/gl_mobile-20x20.png">Cómpralo de manera fácil y rápida</Item>
      <Item src_icon="/images/gl_shield-20x20.png">Cotiza y compra tu seguro 100% digital</Item>
      <Item src_icon="/images/gl_mobile-20x20.png">Hasta S/.12 millones de cobertura anual</Item>
      <Item src_icon="/images/gl_shield-20x20.png">Más de 300 clínicas en todo el Perú</Item>
      <p className="header__copyrigth">2020 RIMAC Seguros y Reaseguros</p>
    </div>
  );
};

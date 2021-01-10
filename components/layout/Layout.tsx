import React from "react";
import "../../styles/app.scss";


// Header component import
//TODO: correct tsx in tsx import
import { Header } from "../Header.tsx";

export const Layout = (props) => {
  return (
    <div className="layout">
      <Header />
      <img src="/images/Base.png" className="header__termination"/>
      {props.children}
    </div>
  );
};

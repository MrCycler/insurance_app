import React from "react";
import "../../styles/app.scss";

// Header component import
//TODO: correct tsx in tsx import
import { Header } from "../Header.tsx";

export const Layout = (props) => {
  let header = props.header_layout ? <Header /> : "";
  return (
    <div
      className={
        props.header_layout ? "layout__principal" : "layout__secondary"
      }
    >
      {header}
      <div className="header_termination">
        <img src="/images/Base.png" className="header_termination__base" />
        <img
          src="/images/Illustration-1.png"
          className="header_termination__watermark"
        />
      </div>
      {props.children}
    </div>
  );
};

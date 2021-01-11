import React from "react";
import "../styles/app.scss";



export const PlanBanner = (props) => {
  return (
    <div className="plan_banner">
        <div className="plan_banner__title">Cuentas con estos beneficios</div>
        <div className="plan_banner__cover">
        <p>Cobertura máxima</p>
        <p><b>S/{props.plan.max_cover}MM</b></p>
        <div>PLAN {props.plan.name}</div>
        </div>
        <div className="plan_banner__img"><img src="/images/Illustration.png" /></div>
        <div className="plan_banner__benefits">
            <p><b>Lima</b> (zona de cobertura)</p>
            <p><b>+30 clínicas</b> (en red afiliada)</p>
            <p>Médico a domicilio</p>
            <p>Chequeos preventivos</p>
            <p>Reembolso nacional</p>
            <p>Reembolso internacional</p>
        </div>

    </div>
  );
};
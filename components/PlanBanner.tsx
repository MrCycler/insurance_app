import React from "react";
import "../styles/app.scss";

import {AiFillHeart} from "react-icons/ai";

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
            <p className={props.plan.benefits_num>0?"":"plan_banner__benefits__deactive"}> <AiFillHeart/> <b>Lima</b> (zona de cobertura)</p>
            <p className={props.plan.benefits_num>1?"":"plan_banner__benefits__deactive"}> <AiFillHeart/> <b>+30 clínicas</b> (en red afiliada)</p>
            <p className={props.plan.benefits_num>2?"":"plan_banner__benefits__deactive"}> <AiFillHeart/> Médico a domicilio</p>
            <p className={props.plan.benefits_num>3?"":"plan_banner__benefits__deactive"}> <AiFillHeart/> Chequeos preventivos</p>
            <p className={props.plan.benefits_num>4?"":"plan_banner__benefits__deactive"}> <AiFillHeart/> Reembolso nacional</p>
            <p className={props.plan.benefits_num>5?"":"plan_banner__benefits__deactive"}> <AiFillHeart/> Reembolso internacional</p>
        </div>

    </div>
  );
};
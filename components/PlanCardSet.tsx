import React from "react";
import "../styles/app.scss";

const PlanCard = (props) => {
  return (
    <div
      className={props.active ? "card_set__card__active" : "card_set__card"}
      key={props.id}
      onClick={() => props.onClick(props.id)}
    >
      {props.active ? (
        <img src="/images/gl_correct.png" className="card_set__card__icon" />
      ) : (
        <div className="card_set__card__icon">
          <p>&nbsp;</p>
        </div>
      )}
      <p className="card_set__card__title">{props.name}</p>
      <p className="card_set__card__cost">
        S/.<b>{props.cost}</b>
      </p>

      <p className="card_set__card__label">mensual</p>
    </div>
  );
};

export const PlanCardSet = (props) => {
  return (
    <div className="card_set">
      {props.plans.map((plan, i) => (
        <PlanCard
          id={i}
          name={plan.name}
          cost={plan.cost}
          active={props.value === plan.id}
          onClick={props.setValue}
        />
      ))}
    </div>
  );
};

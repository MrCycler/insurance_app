import React, { useState, useEffect } from "react";
import "../styles/app.scss";

//Basic provider
import { useRouter } from "next/router";

//Form components
import { Button } from "./Button.tsx";
import { PlanCardSet } from "./PlanCardSet.tsx";
import { PlanBanner } from "./PlanBanner.tsx";
import { StepIndicator } from "./layout/StepIndicator.tsx";

export const PlanForm = (props) => {
  //use router
  const router = useRouter();

  const [plans, setPlans] = useState([
    { max_cover: "", name: "", benefits_num: 0 },
  ]);
  const [planselected, setPlanSelected] = useState(0);

  //Verifica la consistencia de los datos
  const [active, setActive] = useState(false);

  //TODO: Se recibe del servicio
  useEffect(() => {
    const initialize = async () => {
      setPlans([
        { id: 0, name: "BÁSICO", cost: 160, max_cover: 1, benefits_num: 2 },
        { id: 1, name: "AVANZADO", cost: 200, max_cover: 5, benefits_num: 4 },
        { id: 2, name: "PREMIUM", cost: 250, max_cover: 8, benefits_num: 6 },
        { id: 3, name: "FULL", cost: 500, max_cover: 10, benefits_num: 6 },
      ]);
      setPlanSelected(0);
    };

    initialize();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/success");
  };

  return (
    <div className="form">
      <StepIndicator step={2} back={router.back} />
      <div className="form__title">
        <p>Elige &nbsp;</p>
        <p className="form__title__active">tu protección</p>
      </div>
      <p className="form__subtitle">Selecciona tu plan de salud ideal</p>
      <PlanCardSet
        plans={plans}
        value={planselected}
        setValue={setPlanSelected}
      />
      <PlanBanner plan={plans[planselected]} />
      <Button msg="COMPRAR PLAN" active={true} onClick={handleClick} />
    </div>
  );
};

import React from "react";
import "./nutritionStats.scss";

type Props = {
  id: number;
  keyData: object[];
};

const NutritionStats = (props: Props) => {
  console.log(props[0].keyData);

  return (
    <div>
      <p>hi</p>
      <p>
        {props[0].keyData.map((item) => {
          return <p>{item}</p>;
        })}
      </p>
    </div>
  );
};

export default NutritionStats;

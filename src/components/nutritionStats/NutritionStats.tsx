import React from "react";
import "./nutritionStats.scss";
import NutritionStatCard from "../nutritionStatsCard/NutritionStatCard";

type Props = {
  id: number;
  keyData: object[];
};

const NutritionStats = (props: Props) => {
  // console.log(props[0].keyData);

  return (
    <div className="nutritionStats">
      <NutritionStatCard
        src={"/calories-icon.svg"}
        count={props.keyData.calorieCount}
        unit={"kCal"}
        title={"Calories"}
      />
      <NutritionStatCard
        src={"/protein-icon.svg"}
        count={props.keyData.proteinCount}
        unit={"g"}
        title={"Protéines"}
      />
      <NutritionStatCard
        src={"/carbs-icon.svg"}
        count={props.keyData.carbohydrateCount}
        unit={"g"}
        title={"Glucides"}
      />
      <NutritionStatCard
        src={"/fat-icon.svg"}
        count={props.keyData.lipidCount}
        unit={"g"}
        title={"Lipides"}
      />
    </div>
  );
};

export default NutritionStats;

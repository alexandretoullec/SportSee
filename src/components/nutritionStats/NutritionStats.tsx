import React from "react";
import "./nutritionStats.scss";
import NutritionStatCard from "../nutritionStatsCard/NutritionStatCard";

type Props = {
  id: number;
  keyData: object[];
};

const NutritionStats = ({ data }) => {
  console.log(data);

  return (
    <div className="nutritionStats">
      <NutritionStatCard
        src={"/calories-icon.svg"}
        count={data.calorieCount}
        unit={"kCal"}
        title={"Calories"}
      />
      <NutritionStatCard
        src={"/protein-icon.svg"}
        count={data.proteinCount}
        unit={"g"}
        title={"Protéines"}
      />
      <NutritionStatCard
        src={"/carbs-icon.svg"}
        count={data.carbohydrateCount}
        unit={"g"}
        title={"Glucides"}
      />
      <NutritionStatCard
        src={"/fat-icon.svg"}
        count={data.lipidCount}
        unit={"g"}
        title={"Lipides"}
      />
    </div>
  );
};

export default NutritionStats;

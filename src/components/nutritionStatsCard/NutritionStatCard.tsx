import React from "react";
import "./nutritionStatsCard.scss";

const NutritionStatCard = ({ src, count, unit, title }) => {
  return (
    <div className="nutritionStatsCard calories">
      <div className="calories__img">
        <img src={src} alt="" />
      </div>
      <div className="calories__text">
        <h2>
          {count}
          {unit}
        </h2>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default NutritionStatCard;

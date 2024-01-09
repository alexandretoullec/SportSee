import React from "react";
import "./roundedChart.scss";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
  PolarAngleAxis,
  Tooltip,
} from "recharts";

type Props = {
  id: number;
  score: number;
  todayScore: number;
};

const RoundedChart = ({ data }) => {
  // data = 1

  // if data undefined or not number
  if (!data || isNaN(data)) return null;

  // to define colored circle part and transparent circle part
  const score = [
    {
      fill: "#FF0000",
      value: data * 100,
    },
    {
      fill: "transparent",
      value: 100,
    },
  ];
  return (
    <div className="roundedChartBox">
      <h2 className="scoreTitle">Score</h2>
      <div className="chart">
        <ResponsiveContainer width="100%" height={183}>
          <RadialBarChart
            barSize={10}
            data={score}
            endAngle={450}
            height={250}
            innerRadius="100%"
            startAngle={90}
            width={250}
          >
            <RadialBar dataKey="value" />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
      <div className="text">
        <div className="score">
          <span>{score[0].value}%</span>
          <br />
          de votre
          <br /> objectif
        </div>
      </div>
    </div>
  );
};

export default RoundedChart;

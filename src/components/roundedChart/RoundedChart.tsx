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

// const data = [
//   { name: "Mobile", value: 400, color: "#0088FE" },
//   { name: "Desktop", value: 300, color: "#00C49F" },
//   { name: "Laptop", value: 300, color: "#FFBB28" },
//   { name: "Tablet", value: 200, color: "#FF8042" },
// ];

// const style = {
//   top: "50%",
//   right: 0,
//   transform: "translate(0, -50%)",
//   lineHeight: "24px",
// };

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
        <div className="Score">
          {score[0].value}%<br />
        </div>
        de votre
        <br /> objectif
      </div>
    </div>
  );
};

export default RoundedChart;

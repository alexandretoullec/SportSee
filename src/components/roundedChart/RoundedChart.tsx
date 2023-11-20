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
  todayScore: number;
};

const data = [
  { name: "Mobile", value: 400, color: "#0088FE" },
  { name: "Desktop", value: 300, color: "#00C49F" },
  { name: "Laptop", value: 300, color: "#FFBB28" },
  { name: "Tablet", value: 200, color: "#FF8042" },
];

const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

const RoundedChart = (props: Props) => {
  const score = Math.round(props[0].todayScore * 100);
  console.log(props[0].todayScore);
  const dataRiadialBar = [{ score: score, fill: "rgba(255, 0, 0, 1)" }];
  return (
    <div className="roundedChartBox">
      <div className="chart">
        <ResponsiveContainer width="100%" height={260}>
          <RadialBarChart
            data={dataRiadialBar}
            innerRadius="70%"
            startAngle={90}
            endAngle={450}
            className="score-radial"
          >
            <PolarAngleAxis
              dataKey="todayScore"
              type="number"
              domain={[0, 100]}
              tick={false}
            />
            <RadialBar dataKey="score" cornerRadius={10} />
            {/* <text className="score-radial-text">
              <tspan x={25} y={30}>
                Score
              </tspan>
            </text> */}
            {/* <Legend
                        content={<AverageScoreLegend data={score} />}
                        verticalAlign="middle"
                    /> */}
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RoundedChart;

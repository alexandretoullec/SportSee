import React from "react";
import "./radarChartComp.scss";
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";

type Props = {
  userId: number;
  kind: object;
  data: object[];
};

const RadarChartComp = (props: Props) => {
  const kinds = Object.values(props.kind);
  console.log(props.data);

  const kind = {
    1: "cardio",
    2: "energy",
    3: "endurance",
    4: "strength",
    5: "speed",
    6: "intensity",
  };

  // const datas = [
  //   props.data.map((item) => {
  //     console.log(item.value);
  //   }),
  // ];

  // console.log(datas);

  return (
    <div className="radarChartBox">
      <div className="chart">
        <ResponsiveContainer width="99%" height="80%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={props.data}>
            <PolarGrid radialLines={false} />
            <PolarAngleAxis
              dataKey="kind"
              tickFormatter={(value) => kind[value]}
              tick={{ fontSize: "12", fontWeight: "500", fill: "#FFFFFF" }}
            />

            <Radar
              name="performance"
              dataKey="value"
              stroke="rgba(255, 1, 1, 0.7)"
              fill="rgba(255, 1, 1, 0.7)"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RadarChartComp;

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
  sessions: object[];
};

const RadarChartComp = (props: Props) => {
  return (
    <div className="radarChartBox">
      <div className="chart">
        <ResponsiveContainer width="99%" height="80%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={props[0].data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="kind" />
            <PolarRadiusAxis />
            <Radar
              name="Mike"
              dataKey="kind"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RadarChartComp;

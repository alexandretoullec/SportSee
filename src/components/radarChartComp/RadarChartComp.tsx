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

const RadarChartComp = ({ data }) => {
  // if (!data) return null;
  // console.log(data);

  return (
    <div className="radarChartBox">
      <div className="chart">
        <ResponsiveContainer width="100%" height={263}>
          <RadarChart
            cx="50%"
            cy="50%"
            data={data}
            margin={{ top: 0, right: 30, bottom: 0, left: 50 }}
          >
            <PolarGrid radialLines={false} />
            <PolarAngleAxis
              dataKey="kind"
              tick={{ fontSize: "12", fontWeight: "500", fill: "#FFFFFF" }}
            />
            <Radar
              name="performance"
              dataKey="value"
              stroke="rgba(255, 1, 1, 0.7)"
              fill="rgba(255, 1, 1, 0.7)"
              fillOpacity={0.9}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RadarChartComp;

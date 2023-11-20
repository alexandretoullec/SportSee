import { type } from "os";
import React from "react";
import "./simpleChart.scss";
import { ResponsiveContainer, LineChart, Line, XAxis } from "recharts";

type Props = {
  userId: number;
  sessions: object[];
};

const SimpleChart = (props: Props) => {
  return (
    <div className="simpleChartBox">
      <div className="chart">
        <h2>Durée moyenne des sessions</h2>
        <ResponsiveContainer width="99%" height="80%">
          <LineChart width={300} height={100} data={props[0].sessions}>
            <Line
              type="monotone"
              dataKey="sessionLength"
              stroke="#8884d8"
              strokeWidth={2}
            />
            <XAxis dataKey="day" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SimpleChart;

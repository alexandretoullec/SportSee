import React from "react";
import "./simpleChart.scss";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  YAxis,
  Tooltip,
} from "recharts";

type Props = {
  userId: number;
  sessions: object[];
};

const SimpleChart = ({ data }) => {
  const dayOfWeek = {
    1: "L",
    2: "M",
    3: "M",
    4: "J",
    5: "V",
    6: "S",
    7: "D",
  };
  // console.log(data[0]);

  return (
    <div className="simpleChartBox">
      <div className="chart">
        <h2>Durée moyenne des sessions</h2>
        <ResponsiveContainer width="99%" height="100%">
          <LineChart
            margin={{
              // top: 5,
              right: 10,
              left: -50,
              // bottom: 15,
            }}
            data={data}
          >
            <CartesianGrid
              strokeDasharray=""
              vertical={false}
              horizontal={false}
            />
            <Line
              type="monotone"
              dataKey="sessionLength"
              stroke="#fff"
              strokeWidth={2}
              dot={false}
              unit={"min"}
            />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#FFFFFF", fontSize: "12px", fontWeight: "500" }}
              tickFormatter={(value) => dayOfWeek[value]}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ display: "none" }}
              domain={["dataMin-10", "dataMax+50"]}
            />
            <Tooltip
              itemStyle={{ color: "black", fontSize: 10, fontWeight: 500 }}
              // to display the unit and its value
              formatter={(value, name, unit) => [value, unit]}
              labelStyle={{ display: "none" }}
              contentStyle={{
                width: "40px",
                height: "25px",
                border: "none",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              cursor={{ stroke: "black", strokeOpacity: 0.2, strokeWidth: 40 }}
              offset={20}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SimpleChart;

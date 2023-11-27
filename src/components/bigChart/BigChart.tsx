import React from "react";
import "./bigChart.scss";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  YAxis,
  XAxis,
  Tooltip,
  Legend,
  Bar,
  Rectangle,
} from "recharts";

type Props = {
  userId: number;

  sessions: object[];
};

const BigChart = (props: Props) => {
  // console.log(props.sessions);

  return (
    <div className="bigChartBox">
      <div className="chart">
        <h2>Activité quotidienne</h2>
        <ResponsiveContainer width="99%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={props.sessions}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <Legend layout="horizontal" verticalAlign="top" align="right" />
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#DEDEDE"
              strokeWidth={1}
            />
            <XAxis
              dataKey={"day"}
              tickLine={false}
              stroke="#DEDEDE"
              strokeWidth={1}
              tick={{ fill: "#9B9EAC", fontSize: "14", fontWeight: "500" }}
            />
            <YAxis
              dataKey={"kilogram"}
              interval="preserveStart"
              tickCount={3}
              vertical={false}
              tickLine={false}
              axisLine={false}
              orientation="right"
              type="number"
              domain={["dataMin - 1", "dataMax +2"]}
              yAxisId={0}
              tick={{ fill: "#9B9EAC", fontSize: "14", fontWeight: "500" }}
            />
            <Tooltip
              itemStyle={{
                color: "white",
                fontSize: 10,
                fontWeight: 500,
              }}
              // to display the unit and its value
              formatter={(value, name, unit) => [value, unit]}
              // to style the label container Tooltip
              labelStyle={{ display: "none" }}
              contentStyle={{
                backgroundColor: "#E60000",
                width: "48px",
                height: "63px",
                border: "none",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            />

            <Bar
              dataKey="kilogram"
              fill="#282D30"
              barSize={10}
              radius={[10, 10, 0, 0]}
              activeBar={<Rectangle fill="#282D30" stroke="#282D30" />}
            />
            <Bar
              dataKey="calories"
              fill="#E60000"
              barSize={10}
              radius={[10, 10, 0, 0]}
              activeBar={<Rectangle fill="#E60000" stroke="#E60000" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BigChart;

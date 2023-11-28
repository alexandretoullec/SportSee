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

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const session = payload[0].payload;
    return (
      <div className="custom-tooltip">
        <p className="label">{`${session.kilogram}kg`}</p>
        <p className="label">{`${session.calories}kCal`}</p>
      </div>
    );
  }
  return null;
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
              top: 30,
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
              tickFormatter={(value) => new Date(value).getDate().toString()}
              tickMargin={15}
              tick={{ fill: "#9B9EAC", fontSize: "14", fontWeight: "500" }}
            />
            <YAxis
              yAxisId="kilogram"
              dataKey="kilogram"
              type="number"
              domain={["dataMin-2", "dataMax+1"]}
              tickCount="3"
              axisLine={false}
              orientation="right"
              tickLine={false}
              tick={{ fontSize: "14px" }}
              dx={15}
            />
            <YAxis
              yAxisId="calories"
              dataKey="calories"
              type="number"
              hide={true}
            />
            <Tooltip
              itemStyle={{
                color: "white",
                fontSize: 10,
                fontWeight: 500,
              }}
              // to display the unit and its value
              labelFormatter={(value, name, unit) => [value, unit]}
              // to style the label container Tooltip
              labelStyle={{ display: "none" }}
              contentStyle={{
                backgroundColor: "#E60000",
                width: "70px",
                height: "50px",
                border: "none",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            />

            <Bar
              dataKey="kilogram"
              yAxisId="kilogram"
              fill="#282D30"
              barSize={10}
              radius={[10, 10, 0, 0]}
              activeBar={<Rectangle fill="#282D30" stroke="#282D30" />}
            />
            <Bar
              dataKey="calories"
              yAxisId="calories"
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

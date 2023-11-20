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

// const data = [
//   {
//     userId: 12,
//     sessions: [
//       {
//         day: "2020-07-01",
//         kilogram: 80,
//         calories: 240,
//       },
//       {
//         day: "2020-07-02",
//         kilogram: 80,
//         calories: 220,
//       },
//       {
//         day: "2020-07-03",
//         kilogram: 81,
//         calories: 280,
//       },
//       {
//         day: "2020-07-04",
//         kilogram: 81,
//         calories: 290,
//       },
//       {
//         day: "2020-07-05",
//         kilogram: 80,
//         calories: 160,
//       },
//       {
//         day: "2020-07-06",
//         kilogram: 78,
//         calories: 162,
//       },
//       {
//         day: "2020-07-07",
//         kilogram: 76,
//         calories: 390,
//       },
//     ],
//   },
//   {
//     userId: 18,
//     sessions: [
//       {
//         day: "2020-07-01",
//         kilogram: 70,
//         calories: 240,
//       },
//       {
//         day: "2020-07-02",
//         kilogram: 69,
//         calories: 220,
//       },
//       {
//         day: "2020-07-03",
//         kilogram: 70,
//         calories: 280,
//       },
//       {
//         day: "2020-07-04",
//         kilogram: 70,
//         calories: 500,
//       },
//       {
//         day: "2020-07-05",
//         kilogram: 69,
//         calories: 160,
//       },
//       {
//         day: "2020-07-06",
//         kilogram: 69,
//         calories: 162,
//       },
//       {
//         day: "2020-07-07",
//         kilogram: 69,
//         calories: 390,
//       },
//     ],
//   },
// ];

type Props = {
  userId: number;

  sessions: object[];
};

const BigChart = (props: Props) => {
  // console.log(props[0].sessions);

  return (
    <div className="bigChartBox">
      <div className="chart">
        <h2>Activité quotidienne</h2>
        <ResponsiveContainer width="99%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={props[0].sessions}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <Legend layout="horizontal" verticalAlign="top" align="right" />
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip
              contentStyle={{
                background: "grey",
                border: "none",
                color: "white",
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

import React from "react";
import PieChartTooltip from "./common/PieChartTooltip";
import { Tooltip, Legend, PieChart, Pie, Cell } from "recharts";

const PieChartt = ({ confirmed, recovered, deaths }) => {
  const pieChartData = [
    { name: "confirmed", value: confirmed.value },
    { name: "recovered", value: recovered.value },
    { name: "deaths", value: deaths.value },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF"];
  return (
    <>
      {confirmed ? (
        <PieChart width={500} height={300}>
          <Pie
            data={pieChartData}
            color="#000000"
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
          >
            {pieChartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip content={<PieChartTooltip />} />
          <Legend />
        </PieChart>
      ) : null}
    </>
  );
};

export default PieChartt;

import React from "react";
import LineChartTooltip from "./common/LineChartTooltip";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { formatNumber } from "../utils/formatNumber";

const LineChartt = ({ data }) => {
  return (
    data.length && (
      <>
        <LineChart width={500} height={300} data={data}>
          <Line type="monotone" dataKey="confirmed" stroke="green" />
          <Line type="monotone" dataKey="deaths" stroke="red" />
          <CartesianGrid stroke="#ccc" strokeDasharray="1 1" />
          <XAxis dataKey="date" nameKey="date" />
          <YAxis
            dataKey="confirmed"
            nameKey="confirmed"
            tickFormatter={formatNumber}
          />
          <Tooltip content={<LineChartTooltip />} />
          <Legend />
        </LineChart>
      </>
    )
  );
};

export default LineChartt;

import React, { useEffect, useState } from "react";
import { fetchDailyData } from "../api";
import LineChartt from "./LineChart";
import PieChartt from "./PieChart";
import { Box } from "@chakra-ui/core";

const DisplayChart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchAPI();
  }, []);

  return (
    <Box marginTop={8}>
      {country ? (
        <PieChartt
          confirmed={confirmed}
          recovered={recovered}
          deaths={deaths}
        />
      ) : (
        <LineChartt data={dailyData} />
      )}
    </Box>
  );
};

export default DisplayChart;

import React, { useEffect, useState } from "react";
import PieChartt from "./PieChart";
import LineChartt from "./LineChart";
import { Box } from "@chakra-ui/core";
import { getDailyData } from "../services/dailyDataService";

const DisplayChart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await getDailyData());
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

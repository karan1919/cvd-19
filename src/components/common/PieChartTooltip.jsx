import React from "react";
import { useColorMode } from "@chakra-ui/core";
import { formatNumber } from "../../utils/formatNumber";
import { backgroundColor } from "../../utils/backgroundColor";

const styles = { padding: "5px", border: "1px solid #cccc" };

const PieChartTooltip = ({ active, payload }) => {
  const { colorMode } = useColorMode();
  if (active) {
    return (
      <div
        className="custom-tooltip"
        style={backgroundColor(colorMode, styles)}
      >
        <label>{`${payload[0].name} : ${formatNumber(
          payload[0].value
        )}`}</label>
      </div>
    );
  }
  return null;
};

export default PieChartTooltip;

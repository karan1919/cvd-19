import React from "react";
import { Spinner } from "@chakra-ui/core";
import Card from "./common/Card";

const CardStack = ({ data: { confirmed, recovered, deaths } }) => {
  if (!confirmed) {
    return <Spinner size="lg" />;
  }

  const cardItems = [
    { title: "Confirmed", value: confirmed.value.toLocaleString() },
    { title: "Recovered", value: recovered.value.toLocaleString() },
    { title: "Deaths", value: deaths.value.toLocaleString() },
  ];

  return (
    <>
      <Card items={cardItems} />
    </>
  );
};

export default CardStack;

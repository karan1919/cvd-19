import React from "react";
import { Text } from "@chakra-ui/core";

const Header = ({ country }) => {
  const renderHeader = (country) => {
    if (country) return country;
    return "Global";
  };

  return (
    <>
      <Text as="b" fontSize="xl" marginBottom={6}>
        {renderHeader(country)}
      </Text>
    </>
  );
};

export default Header;

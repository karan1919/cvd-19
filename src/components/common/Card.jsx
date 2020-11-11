import React from "react";
import { Text, Box, Stack } from "@chakra-ui/core";

const Card = ({ items }) => {
  return (
    <>
      <Stack spacing={6}>
        {items.map((item) => (
          <Box key={item.title} p={4} borderWidth="3px" rounded="lg">
            <Text as="b">{item.title}</Text>
            <br />
            <Text>{item.value}</Text>
          </Box>
        ))}
      </Stack>
    </>
  );
};

export default Card;

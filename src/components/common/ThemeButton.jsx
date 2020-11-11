import React from "react";
import { Button, Icon, useColorMode, Tooltip } from "@chakra-ui/core";

const ThemeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const renderIcon = (colorMode) => {
    if (colorMode === "light") return <Icon name="moon" />;
    return <Icon name="sun" />;
  };

  return (
    <Tooltip label="Change theme" placement="right-end" closeOnClick>
      <Button onClick={toggleColorMode} marginTop={6} marginLeft={6}>
        {renderIcon(colorMode)}
      </Button>
    </Tooltip>
  );
};

export default ThemeButton;

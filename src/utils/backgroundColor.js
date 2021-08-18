const darkBackgroundColor = { backgroundColor: "#1A202C" };
const lightBackgroundColor = { backgroundColor: "#fff" };

const addStyles = (bgColor, styles) => {
  return { ...bgColor, ...styles };
};

export const backgroundColor = (colorMode, styles) => {
  if (colorMode === "dark") {
    if (styles) addStyles(darkBackgroundColor, styles);
    return { ...darkBackgroundColor };
  } else {
    if (styles) addStyles(lightBackgroundColor, styles);
    return { ...lightBackgroundColor };
  }
};

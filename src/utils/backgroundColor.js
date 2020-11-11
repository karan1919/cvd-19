export const backgroundColor = (colorMode, styles) => {
  const darkBackgorundColor = { backgroundColor: "#1A202C" };
  const lightBackgroundColor = { backgroundColor: "#fff" };
  if (styles) {
    if (colorMode === "dark") return { ...darkBackgorundColor, ...styles };
    return { ...lightBackgroundColor, ...styles };
  } else {
    if (colorMode === "dark") return { ...darkBackgorundColor };
    return { ...lightBackgroundColor };
  }
};

import React, { useState, useEffect } from "react";
import { fetchCountries } from "../api";
import { backgroundColor } from "../utils/backgroundColor";
import { Select, Tooltip, useColorMode } from "@chakra-ui/core";

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  const { colorMode } = useColorMode();

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchAPI();
  }, [setFetchedCountries]);

  return (
    <>
      <Tooltip label="Select country" placement="auto" closeOnClick>
        <Select
          variant="filled"
          marginTop={8}
          onChange={(e) => handleCountryChange(e.target.value)}
        >
          <option value="" style={backgroundColor(colorMode)}>
            Global
          </option>
          {fetchedCountries.map((country, i) => (
            <option key={i} value={country} style={backgroundColor(colorMode)}>
              {country}
            </option>
          ))}
        </Select>
      </Tooltip>
    </>
  );
};

export default CountryPicker;

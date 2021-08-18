import React, { useState, useEffect } from "react";
import { Select, Tooltip, useColorMode } from "@chakra-ui/core";
import { backgroundColor } from "../utils/backgroundColor";
import { getCountries } from "../services/countryService";
import { toast } from "react-toastify";

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  const { colorMode } = useColorMode();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setFetchedCountries(await getCountries());
      } catch (ex) {
        if (ex.response && ex.response.status === 404) {
          toast.error("Failed to fetch country list.");
        }
        setFetchedCountries([]);
      }
    };
    fetchCountries();
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
          {fetchedCountries.length &&
            fetchedCountries.map((country, i) => (
              <option
                key={i}
                value={country}
                style={backgroundColor(colorMode)}
              >
                {country}
              </option>
            ))}
        </Select>
      </Tooltip>
    </>
  );
};

export default CountryPicker;

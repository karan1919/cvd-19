import httpService from "./httpService";

const apiEndpoint = `/countries`;

export const getCountryData = async (country) => {
  const {
    data: { confirmed, recovered, deaths, lastUpdate },
  } = await httpService.get(`${apiEndpoint}/${country}`);

  return { confirmed, recovered, deaths, lastUpdate };
};

export const getCountries = async () => {
  const {
    data: { countries },
  } = await httpService.get(`${apiEndpoint}`);
  return countries.map((country) => country.name);
};

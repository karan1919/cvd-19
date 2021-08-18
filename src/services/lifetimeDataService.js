import httpService from "./httpService";

const apiEndpoint = `/`;

export const getLifetimeData = async () => {
  const {
    data: { confirmed, recovered, deaths, lastUpdate },
  } = await httpService.get(`${apiEndpoint}`);

  return { confirmed, recovered, deaths, lastUpdate };
};

import httpService from "./httpService";

const apiEndpoint = `/daily`;

export const getDailyData = async () => {
  const { data } = await httpService.get(`${apiEndpoint}`);

  const dailyData = data.map((dailyData) => ({
    confirmed: dailyData.confirmed.total,
    deaths: dailyData.deaths.total,
    date: dailyData.reportDate,
  }));

  return dailyData;
};

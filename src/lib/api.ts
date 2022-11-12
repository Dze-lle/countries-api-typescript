import { ICountries } from "../interfaces/interfaces";

let BASE_URL = "https://restcountries.com/v2";

export const getListCountries = async (): Promise<ICountries[]> => {
  const response = await fetch(`${BASE_URL}/all`);
  return await response.json();
};

export const getCountryByCode = async (
  id: string | undefined
): Promise<ICountries> => {
  const response = await fetch(`${BASE_URL}/alpha/${id}`);
  return await response.json();
};

export const getCountriesByRegion = async (
  region: string | undefined
): Promise<ICountries[]> => {
  const response = await fetch(`${BASE_URL}/region/${region}`);
  return await response.json();
};

import { ICountries } from "../interfaces/interfaces";

export const getListCountries = async (): Promise<ICountries[]> => {
  const response = await fetch("https://restcountries.com/v2/all");
  return await response.json();
};

export const getCountryByCode = async (
  id: string | undefined
): Promise<ICountries> => {
  const response = await fetch(`https://restcountries.com/v2/alpha/${id}`);
  return await response.json();
};

import { ICountries } from "../interfaces/interfaces";

export const BASE_URL = "https://restcountries.com/v3.1/all";

export const getListCountries = async (): Promise<ICountries[]> => {
  const response = await fetch(BASE_URL);
  return await response.json();
};

//getCodeCountries

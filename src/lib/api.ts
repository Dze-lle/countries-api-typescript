import { ICountries } from "../interfaces/interfaces";

let BASE_URL = "https://restcountries.com/v2";

export async function getListCountries(): Promise<ICountries[]> {
  const response = await fetch(`${BASE_URL}/all`);
  return await response.json();
}

export async function getCountryByCode(id: string): Promise<ICountries> {
  const response = await fetch(`${BASE_URL}/alpha/${id}`);
  return await response.json();
}

export async function getCountriesByRegion(
  region: string
): Promise<ICountries[]> {
  const response = await fetch(`${BASE_URL}/region/${region}`);
  return await response.json();
}

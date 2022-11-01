export interface IGlobalTheme {
  darkMode: boolean;
}

export interface ICountries {
  ccn3: string;
  capital: string;
  flags: { png: string; svg: string };
  name: { common: string };
  region: string;
  population: number;
}

export interface IStateContext {
  countries: ICountries[];
  isLoading: boolean;
  isError: boolean;
}

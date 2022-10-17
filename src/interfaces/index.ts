export interface IGlobalTheme {
  darkMode: boolean;
}

export interface ICountries {
  region: string;
  name: { common: string };
  flags: { png: string; svg: string };
  capital: string;
  population: number;
}

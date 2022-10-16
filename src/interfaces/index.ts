export interface IGlobalTheme {
  darkMode: boolean;
}

export interface ICountries {
  flag: string;
  region: string;
  name: { common: string };
  flags: { png: string; svg: string };
}

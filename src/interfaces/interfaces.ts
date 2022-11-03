export interface IGlobalTheme {
  darkMode: boolean;
}

export interface ICountries {
  alpha3Code: string;
  topLevelDomain: string;
  capital: string;
  flags: { png: string };
  name: string;
  region: string;
  subregion: string;
  population: number;
  nativeName: string;
  currencies: [{ code: string }];
  languages: [{ name: string }];
  borders: [];
}

export interface IStateContext {
  countries: ICountries[];
  isLoading: boolean;
  isError: boolean;
}

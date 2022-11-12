export interface ITheme {
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
  currencies: [{ code: string; name: string; symbol: string }];
  languages: [{ name: string }];
  borders: [];
}

export interface IStateCountries {
  initialCountries: ICountries[];
  isLoading: boolean;
  isError: boolean;
  query: string;
}

export interface ISelectOption {
  label: string;
  value: string | number;
}

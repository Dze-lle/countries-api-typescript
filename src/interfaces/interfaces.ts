export interface Theme {
  darkMode: boolean;
}

export interface Countries {
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

export interface StateCountries {
  initialCountries: Countries[];
  isLoading: boolean;
  isError: boolean;
  query: string;
  countries: Countries[];
}

export interface SelectOption {
  label: string;
  value: string | number;
}

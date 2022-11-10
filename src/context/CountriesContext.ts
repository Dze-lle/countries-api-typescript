import { createContext, Dispatch } from "react";
import { ICountries, IStateCountries } from "../interfaces/interfaces";
import { CountriesAction } from "./CountriesReducer";

type CountriesContextProps = {
  state: IStateCountries;
  dispatch: Dispatch<CountriesAction>;
  filterCountries: ICountries[];
};

export const CountriesContext = createContext<CountriesContextProps>(
  {} as CountriesContextProps
);

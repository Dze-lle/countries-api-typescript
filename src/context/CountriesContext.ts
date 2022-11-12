import { createContext, Dispatch } from "react";
import {
  ICountries,
  ISelectOption,
  IStateCountries,
} from "../interfaces/interfaces";
import { CountriesAction } from "./CountriesReducer";

type CountriesContextProps = {
  state: IStateCountries;
  dispatch: Dispatch<CountriesAction>;
  filterCountries: ICountries[];
  options: ISelectOption[];
};

export const CountriesContext = createContext<CountriesContextProps>(
  {} as CountriesContextProps
);

import { createContext, Dispatch } from "react";
import { ISelectOption, IStateCountries } from "../interfaces/interfaces";
import { CountriesAction } from "./CountriesReducer";

type CountriesContextProps = {
  state: IStateCountries;
  dispatch: Dispatch<CountriesAction>;
  options: ISelectOption[];
};

export const CountriesContext = createContext<CountriesContextProps>(
  {} as CountriesContextProps
);

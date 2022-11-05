import { createContext, Dispatch } from "react";
import { IStateCountries } from "../interfaces/interfaces";
import { CountriesAction } from "./CountriesReducer";

type CountriesContextProps = {
  state: IStateCountries;
  dispatch: Dispatch<CountriesAction>;
};

export const CountriesContext = createContext<CountriesContextProps>(
  {} as CountriesContextProps
);

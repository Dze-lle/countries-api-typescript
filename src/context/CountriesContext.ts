import { createContext, Dispatch } from 'react';
import { SelectOption, StateCountries } from '../interfaces/interfaces';
import { CountriesAction } from './CountriesReducer';

type CountriesContextProps = {
  state: StateCountries;
  dispatch: Dispatch<CountriesAction>;
  options: SelectOption[];
};

export const CountriesContext = createContext<CountriesContextProps>(
  {} as CountriesContextProps
);

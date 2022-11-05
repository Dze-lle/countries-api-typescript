import { ICountries, IStateCountries } from "../interfaces/interfaces";

export type CountriesAction =
  | {
      type: "FETCH_COUNTRIES";
      payload: ICountries[];
    }
  | { type: "FILTER_COUNTRIES" }
  | { type: "FETCH_ERROR" }
  | { type: "HANDLE_SEARCH"; payload: string }
  | { type: "SET_DETAILS"; payload: ICountries };

export const CountriesReducer = (
  state: IStateCountries,
  action: CountriesAction
) => {
  switch (action.type) {
    case "FETCH_COUNTRIES":
      return {
        ...state,
        initialCountries: action.payload,
        countries: [],
        isLoading: false,
      };

    case "HANDLE_SEARCH":
      return {
        ...state,
        searchValue: action.payload,
      };

    case "FILTER_COUNTRIES":
      if (!!state.searchValue) {
        return {
          ...state,
          countries: state.initialCountries.filter(
            (d) => d.name.toLowerCase().indexOf(state.searchValue) !== -1
          ),
        };
      }
      return {
        ...state,
        countries: [],
      };

    case "FETCH_ERROR":
      return {
        ...state,
        isError: true,
        isLoading: false,
      };

    case "SET_DETAILS":
      return {
        ...state,
        country: action.payload,
      };

    default:
      return state;
  }
};

import { ICountries, IStateCountries } from "../interfaces/interfaces";

export type CountriesAction =
  | {
      type: "FETCH_COUNTRIES";
      payload: ICountries[];
    }
  | { type: "FETCH_ERROR" }
  | { type: "EVENT_SEARCH"; payload: string }
  | { type: "SEARCH_COUNTRIES" }
  | { type: "FILTER_BY_REGION"; payload: ICountries[] };

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

    case "FETCH_ERROR":
      return {
        ...state,
        isError: true,
        isLoading: false,
      };

    case "EVENT_SEARCH":
      return {
        ...state,
        query: action.payload.toLowerCase(),
      };

    case "SEARCH_COUNTRIES":
      if (!!state.query) {
        return {
          ...state,
          countries: state.initialCountries.filter(
            (d) => d.name.toLowerCase().indexOf(state.query) !== -1
          ),
        };
      }
      return {
        ...state,
        countries: [],
      };

    case "FILTER_BY_REGION":
      return {
        ...state,
        countries: action.payload,
      };

    default:
      return state;
  }
};

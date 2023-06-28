import { Countries, StateCountries } from '../interfaces/interfaces';

export type CountriesAction =
  | {
      type: 'FETCH_COUNTRIES';
      payload: Countries[];
    }
  | { type: 'FETCH_ERROR' }
  // | { type: "EVENT_SEARCH"; payload: string }
  | { type: 'SEARCH_COUNTRIES'; payload: string }
  | { type: 'FILTER_BY_REGION'; payload: Countries[] };

export const CountriesReducer = (
  state: StateCountries,
  action: CountriesAction
) => {
  switch (action.type) {
    case 'FETCH_COUNTRIES':
      return {
        ...state,
        initialCountries: action.payload,
        countries: [],
        isLoading: false,
      };

    case 'FETCH_ERROR':
      return {
        ...state,
        isError: true,
        isLoading: false,
      };

    // case "EVENT_SEARCH":
    //   return {
    //     ...state,
    //     query: action.payload.toLowerCase(),
    //   };

    case 'SEARCH_COUNTRIES':
      if (!!action.payload) {
        return {
          ...state,
          countries: state.initialCountries.filter(
            (d) => d.name.toLowerCase().indexOf(action.payload) !== -1
          ),
          query: action.payload,
        };
      }
      return {
        ...state,
        countries: [],
        query: '',
      };

    case 'FILTER_BY_REGION':
      return {
        ...state,
        countries: action.payload,
        query: state.query !== '' ? (state.query = '') : '',
      };

    default:
      return state;
  }
};

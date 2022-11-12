import { useContext } from "react";
import { CountriesContext } from "../context/CountriesContext";

export const useCountries = () => {
  const { state, dispatch, options } = useContext(CountriesContext);
  const { initialCountries, countries, isLoading, isError, query } = state;

  return {
    initialCountries,
    isLoading,
    isError,
    dispatch,
    countries,
    query,
    options,
  };
};

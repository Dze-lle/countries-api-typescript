import { useContext } from "react";
import { CountriesContext } from "../context/CountriesContext";

export const useCountries = () => {
  const { state, dispatch, filterCountries, options } =
    useContext(CountriesContext);
  const { initialCountries, isLoading, isError, query } = state;

  return {
    initialCountries,
    isLoading,
    isError,
    dispatch,
    filterCountries,
    query,
    options,
  };
};

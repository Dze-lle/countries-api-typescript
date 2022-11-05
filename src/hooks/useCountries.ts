import { useContext } from "react";
import { CountriesContext } from "../context/CountriesContext";

export const useCountries = () => {
  const { state, dispatch } = useContext(CountriesContext);
  const { initialCountries, countries, isLoading, isError, searchValue } =
    state;

  return {
    initialCountries,
    countries,
    isLoading,
    isError,
    searchValue,
    dispatch,
  };
};

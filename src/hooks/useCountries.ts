import { useContext } from "react";
import { CountryContext } from "../context/CountryContext";

export const useCountries = () => {
  const { countries, isLoading, isError } = useContext(CountryContext);

  return { countries, isLoading, isError };
};

import { useEffect, useState } from "react";
import { ICountries } from "../interfaces/interfaces";
import { BASE_URL } from "../lib/api";
import { CountryContext } from "./CountryContext";

type props = {
  children: JSX.Element | JSX.Element[];
};

export const CountryProvider = ({ children }: props) => {
  const [countries, setCountries] = useState<ICountries[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(false);

  async function getCountries() {
    setIsLoading(true);
    setError(false);
    try {
      const response = await fetch(BASE_URL);
      const data = await response.json();
      setCountries(data);
      setIsLoading(false);
    } catch (err) {
      setError(true);
    }
  }

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <CountryContext.Provider value={{ countries, isLoading, isError }}>
      {children}
    </CountryContext.Provider>
  );
};

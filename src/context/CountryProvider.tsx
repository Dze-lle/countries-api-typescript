import { useEffect, useState } from "react";
import { ICountries } from "../interfaces/interfaces";
import { getListCountries } from "../lib/api";
import { CountryContext } from "./CountryContext";
import PromisePool from "@supercharge/promise-pool";

type props = {
  children: JSX.Element | JSX.Element[];
};

export const CountryProvider = ({ children }: props) => {
  const [countries, setCountries] = useState<ICountries[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(false);

  async function setListCountries() {
    setIsLoading(true);
    setError(false);
    try {
      const data = await getListCountries();
      const { results } = await PromisePool.withConcurrency(20)
        .for(data)
        .process(async (res) => {
          return await res;
        });

      setCountries(results);
      setIsLoading(false);
    } catch (err) {
      setError(true);
    }
  }

  useEffect(() => {
    setListCountries();
  }, []);

  return (
    <CountryContext.Provider value={{ countries, isLoading, isError }}>
      {children}
    </CountryContext.Provider>
  );
};

import { useEffect, useReducer, useState } from "react";
import { ICountries, IStateCountries } from "../interfaces/interfaces";
import { getListCountries } from "../lib/api";
import { CountriesContext } from "./CountriesContext";
import PromisePool from "@supercharge/promise-pool";
import { CountriesReducer } from "./CountriesReducer";

type props = {
  children: JSX.Element | JSX.Element[];
};

const INITIAL_STATE: IStateCountries = {
  initialCountries: [],
  countries: [],
  isLoading: true,
  isError: false,
  searchValue: "",
};

export const CountriesProvider = ({ children }: props) => {
  const [state, dispatch] = useReducer(CountriesReducer, INITIAL_STATE);

  async function setListCountries() {
    try {
      const data = await getListCountries();
      const { results } = await PromisePool.withConcurrency(20)
        .for(data)
        .process(async (res) => await res);
      dispatch({ type: "FETCH_COUNTRIES", payload: results });
    } catch (err) {
      dispatch({ type: "FETCH_ERROR" });
    }
  }
  useEffect(() => {
    setListCountries();
  }, []);

  return (
    <CountriesContext.Provider value={{ state, dispatch }}>
      {children}
    </CountriesContext.Provider>
  );
};

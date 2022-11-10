import { useEffect, useMemo, useReducer } from "react";
import { IStateCountries } from "../interfaces/interfaces";
import { getListCountries } from "../lib/api";
import { CountriesContext } from "./CountriesContext";
import PromisePool from "@supercharge/promise-pool";
import { CountriesReducer } from "./CountriesReducer";

type props = {
  children: JSX.Element | JSX.Element[];
};

const INITIAL_STATE: IStateCountries = {
  initialCountries: [],
  isLoading: true,
  isError: false,
  query: "",
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

  const filterCountries = useMemo(
    () =>
      state.initialCountries.filter((item) =>
        item.name.toLowerCase().includes(state.query)
      ),
    [state.initialCountries, state.query]
  );

  return (
    <CountriesContext.Provider value={{ state, dispatch, filterCountries }}>
      {children}
    </CountriesContext.Provider>
  );
};

import React, { useReducer } from "react";
import { IGlobalTheme } from "../interfaces";
import { ThemeContext } from "./ThemeContext";
import { ThemeReducer } from "./ThemeReducer";

const INITIAL_STATE: IGlobalTheme = {
  darkMode: false,
};

type props = {
  children: JSX.Element | JSX.Element[];
};

export const ThemeProvider = ({ children }: props) => {
  const [globalTheme, dispatch] = useReducer(ThemeReducer, INITIAL_STATE);

  return (
    <ThemeContext.Provider value={{ globalTheme, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

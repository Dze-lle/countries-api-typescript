import React, { useEffect, useReducer } from "react";
import { IGlobalTheme } from "../interfaces";
import { ThemeContext } from "./ThemeContext";
import { ThemeReducer } from "./ThemeReducer";

const { darkMode } = localStorage.getItem("themeMode")
  ? JSON.parse(localStorage.getItem("themeMode")!)
  : false;

const INITIAL_STATE: IGlobalTheme = {
  darkMode: darkMode || false,
};

type props = {
  children: JSX.Element | JSX.Element[];
};

export const ThemeProvider = ({ children }: props) => {
  const [globalTheme, dispatch] = useReducer(ThemeReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("themeMode", JSON.stringify(globalTheme));
  }, [globalTheme.darkMode]);

  return (
    <ThemeContext.Provider value={{ globalTheme, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

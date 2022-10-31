import { createContext, Dispatch } from "react";
import { IGlobalTheme } from "../interfaces/interfaces";
import { ThemeAction } from "./ThemeReducer";

type ThemeContextProps = {
  globalTheme: IGlobalTheme;
  dispatch: Dispatch<ThemeAction>;
};

export const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps
);

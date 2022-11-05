import { createContext, Dispatch } from "react";
import { ITheme } from "../interfaces/interfaces";
import { ThemeAction } from "./ThemeReducer";

type ThemeContextProps = {
  globalTheme: ITheme;
  dispatch: Dispatch<ThemeAction>;
};

export const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps
);

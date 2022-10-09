import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const useTheme = () => {
  const { globalTheme, dispatch } = useContext(ThemeContext);
  const { darkMode } = globalTheme;

  return { darkMode, dispatch };
};

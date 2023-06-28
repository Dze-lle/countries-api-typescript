import { createContext, Dispatch } from 'react';
import { Theme } from '../interfaces/interfaces';
import { ThemeAction } from './ThemeReducer';

type ThemeContextProps = {
  globalTheme: Theme;
  dispatch: Dispatch<ThemeAction>;
};

export const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps
);

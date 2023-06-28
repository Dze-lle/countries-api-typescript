import React, { useEffect, useReducer } from 'react';
import { Theme } from '../interfaces/interfaces';
import { ThemeContext } from './ThemeContext';
import { ThemeReducer } from './ThemeReducer';

const { darkMode } = localStorage.getItem('UI-Theme')
  ? JSON.parse(localStorage.getItem('UI-Theme')!)
  : false;

const INITIAL_STATE: Theme = {
  darkMode: darkMode || false,
};

type props = {
  children: JSX.Element | JSX.Element[];
};

export const ThemeProvider = ({ children }: props) => {
  const [globalTheme, dispatch] = useReducer(ThemeReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem('UI-Theme', JSON.stringify(globalTheme));
  }, [globalTheme.darkMode]);

  return (
    <ThemeContext.Provider value={{ globalTheme, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

import { IGlobalTheme } from "../interfaces";

export type ThemeAction = { type: "TOGGLE_MODE"; payload: boolean };

export const ThemeReducer = (state: IGlobalTheme, action: ThemeAction) => {
  switch (action.type) {
    case "TOGGLE_MODE":
      return {
        darkMode: action.payload,
      };

    default:
      return state;
  }
};

import { Theme } from '../interfaces/interfaces';

export type ThemeAction = { type: 'TOGGLE_MODE' };

export const ThemeReducer = (state: Theme, action: ThemeAction) => {
  switch (action.type) {
    case 'TOGGLE_MODE':
      return {
        darkMode: !state.darkMode,
      };

    default:
      return state;
  }
};

import { createContext } from "react";
import { IStateContext } from "../interfaces/interfaces";

export const CountryContext = createContext<IStateContext>({} as IStateContext);

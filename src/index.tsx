import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CountryProvider } from "./context/CountryProvider";
import { ThemeProvider } from "./context/ThemeProvider";
import { useTheme } from "./hooks/useTheme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <CountryProvider>
        <App />
      </CountryProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

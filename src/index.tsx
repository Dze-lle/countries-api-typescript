import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CountriesProvider } from "./context/CountriesProvider";
import { ThemeProvider } from "./context/ThemeProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <CountriesProvider>
        <App />
      </CountriesProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

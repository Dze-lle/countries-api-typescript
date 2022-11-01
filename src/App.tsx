import "./assets/scss/style.scss";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Header from "./components/Header";
import { useTheme } from "./hooks/useTheme";
import { useCountries } from "./hooks/useCountries";

function App() {
  const { darkMode } = useTheme();
  const { isLoading } = useCountries();

  return (
    <main className={`app ${darkMode ? `dark` : ``}`}>
      {isLoading ? (
        <p className="loading">loading...</p>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/countries-api-typescript" replace />}
            />
            <Route path="/countries-api-typescript" element={<Header />}>
              <Route index element={<Home />} />
              <Route path=":id" element={<Details />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </main>
  );
}

export default App;

import "./assets/scss/style.scss";
import { useTheme } from "./hooks/useTheme";
import { useCountries } from "./hooks/useCountries";
import RouterLayout from "./router/RouterLayout";

function App() {
  const { darkMode } = useTheme();
  const { isLoading } = useCountries();

  return (
    <main className={`app ${darkMode ? `dark` : ``}`}>
      {isLoading ? <p className="loading">loading...</p> : <RouterLayout />}
    </main>
  );
}

export default App;

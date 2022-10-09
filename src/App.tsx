import Navbar from "./components/Navbar";
import "./assets/scss/style.scss";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { darkMode } = useTheme();

  return (
    <main className={`app ${darkMode ? `dark` : ``}`}>
      <Navbar />
    </main>
  );
}

export default App;

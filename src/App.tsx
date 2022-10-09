import Navbar from "./components/Header";
import "./assets/scss/style.scss";
import { useTheme } from "./hooks/useTheme";
import Header from "./components/Header";
import Container from "./components/container/Container";
import Footer from "./components/Footer";

function App() {
  const { darkMode } = useTheme();

  return (
    <main className={`app ${darkMode ? `dark` : ``}`}>
      <Header />
      <Container />
      <Footer />
    </main>
  );
}

export default App;

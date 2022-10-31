import "./assets/scss/style.scss";
import { useTheme } from "./hooks/useTheme";
import Header from "./components/Header";
import Container from "./components/container/Container";
import Footer from "./components/Footer";
import { useCountries } from "./hooks/useCountries";

function App() {
  const { darkMode } = useTheme();
  const { isLoading } = useCountries();

  return (
    <main className={`app ${darkMode ? `dark` : ``}`}>
      {isLoading ? (
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "25px",
            fontWeight: "bold",
            fontStyle: "italic",
            height: "100vh",
          }}
        >
          Loading...
        </p>
      ) : (
        <>
          <Header />
          <Container />
          <Footer />
        </>
      )}
    </main>
  );
}

export default App;

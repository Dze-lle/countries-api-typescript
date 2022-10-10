import { useTheme } from "../hooks/useTheme";

const Header = () => {
  const { darkMode, dispatch } = useTheme();

  return (
    <header>
      <h1>where in the world?</h1>
      <button onClick={() => dispatch({ type: "TOGGLE_MODE" })}>
        dark mode
      </button>
    </header>
  );
};

export default Header;

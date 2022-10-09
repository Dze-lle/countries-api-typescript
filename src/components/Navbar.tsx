import { useTheme } from "../hooks/useTheme";

const Navbar = () => {
  const { darkMode, dispatch } = useTheme();

  return (
    <nav className="nav">
      <h1>where in the world?</h1>
      <button
        onClick={() => dispatch({ type: "TOGGLE_MODE", payload: !darkMode })}
      >
        dark mode
      </button>
    </nav>
  );
};

export default Navbar;

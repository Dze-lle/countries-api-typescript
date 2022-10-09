import { useTheme } from "../hooks/useTheme";

const Navbar = () => {
  const { darkMode, dispatch } = useTheme();

  return (
    <nav>
      <div></div>
      <div>
        <button
          onClick={() => dispatch({ type: "TOGGLE_MODE", payload: !darkMode })}
        >
          dark mode
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

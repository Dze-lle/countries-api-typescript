import { FaMoon } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

const Header = () => {
  const { dispatch, darkMode } = useTheme();

  return (
    <>
      <header>
        <h1>where in the world?</h1>
        <button onClick={() => dispatch({ type: "TOGGLE_MODE" })}>
          <FaMoon className="icon" />
          <span>{`${darkMode ? `light` : `dark`}`} mode</span>
        </button>
      </header>
      <Outlet />
    </>
  );
};

export default Header;

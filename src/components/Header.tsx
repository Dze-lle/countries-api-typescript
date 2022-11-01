import { Outlet } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

const Header = () => {
  const { dispatch } = useTheme();

  return (
    <>
      <header>
        <h1>where in the world?</h1>
        <button onClick={() => dispatch({ type: "TOGGLE_MODE" })}>
          dark mode
        </button>
      </header>
      <Outlet />
    </>
  );
};

export default Header;

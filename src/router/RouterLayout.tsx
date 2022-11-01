import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Details from "../pages/Details";
import Home from "../pages/Home";

const RouterLayout = () => {
  return (
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
  );
};

export default RouterLayout;

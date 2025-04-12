import { Routes, Route } from "react-router-dom";
import { Global } from "@emotion/react";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage";
import ItemPage from "./pages/ItemPage";
import GlobalStyles from "./styles/GlobalStyles";

/** @jsxImportSource @emotion/react */
function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Routes>
        <Route element={<Header />}>
          <Route index element={<MainPage />} />
          <Route path="/items" element={<ItemPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
